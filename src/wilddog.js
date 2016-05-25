import Wilddog from 'wilddog'
const AppId = 'vuechat118'

const UserDB = new Wilddog('https://' + AppId + '.wilddogio.com/')
const UserList = UserDB.child('userlist')
const MessageList = UserDB.child('messagelist')

export {
  UserList,
  MessageList
}
