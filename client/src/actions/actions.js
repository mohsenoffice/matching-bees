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



export function fetchUsers(){
    return dispatch => {
        return fetch(`/users`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(usersReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

export function fetchUsersItem(id){
    return dispatch => {
        return fetch(`/users/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(usersItemReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

export function submitUser(data){
    return dispatch => {
        return fetch('/users/', { 
            method: 'POST', 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data), 
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }    
}