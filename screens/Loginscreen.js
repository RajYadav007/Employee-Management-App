import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Animated,
    Easing,
    ScrollView,
    View,
    Text,
    Image,
    Alert,
    KeyboardAvoidingView,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    unstable_enableLogBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
import { Button,TextInput, ThemeProvider } from 'react-native-paper';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginuser} from '../actions'

class Loginscreen extends Component{
    onEmailChange(text)
    {
      this.props.emailChanged(text);
    }
    onPasswordChange(text)
    {
      this.props.passwordChanged(text);
    }

    onbuttonpress()
    {
      const {email,password}=this.props;
      this.props.loginuser({email,password});

    }
    rendererror()
    {
      if(this.props.error)
      {
        return(
          <View style={{backgroundColor:'white'}}>
            <Text style={styles.errortextstyle}>
              {this.props.error}
            </Text>
          </View>
        )
      }
    }

    renderbutton()
    {
      if(this.props.loading)
      {
        return <ActivityIndicator marginLeft="50" size="large" color="#0000ff" />
      }

      return (
        <Button
        style={{marginLeft:140}}
            mode="contained"
             onPress={this.onbuttonpress.bind(this)}
             >
            Log In
          </Button>
      );
    }
    render()
    {
        return (
            <Card>
            <CardItem>
              <TextInput
              placeholder="Email Id"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              style={{height:50,width:380,marginTop:50   }}
              />
             </CardItem>
            <CardItem>
            <TextInput
            secureTextEntry={true}
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
              style={{height:50,width:380}}
              />
           </CardItem>
           {this.rendererror()}
           <CardItem>
      
      
   
     
        <Button
        style={{marginLeft:140}}
            mode="contained"
             onPress={this.onbuttonpress.bind(this)}
             >
            Log In
          </Button>
            </CardItem>
           </Card>
        
        );
    }
}
const mapStateToProps=({auth})=>{
  const {email,password,error,loading}=auth;
  return {
    email, password,error,loading
  }
}

export default connect(mapStateToProps,{emailChanged,
  passwordChanged,loginuser}) (Loginscreen);


  const styles=StyleSheet.create({
    errortextstyle:{
      fontSize:20,
      alignSelf:'center',
      color:'red'
    }
  })
