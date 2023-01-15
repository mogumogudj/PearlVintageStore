import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
} 
    from 'react-native';

import clothes from "../consts/clothes";

const HomeScreen = ({ navigation }) => {
const categories = ["POPULAR", "ALTERNATIVE", "SUMMER", "WINTER"];


const [ categoryIndex, setCategoryIndex] = React.useState(0);
const CategoryList = () => {
  return ( 
  <View style={styles.categoryContainer}>
    {categories.map((item, index) => (
      <TouchableOpacity key={index} activeOpacity = {0.6} onPress = { () => setCategoryIndex(index) }>
        
      <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
  );
};

// const Card = ({item}) => {
//   return (
//   <View style={styles.cardZ}>
//     <View>
//       <Text>Hello 1</Text>
//     </View>
    
//   </View>
// )}




  return (
    <View style={styles.section1}>
      <View style={styles.header}>
   
   <Text style={styles.homePageh1}>
    Welcome To
   </Text>
   <Text style={styles.homePageh2}>
    Pearl Vintage Store
   </Text>

   <Image style={styles.shoppingCartIcon}
   source={require("../assets/shopping-cart.png")}
   />


   <View style={styles.searchBar}>
   <Image 
   style={styles.searchIcon}
   source={require("../assets/search-icon.png")}
   />
   <TextInput style={styles.searchText} placeholder='Search'/>
   </View>

    
    <View style={styles.link1}>
      <Button style={styles.link2}
        title="About"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Socials"
        onPress={() => navigation.navigate('Menu')}
      />
</View> 

      </View>
      <CategoryList/>




<View style={styles.BossCard}>
      <View style={styles.bigAssCard}>
      <Image 
   style={styles.favourite1}
   source={require("../assets/favourite.png")}
   />
   
      <Image 
   style={styles.nikeJacket}
   source={require("../assets/nikejacket.png")}
   />



        <Text style={styles.cardText}>
          Nike Sportswear Winterjacket
        </Text>
        <Text style={styles.price1}>
          €29,99
        </Text>

        <Image 
   style={styles.plusIcon1}
   source={require("../assets/plus.png")}
   />

      </View>
      <View style={styles.bigAssCard}>
      <Image 
   style={styles.favourite1}
   source={require("../assets/favourite.png")}
   />
   
      <Image 
   style={styles.nikeJacket}
   source={require("../assets/crop-top.jpg")}
   />



        <Text style={styles.cardText}>
          Insane Cute Black & Purple Crop Top
        </Text>
        <Text style={styles.price1}>
          €9,99
        </Text>

        <Image 
   style={styles.plusIcon1}
   source={require("../assets/plus.png")}
   />
      </View>
      <View style={styles.bigAssCard}>
      <Image 
   style={styles.favourite1}
   source={require("../assets/favourite.png")}
   />
   
      <Image 
   style={styles.nikeJacket}
   source={require("../assets/blue-zipup.png")}
   />



        <Text style={styles.cardText}>
          Blue Ribble Zip Up Sweater
        </Text>
        <Text style={styles.price1}>
          €19,99
        </Text>

        <Image 
   style={styles.plusIcon1}
   source={require("../assets/plus.png")}
   />
      </View>
      <View style={styles.bigAssCard}>
      <Image 
   style={styles.favourite1}
   source={require("../assets/favourite.png")}
   />
   
      <Image 
   style={styles.nikeJacket}
   source={require("../assets/adidas.jpg")}
   />



        <Text style={styles.cardText}>
          Baby-Blue Adidas Sportswear Shirt
        </Text>
        <Text style={styles.price1}>
          €8,99
        </Text>

        <Image 
   style={styles.plusIcon1}
   source={require("../assets/plus.png")}
   />
      </View>

      </View>
      </View>






  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    backgroundColor: '#f8ecbc',
    padding: 12,
  },
  homePageh1: {
    color: "#231F1F",
    fontWeight: "bold",
    fontSize: "12",
    
  },
  homePageh2: {
    color: "#C94168",
    fontWeight: "bold",
    fontSize: "24"
  },
  shoppingCartIcon:  {
  width: 30,
  height: 30,
  marginLeft: 360,
  margin: 0,
  // backgroundColor: 'red',

  },
   searchIcon: {
    position: "relative",
    width: 30,
    height: 30,
    // backgroundColor: 'red',
    marginLeft: 12,
    marginBottom: 24,
    top: 12,
  },
  searchText: {
    // backgroundColor: 'red',
    padding: 12,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
    backgroundColor: "lightgrey",
    
  }, 
  categoryContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
    justifyContent: "space-around",
    
  }, 
  categoryText: {
    fontsize: 20,
    color: "#red",
    fontWeight: "bold",


  },
  categoryTextSelected: {
    color: "green",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "green",
  },
  cardZ: {
    display: "flex",
    flexDirection: "column",
    height: 224,
    backgroundColor: "red",
    width: 200,
    marginHorizontal: 2,
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
  },
  bigAssCard: {
    
    height: 224,
    backgroundColor: "lightgrey",
    width: 200,
    marginHorizontal: 2,
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
  }, BossCard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 8,
  }, 
  nikeJacket: {
    width: 170,
    height: 120,
    justifyContent: "center",
  }, 
  favourite1: {
    width: 20, 
    height: 20,
    zIndex: 1,
    position: "relative",
    left: 150,
    bottom: 6,
  }, 
  plusIcon1: {
    zIndex: 1,
    width: 20,
    height: 20,
    backgroundColor: "lightgreen",
    padding: 16,
    position: "relative",
    left: 140,
    borderRadius: 8,
    bottom: 40,
  }, 
  price1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 2,
  }, 
  }
  
  
  
);
export default HomeScreen;