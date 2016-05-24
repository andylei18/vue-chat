//查询野狗服务
import { MessageList} from '../wilddog'

const LATENCY = 16

//获取用户列表信息
export function getAllMessages (cb) {
  setTimeout(() => {
    MessageList.on("child_added",function(snapshot){
      console.log(snapshot.key().authorName)
      cb(snapshot)
    })
  }, LATENCY)
}

//新建发送消息
export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'wx_' + timestamp
  const usersession =JSON.parse(sessionStorage.getItem("user"))
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: usersession.nickname
  }
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}
