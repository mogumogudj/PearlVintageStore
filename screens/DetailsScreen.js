import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#f8ecbc"}}>
      <Text style={{ fontWeight: "bold", fontSize: 24,}}>CONTACT</Text>
      <Text style={{fontWeight: "bold", padding: 4,}}>TEL:</Text>
      <Text>+32(0)468 21 09</Text>
      <Text style={{fontWeight: "bold", padding: 4,}}>EMAIL:</Text>
      <Text>EMAIL: wolfverelst@gmail.com</Text>
      <Text style={{fontWeight: "bold", padding: 4,}}>LOCATION:</Text>
      <Text> frederik lintsstraat 126</Text>
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
export default DetailsScreen;