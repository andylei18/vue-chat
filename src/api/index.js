'use strict'
import Wilddog from "wilddog"
import authApi from "./authApi"
//import panelsApi from "./panelsApi"

const WilddogID = 'userlist'

const ref = new Wilddog('https://'+ WilddogID +'.wilddogio.com/')
const messageRef= new Wilddog("https://vuechat118.wilddogio.com/")
const LATENCY = 16
window.ref = ref
const auth = authApi(ref)
//const panels = panelsApi(ref)


export function getAllMessages (cb) {
  setTimeout(() => {
    messageRef.child('messages').on("value", (snapshot) =>{
        cb(snapshot)
    },(errorObject) => {
        console.log("The read failed: " + errorObject.code)
    })
  }, LATENCY)
}

export default {
  auth,
  getAllMessages
  //panels
}
