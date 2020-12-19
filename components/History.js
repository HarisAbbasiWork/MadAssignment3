import React, {useState, useEffect} from 'react';
import { Text,TextInput, FlatList,SafeAreaView,View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import { DataTable } from 'react-native-paper';
import Constants from 'expo-constants';



 export default function  ResultScreen ({route,navigation}) {
     
     const [meeting2, setMeeting2]=useState(route.params.meeting)
     const [history, setHistory]=useState([])
     const deletehistory=()=>{
       setHistory({
         price: "",
         discount:"",
         fprice: ""
       })
       navigation.navigate('Start',{
            remove:true
          })
     }
     
     useEffect(() => {
       
       setHistory(history.push(meeting2))
       console.log("I am here",history.length,meeting2.length)
     
     },[]);
     
  return (
    <View style={styles.container}>
    <View>
    
    <FlatList
        data={meeting2}
        renderItem={({item})=>(<View>
        
        <DataTable>
    <DataTable.Header>
      <DataTable.Title>Price</DataTable.Title>
      <DataTable.Title >Discount</DataTable.Title>
      <DataTable.Title >Final Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell> {item.price}</DataTable.Cell>
      <DataTable.Cell >{item.discount}%</DataTable.Cell>
      <DataTable.Cell >{item.fprice}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
  
        </View>)}
        keyExtractor={(item, index) => item.id}
        
      />
      <Button title="Delete History" onPress={deletehistory}/>
    </View>
     
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#10c99e',
  },

  
});
