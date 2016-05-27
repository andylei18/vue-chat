import * as api from '../api'

export const checkAuth = ({dispatch}) => {
  api.auth.checkAuth().then(
    () => {
      dispatch('AUTH_SIGN_IN_OK')
      dispatch('MODAL_CLOSE', 'LOGIN')
    },
    () => {
      dispatch('AUTH_REQUIRED');
      dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Please sign in ...'})
    }
  )
}

// export const singIn = ({dispatch}, uemail, upwd) => {
//   return api.auth.signIn(uemail, upwd).then(
//     () => {
//       dispatch('AUTH_SIGN_IN_OK')
//       dispatch('MODAL_CLOSE', 'LOGIN')
//     },
//     () => {
//       dispatch('AUTH_SIGN_IN_FAILED')
//       dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Invalid email or password'})
//     }
//   )
// }

export const singIn = ({ dispatch }, uemail, upwd ) => {
  api.getSignin(uemail, upwd => {
    dispatch('RECEIVE_USER',uemail,upwd)
  })

}


//获取所有信息
export const getAllMessages = ({ dispatch }) => {
  api.getAllMessages(messages => {
    dispatch('RECEIVE_ALL', messages)
  })
}

//切换用户
export const switchThread = ({ dispatch }, id) => {
  dispatch('SWITCH_THREAD', id)
}

//发送消息
export const sendMessage = ({ dispatch }, text, thread) => {
  api.createMessage({ text, thread }, message => {
    dispatch('RECEIVE_MESSAGE', message)
  })
}
