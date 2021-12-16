import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  BackgroundImage,
  ImageBackground,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <ImageBackground
          source={{
            uri: 'https://png.pngtree.com/background/20210709/original/pngtree-vector-graffiti-book-creative-educational-background-blackboard-picture-image_548339.jpg',
          }}
          style={styles.bg}>
          <View style={styles.viewWrapper}>
            <Image
              source={{
                uri: 'https://codelatte.org/wp-content/uploads/2018/07/fixcil.png',
              }}
              style={styles.imageLogin}
            />
            <Text style={styles.textTitle}>LOGIN HERE</Text>
          </View>
          <TextInput placeholder="Masukan Email" style={styles.textInput} />
          <TextInput
            placeholder="Masukan Password"
            style={styles.textInput}
            secureTextEntry
          />
          <TouchableOpacity>
            <View style={styles.viewButton}>
              <Text style={styles.textLogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  textInput: {
    width: responsiveWidth(70),
    height: responsiveHeight(6),
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
  },
  viewButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: '#43B2EC',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1.1),
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: responsiveFontSize(2.2),
  },
  imageLogin: {
    width: 100,
    height: 100,
  },
  viewWrapper: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: responsiveFontSize(3.2),
    fontWeight: 'bold',
    color: '#43B2EC',
  },
  bg: {
    flex:1,
    justifyContent:'center',
  },
});

// import React from 'react';
// import { StyleSheet, Image, Text, uri, View, TextInput, TouchableOpacity } from 'react-native';

// export default class App extends React.Component {
//   state={
//     email:"",
//     password:""
//   }
//   render(){
//     return (
//       <View style={styles.container}>
//          <Image
//             source={{
//               uri:
//                 'https://png.pngtree.com/background/20210709/original/pngtree-vector-graffiti-book-creative-educational-background-blackboard-picture-image_548339.jpg',
//             }}
//             style={styles.Container}
//           />
//         <Text style={styles.logo}>HeyAPP</Text>
//         <View style={styles.inputView} >
//           <TextInput
//             style={styles.inputText}
//             placeholder="Email..."
//             placeholderTextColor="#003f5c"
//             onChangeText={text => this.setState({email:text})}/>
//         </View>
//         <View style={styles.inputView} >
//           <TextInput
//             secureTextEntry
//             style={styles.inputText}
//             placeholder="Password..."
//             placeholderTextColor="#003f5c"
//             onChangeText={text => this.setState({password:text})}/>
//         </View>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.loginBtn}>
//           <Text style={styles.loginText}>LOGIN</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Signup</Text>
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#003f5c',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   logo:{
// //     fontWeight:"bold",
// //     fontSize:50,
// //     color:"#fb5b5a",
// //     marginBottom:40
// //   },
// //   inputView:{
// //     width:"80%",
// //     backgroundColor:"#465881",
// //     borderRadius:25,
// //     height:50,
// //     marginBottom:20,
// //     justifyContent:"center",
// //     padding:20
// //   },
// //   inputText:{
// //     height:50,
// //     color:"white"
// //   },
// //   forgot:{
// //     color:"white",
// //     fontSize:11
// //   },
// //   loginBtn:{
// //     width:"80%",
// //     backgroundColor:"#fb5b5a",
// //     borderRadius:25,
// //     height:50,
// //     alignItems:"center",
// //     justifyContent:"center",
// //     marginTop:40,
// //     marginBottom:10
// //   },
// //   loginText:{
// //     color:"white"
// //   }
// // });
