'use strict'
const timestamp = Date.now()

export class User extends Object {
  constructor() {
    super({
      nickname: "新用户",
      faceimg: "http://o7kxl993s.bkt.clouddn.com/chatAvatar1.jpg",
      creat:timestamp
    })
  }
}
