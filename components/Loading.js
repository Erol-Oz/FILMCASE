import React from "react";
import LottieView from "lottie-react-native"
function Loading(){
    return <LottieView style={{backgroundColor:"black"}} source={require("../asset/loading.json")} autoPlay/>;
}
export default Loading