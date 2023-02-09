/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, View,Image } from 'react-native';






const App = () => {
  return (
    <View style ={styies.abb}>
      
      <View style = {styies .fahrs}>
       <View style ={styies .gll}>
        <Image style = {styies.img}source={require('./ios/smer.webp')}/>
        <View style = {styies .ingll}>
          <Text style ={styies.alhob}>I AM HACK</Text>
          <Text style ={styies.alhob}>B.D:28/9/2005</Text>
        </View>
       </View>
        <View style = {styies.gg}>
        <Text style ={styies.smer}> MY UI</Text>
       </View>
      </View>
     
    </View>
   )
  
    
  

}

const styies = StyleSheet.create({
  abb : {
    flex :1,
    backgroundColor : 'black',
    justifyContent : 'center',
    alignItems : 'center',
    

  },
  fahrs: {
    margin : 50,
    height : 280,
    width : 400,
    backgroundColor : 'black',
    borderWidth:10,
    borderColor:'white',
    

  },
  gll :{
    margin :10 ,
    height : 150,
    width : 200 ,
    backgroundColor : 'black',
    borderWidth:10,
    borderColor :'white',
  },
  img :{
    width:100,
    height: 100,
    margin :10,
    

  },
  ingll :{

    width:230,
    height:150,
    margin:30,
    marginTop:-130,
    marginLeft :120,
    marginRight:-500,
    marginEnd :-40,
    borderWidth:10,
    borderColor:'white',
    backgroundColor : 'black',
    
    
  
  },
  alhob :{
   justifyContent :'center',
   alignItems : 'center',
   margin :10,
   fontSize:20,
   marginLeft:10,
   backgroundColor : 'white'
    
   
    
  },
  gg :{
    width:230,
    height:90,
    margin:40,
    marginLeft:130,
    marginTop :0,
    marginEnd:60 ,
    backgroundColor:'black',
    
    

  },
  smer :{
    justifyContent :'center',
    alignContent :'center',
    fontSize: 50,
    margin :20,
    marginRight : 50,
    marginLeft:-10,
    color :'white'
    
  },



 


 
  

})



 
  







export default App;
