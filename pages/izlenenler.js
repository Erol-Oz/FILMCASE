import { useContext } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native"
import FilmContext from "../Context/FilmContext"
import Cardd from "./Cardd";
function Izlenenler() {
  const data =  useContext(FilmContext);
  
  return (
    <SafeAreaView style={Styles.body}>
      <View>
        <FlatList
          data={data.FilmItem}
          renderItem={({ item }) => <Cardd films={item} />}
          key={data.FilmItem.id}
        />
      </View>
    </SafeAreaView>
  )

}
const Styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    flex: 1
  }
})
export default Izlenenler