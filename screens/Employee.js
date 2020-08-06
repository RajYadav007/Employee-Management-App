import _ from 'lodash';
import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeefetch} from'../actions';
import ListView from 'deprecated-react-native-listview';
import ListItem from './ListItem';

class Employee extends Component{
   UNSAFE_componentWillMount()
    {
        this.props.employeefetch();

       this.createdatasource(this.props);

    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
     this.createdatasource(nextProps); 
    }
  
    createdatasource({employees}){
        const ds=new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!==r2
        });
      this.dataSource=ds.cloneWithRows(employees);
    } 
    
     renderRow(employee){
         return <ListItem
         style={{backgroundColor:"blue"  }}
         employee={employee} />;
     }

    render()
    {
        return (
            <ListView style={{marginTop:60,fontsize:50,backgroundColor:"#3ea3a8"  }}
           enableEmptySections
            dataSource = {this.dataSource}
            renderRow = {this.renderRow}
            
            />
                 
            
        );
    };
}
const mapStateToProps=(state)=>{
    const employees=_.map(state.employees,(val,uid)=>{
        return { ...val,uid};
    });
    return {employees};
}

export  default connect(mapStateToProps,{employeefetch}) (Employee);
