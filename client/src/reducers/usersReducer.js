import constants from '../constants/actionTypes'

var initialState = {
  users: [],
  usersItem: {},
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

    case constants.USERSITEM_RECEIVED:
      updated['usersItem'] = action.usersItem;
      return updated;



    default:
      return state
    }
}