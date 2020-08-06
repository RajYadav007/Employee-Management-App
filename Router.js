import React from 'react';
  import {Scene,Router,Actions} from 'react-native-router-flux';
  import Loginscreen from './screens/Loginscreen';
   import Employee from './screens/Employee';
import Employeecreate from'./screens/Employeecreate';
import Employeeedit from './screens/Employeeedit';

const Routercomponent=()=>
{
    return (
    <Router>
      <Scene key="root">
        <Scene key="auth">
        <Scene key="login" component={Loginscreen} title="Please Login" />
        </Scene>
       <Scene key="main">
       <Scene 
       rightTitle="Add"
       onRight={()=>Actions.employeecreate()}
       key="employee" 
       component={Employee}
        title="Employees"   />
      <Scene
       key="employeecreate"
        component={Employeecreate}
         title="Create Employee" />
         <Scene  
         key="employeeedit"
         component={Employeeedit}
         title="Edit Employee"
         />
       </Scene>
         
      </Scene>
    </Router>
    );
};
 

export default Routercomponent;
