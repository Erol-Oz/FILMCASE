import React from "react";
import {SafeAreaView,View,Text,StyleSheet} from "react-native"

function Kategoriler (){
    return(
        <SafeAreaView style={Styles.body}>
            <View>
                <Text>
                    Kategoriler
                </Text>
            </View>
        </SafeAreaView>
    )
}
const Styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"black",
    }
    })
export default Kategoriler