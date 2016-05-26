'use strict'
import Wilddog from "wilddog"
import authApi from "./authApi"
import panelsApi from "./panelsApi"

const ref = new Wilddog("https://startme.wilddogio.com/")
window.ref = ref
const auth = authApi(ref)
const panels = panelsApi(ref)

export default {
  auth,
  panels
}
