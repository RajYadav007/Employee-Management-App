import  firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
 } from './type';



export const employeeupdate = ({prop,value})=>{
return{
    type:EMPLOYEE_UPDATE,
    payload:{prop,value}
    
}

}; 

export const employeecreate=({name,phone,shift})=>{
    const {currentUser}=firebase.auth();
    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name,phone,shift })
        .then(()=>
        {
            dispatch({type:EMPLOYEE_CREATE});
            Actions.employee({type:'reset'});
    });
    }
    

};

export const employeefetch=()=>
{
    const {currentUser}=firebase.auth();

    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
            dispatch({type:EMPLOYEES_FETCH_SUCCESS,payload:snapshot.val()});
            
        })
    }
}  

export const employeesave=({name,phone,shift,uid})=>{
    const {currentUser}= firebase.auth();

    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift})
        .then(()=>{
            dispatch({type:EMPLOYEE_SAVE_SUCCESS});
          Actions.employee({type:'reset'})  
        });
    }
}
export const employeedelete=({uid})=>{
  const {currentUser}=firebase.auth();

  return ()=>{
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(()=>{
        Actions.employee({type:'reset'});
    })
  }
};