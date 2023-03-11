import React, { useContext } from "react"
import { SafeAreaView, View, Image, Text,TouchableOpacity, StyleSheet,Alert } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Share from 'react-native-share';
import FilmContext from "../Context/FilmContext"
function Cardd({ films }) {
    const data = useContext(FilmContext);
    const MyCustomShare= async()=>{
        const shareOptions={
           
           
           message:films.isim+"\n"+"\n"+films.tür+"\n"+"\n"+films.konu+"\n"+"\n"+"IMDb:"+films.IMDb+"\n"+"\n",
           url:films.trailer, 


        }
    
    try{
        const ShareResponse= await Share.open(shareOptions)
        console.log(JSON.stringify(ShareResponse))
    }catch(error){
        console.log("error=>",error)
    }}
    const Remove2=(id)=>{
        const filter=  data.FilmItem2.filter(item=>item.id!==id )
        data.setFilmItem2(filter)
        Alert.alert("Film izlenenler listesinden çıkarıldı")
    }
    return (
        <SafeAreaView style={Styles.body}>
            <View style={Styles.container}>
            <View >
                <Image style={Styles.card_image} source={{ uri: films.image }} />
            </View>
            <View style={Styles.info_container}>
                <View style={Styles.card_info} >
                    <Text style={Styles.card_isim}>{films.isim}</Text>
                    <Text style={Styles.tür}>{films.tür}</Text>
                    <Text style={Styles.imdb}>{films.IMDb}</Text>
                </View>
                <View style={Styles.button}>
                    <TouchableOpacity onPress={MyCustomShare}>
                        <Icon style={Styles.paylaş} name="share" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Remove2(films.id)}>
                        <Icon style={Styles.delete} name="delete" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}
const Styles=StyleSheet.create({
body:{
    margin:10
},
container:{
    flexDirection:"row",
    flex:1,
},
card_image:{
    width:100,
    height:150,
    flex:1
},
info_container:{
    flexDirection:"column",
    flex:1
},
card_info:{
flexDirection:"column",
paddingLeft:10,
},
button:{
    flexDirection:"row",
    marginLeft:10,
    marginTop:30,
},
izledim:{
    width:65,
    color:"#f4a315",
    fontWeight:"bold",
    fontSize:32,
},
paylaş:{
    color:"#f4a315",
    width:65,
    fontWeight:"bold",
    fontSize:32
},
card_isim:{
    color:"white",
    marginBottom:10,
    fontWeight:"bold",
    fontSize:20
},
tür:{
    color:"white",
    fontWeight:"bold",
    marginBottom:10
},
imdb:{
    color:"white"
},
delete:{
    color:"white",
    fontSize:32
    
}

})
export default Cardd