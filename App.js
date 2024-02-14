import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CheckBox } from "react-native-elements";


export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={{marginTop: 100, fontWeight: 'bold', fontSize: 30}}> Sign In</Text>
      <Text> Wellcome back! Please enter your details</Text>
      <StatusBar style="auto" />
      <View style={{marginTop: 70, display: 'flex', flexDirection: 'column', alignItems: 'center',width:"100%"}}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 10, width: 300, borderWidth: 1, borderColor: '#EFECEC', borderRadius: 10, padding: 15, marginTop: 20,}}>
       
            <Feather name="mail" size={30} color="pink" marginLeft="10" />
        
        
          <TextInput value="b.x@y.com"></TextInput>
      </View>
        <View style={{border: 'none',marginTop:20, borderRadius:10,width:300,padding:18, backgroundColor:'#fafbfc'}}>
          <AntDesign name="lock" size={30} color="#81a1d4" />
         
            <TextInput  secureTextEntry placeholder="Password" ></TextInput>
          </View>
        <View>
          <View style={{marginLeft:0, marginTop: 20, }}>
                <CheckBox style = {styles.checkbox}
                checkedColor="red" title="Remember me"/>
      
            </View>

        </View>
      </View> 
      
      <View style={{flexDirection: 'row', marginTop: 200}}> 
        <Text style={{color: 'blue', fontWeight: 'bold',}}>Forgot Password?</Text>
      </View>
      <Text style={{marginTop: 20, backgroundColor: 'skyblue', padding: 10, width: 300, borderRadius: 20, textAlign: 'center'}}>Sign In</Text>
      <View style={{flexDirection: 'row', marginTop: 20, display: 'flex', gap: 110}}>
        <Text>Create account</Text>
        <Text style={{color: 'orange'}}>Sign Up</Text>
      </View>

      <View style={styles.icons}>
                <TouchableOpacity>
                    <Icon name="facebook" size={30} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="google" size={30} color="red" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="apple" size={30} color="black" />
                </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icons:{
    flexDirection: 'row',
    marginTop: 50,
    display: 'flex',
    gap: 100
  },
  Feather:{
    marginTop: 30,
    position: 'absolute',
    left: 10,
    border: 5,
    borderRadius: 10
   
  },
  AntDesign:{
    marginTop: 30,
    position: 'absolute',
    left: 10,
   
  }

});