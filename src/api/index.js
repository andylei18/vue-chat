'use strict'

import data from './mock-data'
const LATENCY = 16
import Wilddog from "wilddog"
const ref = new Wilddog("https://vuechat118.wilddogio.com/")



export function getAllMessages (cb) {
  setTimeout(() => {
    //cb(data)
    ref.on("child_added", (snapshot) =>{
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
