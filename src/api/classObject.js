'use strict'

export class User extends Object {
  constructor(nickname = '新用户') {
    super({
      nickname,
      faceimg: 'http://o7kxl993s.bkt.clouddn.com/chatAvatar1.jpg'
    });
  }
}
