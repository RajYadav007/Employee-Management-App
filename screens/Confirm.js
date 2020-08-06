import React from 'react';
import {Text,View,Modal} from 'react-native';
import {  Item, Input, Label ,Card,CardItem,Icon} from 'native-base';
import { Button,TextInput, ThemeProvider } from 'react-native-paper';

const Confirm =({children,visible,onAccept,onDecline })=>{

    return(
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        
        >
            <View style={{backgroundColor:'rgba(0,0,0,0.75',position:'relative',flex:1,justifyContent:'center'}}>
                <Card>
                    <CardItem style={{justifyContent:'center'}}>
                        <Text style={{flex:1,fontSize:18,textAlign:'center',lineHeight:40}}>
                       {children}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button mode="contained" style={{marginLeft:90}} onPress={onAccept}>  Yes</Button>
                        <Button mode="contained" style={{marginLeft:60}} onPress={onDecline}>  No</Button>
                    </CardItem>
                </Card>
            </View>
        </Modal>
    )
};

export default Confirm;
