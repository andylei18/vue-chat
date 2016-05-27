'use strict'

export default function (ref) {
  // check if user has logged in to wilddog.
  const checkAuth = () => new Promise((resolve, reject) => ref.getAuth() ? resolve() : reject())

  // 登录野狗服务器
  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      ref.authWithPassword({
        email,
        password
      }, (error, data) => {// login success handler.
        if (error) {
          reject('Login Failed!')
        } else {
          resolve(data)
        }
      })
    })
  }

  const signOut = () => {
    return new Promise(function (resolve, reject) {
      ref.unauth()
      resolve()
    })
  }

  return {
    checkAuth,
    signIn,
    signOut
  }
}
