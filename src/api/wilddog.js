'use strict'
import Wilddog from "wilddog"
import authApi from "./authApi"
//import panelsApi from "./panelsApi"

const WilddogID = 'userlist'

const ref = new Wilddog('https://'+ WilddogID +'.wilddogio.com/')
window.ref = ref
const auth = authApi(ref)
//const panels = panelsApi(ref)

export function getSignin ( email , pwd ) {
  console.log(email , pwd)
}


// export default {
//   auth,
//   //panels
// }
