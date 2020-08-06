import _ from 'lodash';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {employeeupdate,employeesave,employeedelete} from '../actions';
 import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
 import { Button,TextInput, ThemeProvider } from 'react-native-paper';
import Employeeform from'./Employeeform';
import  Communications from 'react-native-communications';
import Confirm from './Confirm';

 class Employeeedit extends Component{
     state={showModal:false};

     UNSAFE_componentWillMount(){
     _.each(this.props.employee,(value,prop)=>{
         this.props.employeeupdate({prop,value});
     });
    }
    
     onButtonPress(){
         const {name,phone,shift}=this.props;
         this.props.employeesave({name,phone,shift,uid:this.props.employee.uid});
     }
      
     onTextPress(){
          const {phone,shift}=this.props ;

          Communications.text(phone,`Your upcoming shift is on ${shift}`);
     }

      onAccept(){
          const {uid}=this.props.employee;

          this.props.employeedelete({uid});
      }
       
      onDecline(){
          this.setState({showModal:false});

      }


     render(){ 
         return (
             <Card style={{backgroundColor:"blue"}}>
                 <Employeeform  />
                <CardItem style={{backgroundColor:"#6e7b8a"}}>
                    <Button 
                    style={{marginLeft:120}}
                     mode="contained"
                    onPress={this.onButtonPress.bind(this)}>
                         Save Changes
                    </Button>
                </CardItem>
                <CardItem style={{backgroundColor:"#6e7b8a"}}>
                <Button 
                    style={{marginLeft:120}}
                     mode="contained"
                    onPress={this.onTextPress.bind(this)}>
                         Text Schedule
                    </Button> 
                </CardItem>
                <CardItem style={{backgroundColor:"#6e7b8a"}}>
                    <Button
                    style={{marginLeft:120}}
                    mode="contained"
                    onPress={()=>this.setState({showModal:!this.state.showModal})}
                    >
                    Fire Employee
                    </Button>
                </CardItem>
               <Confirm
               visible={this.state.showModal}
               onAccept={this.onAccept.bind(this)}
               onDecline={this.onDecline.bind(this)}
               >
                   Are you sure you want to delete this?
               </Confirm>
             </Card>
         )
     }
 }
const mapStateToProps=(state)=>{
const {name,phone,shift}=state.employeeform;


return {name,phone,shift}; 
};


 export default connect(mapStateToProps,
    {employeeupdate,employeesave,employeedelete})(Employeeedit);
