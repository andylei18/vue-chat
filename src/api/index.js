//查询野狗服务
import { MessageList} from '../wilddog'
const usersession =JSON.parse(sessionStorage.getItem("user"))
const uid = usersession.uid
const LATENCY = 16

const getUserMessage = () => {
  MessageList.orderByChild('threadID').equalTo(uid).once("value",function(messages){
    messages.forEach(message => {
      message = message.val()
      console.log(message.id)
    })
  })
}

//获取用户列表信息
export function getAllMessages (cb) {
  setTimeout(() => {
    MessageList.on("value",function(snapshot){
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
    authorName: usersession.nickname
  }
  setTimeout(function () {
    //cb(message)
    getUserMessage()
  }, LATENCY)
}
