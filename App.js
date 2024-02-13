import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'






export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={{marginTop: 100, fontWeight: 'bold', fontSize: 30}}> Sign In</Text>
      <Text> Wellcome back! Please enter your details</Text>
      <StatusBar style="auto" />
      <View style={{marginTop: 60}}>
        <View style={styles.Feather}> 
          <Feather name="mail" size={30} color="pink" />
        </View>
        <TouchableOpacity>
        <Text  style={{borderWidth:1,marginTop:20,textAlign:'center', borderRadius:10,width:300,padding:15}}>b.hello@gmail.com</Text>
        </TouchableOpacity>
        <View>
        <View style={styles.AntDesign}> 
          <AntDesign name="lock" size={30} color="blue"/>
        </View>
          <TextInput  secureTextEntry placeholder="Password" style={{borderWidth:1,marginTop:20, borderRadius:10,width:300,padding:10, textAlign:'center'}}></TextInput>
        </View>
        <View>

        </View>
      </View> 
      
      <View style={{flexDirection: 'row', marginTop: 80}}> 
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
   
  },
  AntDesign:{
    marginTop: 30,
    position: 'absolute',
    left: 10,
   
  }

});