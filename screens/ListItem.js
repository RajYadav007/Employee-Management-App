import React,{Component} from 'react';
import {Text,TouchableWithoutFeedback,View}  from 'react-native';
import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{
    onrowpress(){
        Actions.employeeedit({employee: this.props.employee });
    }
    render()
    {
        const {name}=this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onrowpress.bind(this)}>
                <View>
                    <Card>
                    <CardItem>
                        <Text style={{fontSize:18,paddingLeft:15}}>
                            {name}
                        </Text>  
                    </CardItem>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
              
        );
    }
}
 

export default ListItem;
