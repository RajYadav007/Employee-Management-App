import React,{Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
import { Button,TextInput, ThemeProvider } from 'react-native-paper';
import {connect} from 'react-redux';
import {employeeupdate,employeecreate} from'../actions';
import Employeeform from './Employeeform';

class Employeecreate extends Component
{
    onbuttonpress()
    {
        const {name,phone,shift}=this.props;
        this.props.employeecreate({name,phone,shift:shift||'Monday'});
    }
 render(){
     return (
        <Card style={{backgroundColor:"#6e7b8a"}}>
            <Employeeform { ...this.props}/>
         <CardItem style={{backgroundColor:"#6e7b8a"}}>
                <Button
                style={{marginLeft:140}}
                mode="contained"
                onPress={this.onbuttonpress.bind(this)}
                >
                Create
                </Button>
          </CardItem>
         </Card>
         
     )
 }
}

const mapStateToProps=(state)=>{
    const {name,phone,shift}= state.employeeform;

    return {name,phone,shift};

};
export default connect(mapStateToProps,{employeeupdate ,employeecreate}) (Employeecreate);
