import React, { useState} from "react";
import { SafeAreaView, View, FlatList, StyleSheet, TextInput } from "react-native"
import Card from "../components/card"
import datajson from "../data.json"


function Filmler({navigation}) {
    const [data, setData] = useState(datajson)
    const handleSearch = text => {
        const filteredList = datajson.filter(film => {
            const searcedText = text.toLowerCase();
            const curretnTitle = film.isim.toLocaleLowerCase();
            return curretnTitle.indexOf(searcedText) > -1;
        })
        setData(filteredList)
    }
    const handleFilmSelect=(isim,tür,konu,IMDb,image,trailer)=>{
        navigation.navigate("detailPage",{isim,tür,konu,IMDb,image,trailer})
    }

    return (
        <SafeAreaView style={Styles.body}>
            <TextInput style={Styles.input} onChangeText={handleSearch} placeholder="Ara.." />
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Card films={item} onSelect={()=>handleFilmSelect(item.isim,item.tür,item.konu,item.IMDb,item.image,item.trailer)} />}
                    key={data.id}
                />
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "black",
    },
    input: {
        margin:10,
        width: 380,
        height: 30,
        backgroundColor: "white",
        alignSelf:"center",
        padding: 5,
        color: "black"
    },
    ImageContainer: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
    },
    image: {
        textAlign: 'center',
        fontSize: 30
    }
})
export default Filmler