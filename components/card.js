import { useContext } from "react"
import { SafeAreaView, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Alert } from "react-native"
import Styles from "./card.styles"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import FilmContext from "../Context/FilmContext"
import Share from 'react-native-share';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Card = ({ films, onSelect }) => {

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



    const sendData=() => {
        if(data.FilmItem.includes(films)){
            return false,Alert.alert("Bu film zaten izlenecekler listesinde bulunuyor.")
            
            }else if(data.FilmItem2.includes(films)){
                return false,Alert.alert("Unuttun mu? Bu filmi izlenenler listesine eklemiştin.")
            }

         data.setFilmItem([...data.FilmItem, films]), 
         Alert.alert("Filminiz izlenecekler listesine eklendi!")
        }

    const sendData2=() => {
        if(data.FilmItem2.includes(films)){
            return false,Alert.alert("Bu film zaten izlenenler listesinde bulunuyor.")
        }
         data.setFilmItem2([...data.FilmItem2, films]),
            Alert.alert("Filminiz izlenenler listesine eklendi!") 
        }

            
  
      

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <SafeAreaView style={Styles.card_body}>
                <View style={Styles.card_container}>
                    <View >
                        <Image style={Styles.card_image} source={{ uri: films.image }} />
                    </View>
                    <View style={Styles.info_container}>
                        <View style={Styles.card_info}>
                        <Text style={Styles.card_isim}>{films.isim}</Text>
                           <Text style={Styles.card_tür}>{films.tür}</Text>
                            <Text style={Styles.card_imdb}>IMDb:{films.IMDb}</Text>
                        </View>
                        <View style={Styles.button}>
                            <TouchableOpacity onPress={sendData} >
                                <Icon style={Styles.ekle} name="plus-box" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={sendData2} >
                                <Icon style={Styles.izledim} name="checkbox-marked" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={MyCustomShare}>
                                <Icon style={Styles.paylaş} name="share" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onSelect}>
                               <Text style={Styles.detay}>DETAY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default Card