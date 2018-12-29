let callBacks = []
let onClickDocument = (e) => {
  let { target } = e
  callBacks.forEach(item => {
    if (item.el !== target && !item.el.contains(target)) { item.callBack() }
  })
}
let removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

document.addEventListener('click', onClickDocument)

export default {
  bind: function (el, binding) {
    callBacks.push({ el, callBack: binding.value })
  }
}
export { removeListener }
