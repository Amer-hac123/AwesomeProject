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
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import Card from './src/components/crad';


const App = () => {

  const data = [
    {
      text: "samer",
      bd: '1.1.2001',
    },
    {
      text: "gehad",
      bd: '6.1.2001',
    },
    {
      text: "ali",
      bd: '8.9.2004',
    },
    {
      text: "mahmood",
      bd: '20.1.2003',
    }
  ];

  const renderCards = () => {
    const cards =
      data.map(dataItem => (
        <Card
          text={dataItem.text}
          bd={dataItem.bd} />
      ));
    return cards;
  }

  const flatListRenderItem = (dataItem) => {
    console.log('dataItem: ', dataItem);
    const { item, index } = dataItem;
    const { text, bd } = item;
    return <Card
      text={text}
      bd={bd}
      index={index} />
  }

  return (
    <View style={styies.container} >
      {/* <ScrollView>
        {renderCards()}
      </ScrollView> */}
      <FlatList
        data={data}
        renderItem={flatListRenderItem}
        keyExtractor={item => item.id} />
    </View>
  )
}

const styies = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cardContainer: {
    margin: 50,
    // height: 280,
    width: '100%',
    backgroundColor: 'black',
    borderWidth: 10,
    borderColor: 'white',
    alignSelf: 'center'
  },
  innerTopContaner: {
    margin: 10,
    // height: 150,
    // width: 200,
    backgroundColor: 'black',
    borderWidth: 10,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  img: {
    width: 100,
    height: '97%',
    // margin: 10,
  },
  textContainer: {
    // width: 230,
    // height: 150,
    // margin: 30,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'black',
  },
  alhob: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 20,
    marginLeft: 10,
    backgroundColor: 'white'
  },
  myUIContainer: {
    width: 230,
    height: 90,
    margin: 40,
    marginLeft: 130,
    marginTop: 0,
    marginEnd: 60,
    backgroundColor: 'black',



  },
  smer: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 50,
    margin: 20,
    marginRight: 50,
    marginLeft: -10,
    color: 'white'

  },









})












export default App;
