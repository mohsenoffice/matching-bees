import constants from '../constants/actionTypes'

var initialState = {
  users: [],
  usersItem: {},
  selectedUser1: {},
  selectedUser2: {},
  usersItemLoading: true
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.USERS_RECEIVED:
      updated['users'] = action.users
      return updated

    case constants.USERSITEM_RECEIVED:
      updated['usersItem'] = action.usersItem
      return updated

    case constants.USERSITEM_SELECTED:
      if(state.selectedUser1._id){
        updated['selectedUser2'] = action.usersItem
      }else{
        updated['selectedUser1'] = action.usersItem
      }
      return updated

      case constants.USERSITEM_UN_SELECTED:
      if(state.selectedUser1._id === action.usersItem._id){
        updated['selectedUser1'] = {};
      }
      if(state.selectedUser2._id === action.usersItem._id){
        updated['selectedUser2'] = {};
      }
      return updated


    default:
      return state
    }
}