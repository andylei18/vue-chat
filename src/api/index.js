import Wilddog from "wilddog";

const AppId = 'wild-dragon-56206'

let site = new Wilddog('https://' + AppId + '.wilddogio.com/')
let chat = site.child('chat')
let userlist = chat.child("data").child("users")

//let ref = new Wilddog("https://wild-dragon-56206.wilddogio.com/chat");
//let usersRef = new Wilddog("https://wild-dragon-56206.wilddogio.com/chat/users");

export function getAllMessages (cb) {
  // 监听数据
  /*chat.on("value", function(snapshot) {
      let _json = snapshot.val()
      if(_json&&_json.code==0){
        cb(_json.data.users)
      }

  }, function (errorObject) {

    console.log("The read failed: " + errorObject.code);

  });*/

  chat.on('child_added', (obj) => {
    let _json = obj.val()
    if(_json&&_json.code==0){
      cb(_json.data.users)
    }
  })

}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: '1',
    threadName: 'andy',
    authorName: 'Evan'
  };
  userlist.push(message);
  cb(message)

}
