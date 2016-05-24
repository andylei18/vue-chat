//查询野狗服务
import { UserList } from '../wilddog'

export function getAllMessages (cb) {
  //console.log(cb)
  UserList.orderByChild('uid').equalTo('111111').once("value",function(snapshot){
    snapshot.forEach((snap) => {
      console.log(snap.val())
    })
  })
}
