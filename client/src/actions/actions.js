import actionTypes from '../constants/actionTypes';
import { store } from 'react-notifications-component';

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
    return {
        type: actionTypes.USERSITEM_SELECTED,
        usersItem: usersItem
    }
}

function usersItemUnSelected(usersItem){
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
        .catch( (e) => showNotification("Failed to get users! Please check server connectivity.", false) );
    }
}

export function fetchUsersItem(id){
    return dispatch => {
        return fetch(`/users/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(usersItemReceived(data.data)))
        .catch( (e) => showNotification("Failed to get a user!", false));
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
            .then((response) => showNotification(response.statusText, response.ok))
            .catch( (e) => showNotification("Failed to add user! Please check server connectivity.", false) );
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
            .then((response) => showNotification(response.statusText, response.ok))
            .catch( (e) => showNotification("Failed to update users! Please check server connectivity.", false) );
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
            .then((response) => showNotification(response.statusText, response.ok))
            .catch( (e) => showNotification("Failed to delete users! Please check server connectivity.", false) );
    }    
}

function showNotification(message, isSucess){
    store.addNotification({
        title: isSucess ? "Wonderful!":"Oh!",
        message: message,
        type: isSucess ? "success":"danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });

}