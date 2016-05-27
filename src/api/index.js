'use strict'

import data from './mock-data'
const LATENCY = 16
import Wilddog from "wilddog"
const ref = new Wilddog("https://vuechat118.wilddogio.com/")
const userdb= new Wilddog("https://userlist.wilddogio.com/")

export function getSignin ({ uemail, upwd }, cb) {
  //查询用户是否被注册
  // userdb.createUser({email:uemail,password:upwd},
  //   function(err,data){
  //     if(err!=null){
  //       //not success
  //       console.log(err)
  //     } else {
  //       //create user success
  //       console.log(data)
  //     }
  // })
  //登陆
  userdb.authWithPassword({email:uemail,password:upwd},
    function(err,data){
      if(err == null){
        console.log("auth success!");
      } else {
        console.log("auth failed,msg:",err);
      }
    }
  )
}

export function getAllMessages (cb) {
  setTimeout(() => {
    //cb(data)
    ref.child('messages').on("value", (snapshot) =>{
        cb(snapshot)
    },(errorObject) => {
        console.log("The read failed: " + errorObject.code)
    })
  }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  }
  setTimeout(function () {
    cb(message)
    ref.child('messages').push(message)
  }, LATENCY)
}
