import React, {useState} from 'react';
import { Text,TextInput, View,FlatList, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';


 export default function  StartScreen ({route,navigation}) {
     const[price,setPrice]=useState(0)
     const[discount,setDiscount]=useState(0)
     const[save,setSave]=useState(0)
     const[fprice,setFprice]=useState(0)
     const [error, setError] = useState("")
     const [showButton, setShowButton] = useState(false)
     const [warning, setWarning] = useState(false)
     
     

     const [meeting, setMeeting]=useState([{
         price: "",
         discount:"",
         fprice: ""
         }])
     const [backup, setBackup]=useState([{
         price: "",
         discount:"",
         fprice: ""
         }])
     const changeprice = (EnteredValue) =>{
       var pprice=EnteredValue
       setPrice(pprice);
       setShowButton(true)

       var ssave=(pprice * (discount / 100))
       setSave(ssave)
       var ffprice=pprice-ssave
       setFprice(ffprice)
       if(ffprice==0||discount==0){
         setShowButton(false)
       }else{
         setShowButton(true)
       }
       }
      const changediscount = (value) =>{
        var ddiscount=value
        setDiscount(ddiscount);
        var ssave=(price * (ddiscount / 100));
        setSave(ssave);
        var ffprice=price-ssave;
        setFprice(ffprice);
        if(ddiscount==0||ddiscount==0||ddiscount>100){
          if(ddiscount>100){
            setError("Please enter discount% less than 100")
            setShowButton(false)

          }
          setShowButton(false)
       }else if(ddiscount!=0&&ddiscount!=0){
         setError("")
         setShowButton(true)
       }

        
        }
const savedata =()=>{
  
  setMeeting([...meeting, {
       price: price,
       discount:discount,
       fprice:fprice
     

     }])
  setShowButton(false)
  
  console.log("u better run",route.params.remove)
  if(route.params.remove==true){
    console.log("Did it cam e")
    var arr=backup
    setMeeting(arr)
    route.params.remove=false

  } 
  route.params.remove=false
 }
const viewhistory =()=>{
  
  
  
  
  navigation.navigate('Result',{
            meeting:meeting
          })
  if(route.params.remove==true){
    navigation.navigate('Result',{
            meeting:backup
          })

  }  

   
 }
  return (
    <View style={styles.container}>
    <View style={{color:'060606'}}><Text style={styles.bigBlue}>Discount Calculator</Text></View>
    <View style={styles.paddings}>
    <View style={{backgroundColor:'#FCFCFC'}}>
    <TextInput
        style={{ width: 200, textAlign: 'center', borderWidth: 2 ,borderColor: '#FF5722', height: 50, }}
        placeholder="Enter Price"
        keyboardType='numeric'
        onChangeText={ value => changeprice(value) }
      />
    </View>
     
      </View>
      <View style={styles.paddings}>
      <View style={{backgroundColor:'#FCFCFC'}}>
      <TextInput
        style={{ width: 200, textAlign: 'center', borderWidth: 2 ,borderColor: '#FF5722', height: 50, }}
        placeholder="Enter Discount"
        keyboardType='numeric'
        onChangeText={ value => changediscount(value) }
      />
      </View>
      </View>
      <Text>{error}</Text>
      <View style={styles.paddings}>
      <Text style={styles.fortext2}>Data</Text>
      <Text style={styles.fortext}>Price: {price}</Text>
      <Text style={styles.fortext}>Discount: {discount}</Text>
      <Text style={styles.fortext}>Save: {save}</Text>
      <Text style={styles.fortext}>Final Price: {fprice}</Text>
      </View>
      
      <View style={styles.paddings}>
      { showButton ?<TouchableOpacity onPress={savedata} style={styles.appButton} > <Text style={{color:'white'}} >Save</Text></TouchableOpacity> : null }
      </View>
      <View style={styles.paddings}>
      <TouchableOpacity onPress={viewhistory} style={styles.appButton} >
      <Text style={{color:'white'}} >View History</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.paddings}>
      <Text style={styles.fortext2}>Developed By SP18-BCS-061 Haris Abbasi</Text>
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#E3DC02'
  },
  fortext: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#E3DC02'
  },
  fortext2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#FCFCFC'
  },
   paddings: {
    paddingTop:20,
  },
  appButton: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  
});


