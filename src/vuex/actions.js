export const showToast = ({ dispatch }, msg) => {
  dispatch('SHOW_TOAST', msg)
  setTimeout(() => {
    dispatch('HIDE_TOAST')
  }, 3000)
}
