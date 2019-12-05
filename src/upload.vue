<template>
  <div class="b-upload" ref="upload">
    <div @click="onClickUpload">
      <slot/>
    </div>
    <slot name="tips"/>
    <div v-for="(item, index) in fileList">
      <img :src="item.url" alt="" width="100">
      <span>{{item.name}}</span>
      <span class="delete" @click="onRemoveFile(index)">删除</span>
    </div>
  </div>
</template>

<script>
  /**
   * @param action    上传的地址
   * @param multiple  是否多文件上传
   * @param name      发送的文件参数名称
   * @param fileList  文件列表
   * @param method    提交请求的方法
   */
  export default {
    name: 'b-upload',
    props: {
      action: {
        type: String,
        required: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'POST'
      },
      fileList: {
        type: Array,
        default: () => []
      },
      sizeLimit: {
        type: Number
      },
      onSuccess: {
        type: Function,
        required: true
      },
      onError: {
        type: Function,
        default: (error) => {
          console.log(error)
        }
      }
    },
    data () {
      return {

      }
    },
    methods: {
      onClickUpload () {
        let input = this.createInput()
        input.addEventListener('change', () => {
          console.log(input.files)
          let rawFile = input.files[0]
          input.remove()
          console.log(rawFile)
          this.uploadFile(rawFile)
        })
        input.click()
      },
      createInput () {
        this.$refs.upload.childNodes.forEach(node => {
          node.nodeName === 'INPUT' && node.remove()
        })
        let input = document.createElement('input')
        input.type = 'file'
        input.style = 'display: none;'
        input.multiple = this.multiple
        this.$refs.upload.appendChild(input)
        return input
      },
      uploadFile (rawFile) {
        let { name, size, type } = rawFile
        console.log(name, size, type)
        if (size > this.sizeLimit) {
          return
        }
        let formData = new FormData()
        formData.append(this.name, rawFile)
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          let data = JSON.parse(xhr.responseText)
          let { path, filename } = data
          this.onSuccess(data)
          this.$emit('update:fileList', [...this.fileList, { name, filename, size, type, url: `http://localhost:3000/preview/${filename}`, path }])
        }
        xhr.onerror = () => {
          this.onError(xhr.response)
        }
        xhr.send(formData)

      },
      onRemoveFile (index) {
        let fileList = [...this.fileList]
        fileList.splice(index, 1)
        this.$emit('update:fileList', fileList)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
