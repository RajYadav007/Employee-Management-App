import React,{Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
import { Button,TextInput, ThemeProvider } from 'react-native-paper';
import {connect} from 'react-redux';
import {employeeupdate,employeecreate} from'../actions';

class Employeeform extends Component{
    render(){
        return(
            <Card >
        
            <CardItem style={{ backgroundColor:"#e3e8e8"}} >
             <TextInput
             label="Name"
             placeholder="Employee's Name"
             mode='outlined'
             value={this.props.name}
            onChangeText={text=>this.props.employeeupdate({prop:'name',value:text})}
             style={{height:50,width:380,marginTop:50,backgroundColor:"white"  }}
             />
            </CardItem>
            <CardItem style={{ backgroundColor:"#e3e8e8"}}>
             <TextInput
             label="Phone"
             placeholder="Phone Number"
             mode='outlined'
           
             value={this.props.phone}
             onChangeText={text=>this.props.employeeupdate({prop:'phone',value:text})}
             style={{height:50,width:380  }}
             />
            </CardItem>
            <Text style={{fontSize:25,paddingLeft:20,marginLeft:0, backgroundColor:"#e3e8e8"}}>              
                                                 Shift</Text>
            <CardItem style={{ backgroundColor:"#e3e8e8"}}>
                
                <Picker 
                style={{flex:1}}
                selectedValue={this.props.shift}
                onValueChange={value=>this.props.employeeupdate({prop:'shift',value})}
                >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thrusday" value="Thrusday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturaday" value="Saturaday" />
                <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardItem>
            </Card>
        );

    }
}

const mapStateToProps=(state)=>{
    const {name,phone,shift}= state.employeeform;

    return {name,phone,shift};

};

export default connect(mapStateToProps,{employeeupdate}) (Employeeform);
