import {useContext} from "react"
import { SafeAreaView, View, Image, Text,TouchableOpacity, StyleSheet,Alert } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import FilmContext from "../Context/FilmContext"
import Share from 'react-native-share';
function Cardd({ films }) {
    const data=useContext(FilmContext)
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
    

    // const sendData2=  () => {
    //     if(data.FilmItem2.includes(films)){
    //         return false,Alert.alert("Bu film izlenenler listesinde bulunuyor")
    //     }else{
    //         data.setFilmItem2([...data.FilmItem2, films]),
    //         Alert.alert("Filminiz izlenenler listesine eklendi!")
    //     }

    //     }

        const Remove=(id)=>{
            if(data.FilmItem2.includes(films)){
                return false,Alert.alert("Bu film izlenenler listesinde bulunuyor")
            }else{
                data.setFilmItem2([...data.FilmItem2, films]),
                Alert.alert("Film izlenenler listesine eklendi!")
            }
            const filter=  data.FilmItem.filter(item=>item.id!==id )
            data.setFilmItem(filter)
        }
        const Remove2=(id)=>{
            const filter=  data.FilmItem.filter(item=>item.id!==id )
            data.setFilmItem(filter)
            Alert.alert("Film izlenecekler listesinden çıkarıldı")
        }
       console.log(data.FilmItem)
    return (
        

        
        
            <SafeAreaView  style={Styles.body}>
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
                    <TouchableOpacity onPress={()=>Remove(films.id)}>
                        <Icon  style={Styles.izledim} name="checkbox-marked" size={40} color="white" />
                    </TouchableOpacity>
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
detay:{
    color:"white",
    marginRight:15,
    borderWidth:1,
    borderColor:"white",
    padding:1,
    fontSize:14,
    textAlign:"center"
},
delete:{
    color:"white",
    fontSize:32
    
},
message:{
    color:"white",
}

})
export default Cardd