import * as api from '../../api'
import * as types from '../mutation-types'

//切换用户
export const switchThread = ({ dispatch }, id) => {
  dispatch(types.SWITCH_THREAD, id)
}
