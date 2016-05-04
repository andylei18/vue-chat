import Wilddog from "wilddog";

const data = require('./mock-data')
const AppId = 'wild-dragon-56206'
const localStorage = window.localStorage

//let currentSite = document.domain.replace(/\./g, '-')
let site = new Wilddog('https://' + AppId + '.wilddogio.com/' )

let chat = site.child("chat")

let userlist = chat.child("data").child("users")

export function getAllMessages (cb) {
  // 监听数据
  chat.on('child_added', (snapshot) => {
    let newPost = snapshot.val()
    cb(newPost.users)
  })
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
    authorName: '丁磊'
  };
  userlist.push(message);
  cb(message)

}

export function createUser(){

}
