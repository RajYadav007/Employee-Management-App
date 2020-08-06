import {combineReducers} from 'redux';
import authreducer from './authreducer';
import Employeeformreducer from './Employeeformreducer'
import Employeereducer from './Employeereducer';


export default combineReducers({
 auth:authreducer,
 employeeform:Employeeformreducer,
 employees:Employeereducer
});