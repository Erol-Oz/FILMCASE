import React from "react";
import {SafeAreaView,View,Text,Image} from "react-native"
import Styles from "./detailPageStyle" 
import { WebView } from 'react-native-webview';
function DetailPage ({route}){
    const {isim,tür,konu,IMDb,image,trailer}=route.params

    return(
        <SafeAreaView style={Styles.body}>
            <WebView
        source={{ uri:trailer  }}
        style={Styles.webView}
        allowsFullscreenVideo={true}
        
      />
          <View style={Styles.mostContainer}>
            <View style={Styles.container}>
            <View >
                    <Image style={Styles.image} source={{ uri: image }} />
                </View>
                <View style={Styles.info_container} >
                    <View>
                        <Text style={Styles.isim}>{isim}</Text>
                        <Text style={Styles.tür}>{tür}</Text>
                        <Text style={Styles.imdb}>IMDb:{IMDb}</Text>
                    </View>
                </View>
                
            </View>
            <View>
            <Text style={Styles.konu}>{konu}</Text>
            </View>
            </View>
           
        </SafeAreaView>
    )
}

export default DetailPage