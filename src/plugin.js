import Toast from './toast'

let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions = {}) {
      if (currentToast) {
        currentToast.closeToast()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
          console.log(currentToast)
        }
      })
    }
  }
}

function createToast ({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$on('beforeClose', onClose)
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
