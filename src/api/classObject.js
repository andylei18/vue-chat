'use strict'

export class User extends Object {
  constructor(id,url) {
    super({
      nickname:"新用户",
      faceimg:url
    });
  }
}
