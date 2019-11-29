<template>
    <div class="b-upload" ref="upload">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <div v-for="item in fileList">
            <img src="item.url" alt="">
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
            fileList: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {

            }
        },
        methods: {
            onClickUpload () {
                this.createInput()
                let input = this.createInput()
                input.addEventListener('change', (e) => {
                    let file = input.files[0]
                    input.remove()
                    console.log(file)
                    this.uploadFile(file)
                })
                input.click()
            },
            createInput () {
                let input = document.createElement('input')
                input.type = 'file'
                input.style = 'width: 0; height: 0;'
                input.multiple = this.multiple
                this.$refs.upload.appendChild(input)
                return input
            },
            uploadFile (file) {
                let { name, size, type } = file
                console.log(name, size, type)
                let formData = new FormData()
                formData.append(this.name, file)
                let xhr = new XMLHttpRequest()
                console.log(this.action)
                xhr.open('POST', this.action)
                xhr.onload = (res) => {
                    console.log(JSON.parse(xhr.responseText))
                    let { url, path } = JSON.parse(xhr.responseText)
                    // this.fileList.push(res.data)
                    console.log(path)
                    this.$emit('update:fileList', [...this.fileList, { name, size, type, url, path }])
                    console.log(this.fileList)
                }
                xhr.send(formData)

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
