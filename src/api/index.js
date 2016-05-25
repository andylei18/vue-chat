//查询野狗服务
import { MessageList} from '../wilddog'
const usersession =JSON.parse(sessionStorage.getItem("user"))
const uid = usersession.uid
const LATENCY = 16

const getUserMessage = (id ,text, thread ,timestamp) => {
  // MessageList.orderByChild('threadID').equalTo(uid).once("value",function(messages){
  //   messages.forEach(message => {
  //     const msg = message.val()
  //
  //     //如果没有消息列表，则此用户没有聊天记录
  //     if(msg.msglist==undefined){
  //
  //     }
  //   })
  // })
  // MessageList.orderByChild('threadID').equalTo(uid).child('threadList').push({
  //   id:'0007'
  // })
  MessageList.orderByChild('authorID').equalTo(uid).on("child_added", datasnapshot => {
      const userKey = datasnapshot.key()
      MessageList.child(userKey).child('threadlist').on("child_added",snapshot => {
          const threadKey = snapshot.key()
          MessageList.child(userKey).child('threadlist').push({
            threadID:thread.id,
            threadName:thread.name,
            threadImg:thread.img
          })
          MessageList.child(threadKey).child('messageslist').on("child_added",snapshot => {
            MessageList.child(threadKey).child('messageslist').push({
              id,
              text,
              timestamp
            })
          })
      })

      // MessageList.orderByChild('authorID').equalTo(thread.id).on("child_added", snapshot => {
      //     const userKey = snapshot.key()
      //
      // })

      // MessageList.child(userKey).child('threadlist').push({
      //   threadID:thread.id,
      //   threadName:thread.name,
      //   threadImg:thread.img
      // })
      // datasnapshot.forEach( snap => {
      //   console.log(snap.key())
      // })
  })
}

//获取用户列表信息
export function getAllMessages (cb) {
  setTimeout(() => {
    MessageList.once("value",function(snapshot){
      cb(snapshot)
    })
  }, LATENCY)
}

//新建发送消息
export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'wx_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    //authorName: usersession.nickname
  }
  setTimeout(function () {
    //cb(message)
    getUserMessage(id, text, thread ,timestamp)
  }, LATENCY)
}
