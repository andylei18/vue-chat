import Wilddog from 'wilddog'
const AppId = 'wxuser0'

const UserDB = new Wilddog('https://' + AppId + '.wilddogio.com/')
const UserList = UserDB.child('userlist')
const MessageList = UserDB.child('messagelist')

export {
  UserList,
  MessageList
}
