import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Menu = ({ navigation }) => {
  return (

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#f8ecbc",}}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Socials</Text>


      <Image style={{width: 40, height: 40,flexDirection: "row"}}
   source={require("../assets/spotifylogo.png")}
   />

<Image style={{width: 40, height: 40}}
   source={require("../assets/soundcloudlogo.png")}
   />

<Image style={{width: 40, height: 40}}
   source={require("../assets/facebooklogo.png")}
   />

<Image style={{width: 40, height: 40}}
   source={require("../assets/instagramlogo.png")}
   />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Menu;