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

function usersItemSelected(usersItem){
   // alert(usersItem._id);
    return {
        type: actionTypes.USERSITEM_SELECTED,
        usersItem: usersItem
    }
}

function usersItemUnSelected(usersItem){
    // alert(usersItem._id);
     return {
         type: actionTypes.USERSITEM_UN_SELECTED,
         usersItem: usersItem
     }
 }

export function fetchSelectedItem(usersItem, toAdd){
    if(toAdd){
        return dispatch => {
                return dispatch(usersItemSelected(usersItem));
        }
    }else{
        return dispatch => {
            return dispatch(usersItemUnSelected(usersItem));
        }
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

export function updateUser(data){
    return dispatch => {
        return fetch('/users/', { 
            method: 'PUT', 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data), 
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }    
}

export function deleteUser(data){
    return dispatch => {
        return fetch('/users/', { 
            method: 'DELETE', 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data), 
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }    
}