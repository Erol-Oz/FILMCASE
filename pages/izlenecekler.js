import {useContext} from "react";
import {SafeAreaView,View,FlatList,StyleSheet} from "react-native"
import FilmContext from "../Context/FilmContext";
import Carddd from "./Carddd"
function Izlenecekler (){
    const data=useContext(FilmContext);
    return(
        <SafeAreaView  style={Styles.body}>
        <View>
        <FlatList
                    data={data.FilmItem2}
                    renderItem={({ item }) => <Carddd films={item}  />}
                    key={data.FilmItem2.id}
                />
        </View>
      </SafeAreaView>
    )
}
const Styles=StyleSheet.create({
    body:{
      backgroundColor:"black",
      flex:1
    }
  })
export default Izlenecekler