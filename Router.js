import 'react-native-gesture-handler';
import React, {useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Izlenecekler from "./pages/izlenecekler";
import Izlenenler from "./pages/izlenenler";
// import Kategoriler from "./pages/kategoriler";
import Filmler from "./pages/filmler";
import DetailPage from './pages/detailPage';
import FilmContext from './Context/FilmContext';
import Loading from './components/Loading';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const Stack=createStackNavigator()

const DetailStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='filmPage' component={Filmler}/>
      <Stack.Screen options={{headerShown:false}} name='detailPage' component={DetailPage}/>
    </Stack.Navigator>
  )
}


function App (){
const [loading,setLoading]=useState(true)
const [FilmItem,setFilmItem]=useState([])
const [FilmItem2,setFilmItem2]=useState([])


  const values={
    FilmItem,
    setFilmItem,
    FilmItem2,
    setFilmItem2,
  }
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  

//  if(loading){
//   return <Loading/>
//  }
 return(

  loading?<Loading/> : <FilmContext.Provider value={values} > 
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ tabBarShowLabel:false}} >
      <Tab.Screen options={{headerStyle:{backgroundColor:"#090909"},tabBarIcon:() => <Icon size={ 34 } name={ 'movie-search' } color={ 'white' }></Icon>,headerTintColor: '#fff',tabBarStyle:{backgroundColor:"#090909",borderLeftColor:"white"}}} name="Filmler" component={DetailStack} />
      <Tab.Screen options={{headerStyle:{backgroundColor:"#090909"},tabBarIcon:() => <Icon size={ 34 } name={ 'movie-open-plus' } color={ 'white' }></Icon>,headerTintColor: '#fff',headerTintColor: '#fff',tabBarStyle:{backgroundColor:"#090909",borderLeftColor:"white"}}} name="izlenecekler" component={Izlenenler} />
      <Tab.Screen options={{headerStyle:{backgroundColor:"#090909"},tabBarIcon:() => <Icon size={ 34 } name={ 'movie-check' } color={ 'white' }></Icon>,headerTintColor: '#fff',headerTintColor: '#fff',tabBarStyle:{backgroundColor:"#090909",borderLeftColor:"white"}}} name="izlenenler" component={Izlenecekler} />
      {/* <Tab.Screen options={{headerStyle:{backgroundColor:"#090909"},tabBarIcon:() => <Icon size={ 34 } name={ 'format-list-group' } color={ 'white' }></Icon>,headerTintColor: '#fff',headerTintColor: '#fff',tabBarStyle:{backgroundColor:"#090909",borderLeftColor:"white"}}} name="kategoriler" component={Kategoriler} /> */}
    </Tab.Navigator>
  </NavigationContainer>
  </FilmContext.Provider>
  )

}
export default App
