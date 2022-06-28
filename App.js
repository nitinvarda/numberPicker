/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useRef,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  const scrollRef = useRef(null)
  const [selectedIndex,setSelectedIndex] = useState(0)
  const date = new Date()
  const start = 1970;
  const end = date.getFullYear();
  // const end = 100;

  const step = 1;
  const arrayLength = Math.floor(((end - start) / step)) + 1;
  const range = [...Array(arrayLength).keys()].map(x => (x * step) + start);
  const values =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  const onScroll = (e) =>{
    // console.log(scrollRef,scrollRef.current.getInnerViewNode(),scrollRef.current.getInnerViewRef())

    // scrollRef.current.scrollTo({y:100,animated:true})
  }

  const test = (e) =>{
    let x = 0;
    let h = 50;
    console.log(e)
    if(e.nativeEvent.contentOffset){
        x = e.nativeEvent.contentOffset.x;
    }
    console.log(x)
    let selectedIndexValue = Math.round(x / h);

    console.log(selectedIndexValue)
    let final = selectedIndexValue * h
    setSelectedIndex(selectedIndexValue)

    scrollRef.current.scrollTo({x:final})
    
    console.log(final)
  }

  const onScrollEndDrag =(e)=>{
    let _e = {
      nativeEvent:{
          contentOffset:{
              x: e.nativeEvent.contentOffset.x,
          },
      },
    }
    console.log(_e)
    test(_e)


  }
  
  console.log(values[selectedIndex])
  return (
    <SafeAreaView >
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
      <ScrollView 
      onMomentumScrollEnd={(e)=>test(e)}
        onMomentumScrollBegin={(e)=>test(e)} 
        onScroll={onScroll} 
        onScrollEndDrag={onScrollEndDrag} 
        ref={scrollRef}  
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{zIndex:100,borderRadius:50,marginVertical:30,backgroundColor:'#ECEBEA'}}
        contentContainerStyle={{
          zIndex:100,
          position:'relative',
          flexDirection:'row',
          alignItems:'center',
          borderWidth:1,
          marginHorizontal:20,
          borderRadius:50,
          flexWrap:'nowrap',
          }}
          >
        {['','','',...values,'','','',''].map(item=>{
          const selected = values[selectedIndex]===item
         

            return(
              <View style={{backgroundColor:selected ?'white' : 'transparent',width:50,zIndex:100,flexDirection:'row',alignItems:'center',justifyContent:'center',flex:1,borderRadius:50,height:'110%'}}>
            <Text style={{fontSize:selected ? 30 : 18,color:selected ? '#FF5A3C'  : 'black',zIndex:100,}}>{item}</Text>
            
          </View>)
          
        })}
      </ScrollView>
        <View style={{
          position:'absolute',
          width:54,
          height:54,
          borderWidth:2,
          borderColor:'#FF5A3C',
          borderRadius:50,
          top:25,
          left:170,
          right:0,
          bottom:0,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          zIndex:-100,
          // backgroundColor:'white'
          }}>

      </View>

      </View>
      



      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text>Selected Value  </Text>
        <Text style={{color:'black',fontSize:30}}>{values[selectedIndex]}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
