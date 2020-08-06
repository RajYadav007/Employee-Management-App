 import React,{Component} from 'react';
 import {Provider} from 'react-redux';
 import {View,Text} from 'react-native';
 import {createStore,applyMiddleware} from 'redux';
 import reducers from './reducers' ; 
 import * as firebase from 'firebase';
import Reduxthunk from 'redux-thunk';

 import Loginscreen from './screens/Loginscreen';
 import Router from'./Router';
 
 class App extends Component{
   UNSAFE_componentWillMount()
   {
    const firebaseConfig = {
      apiKey: "AIzaSyDDF6uplU6iX8ljusT1jkXW6vD8VXvTvIA",
      authDomain: "manager-d494c.firebaseapp.com",
      databaseURL: "https://manager-d494c.firebaseio.com",
      projectId: "manager-d494c",
      storageBucket: "manager-d494c.appspot.com",  
      messagingSenderId: "513118443101",
      appId: "1:513118443101:web:db077175d1b71e59325fb4",
      measurementId: "G-DJ0KJMQ9Y5"
    };
    // Initialize Firebase
    if(!firebase.apps.length)
    {
      firebase.initializeApp(firebaseConfig);
    }
   
   }
   render()
   {
     return(
       <Provider store={createStore(reducers,{},applyMiddleware(Reduxthunk))}>
         <Router/>
       </Provider>
     );
   }
 }
 
  export default App;
