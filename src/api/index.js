//查询野狗服务
import { UserList } from '../wilddog'
import { MessageList } from '../wilddog'

export function getAllMessages (cb) {
  //console.log(cb)
  UserList.once("value",function(snapshot){
    cb(snapshot)
  })
}
