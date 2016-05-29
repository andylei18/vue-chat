'use strict'
import Wilddog from "wilddog"
import authApi from "./authApi"
import usersApi from "./usersApi"
const LATENCY = 16

const USERDB = new Wilddog('https://userlist.wilddogio.com/')//用户表
const MSGDB= new Wilddog("https://vuechat118.wilddogio.com/")//聊天表
window.USERDB = USERDB

//调用野狗
const auth = authApi(USERDB)
const users = usersApi(USERDB)

//获取全部chat信息
export function getAllMessages (cb) {
  setTimeout(() => {
    MSGDB.child('messages').on("value", (snapshot) =>{
        cb(snapshot)
    },(errorObject) => {
        console.log("The read failed: " + errorObject.code)
    })
  }, LATENCY)
}

export default {
  auth,
  users,
  getAllMessages
}
