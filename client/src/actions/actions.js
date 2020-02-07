import actionTypes from '../constants/actionTypes';

function usersItemReceived(usersItem){
    return {
        type: actionTypes.USERSITEM_RECEIVED,
        usersItem: usersItem
    }
}

function usersReceived(users){
    return {
        type: actionTypes.USERS_RECEIVED,
        users: users
    }
}

export function fetchUsers(fakeUsers){
    console.log('presend')
    return dispatch => {
        dispatch(usersReceived(fakeUsers));
    }
}

export function fetchUsersItem(fakeUsersItem){
    return dispatch => {
        dispatch(usersItemReceived(fakeUsersItem));
    }
}