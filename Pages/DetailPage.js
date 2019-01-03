import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

import MapView, { Marker } from 'react-native-maps';

type Props = {};

export default class DetailPage extends Component<Props> {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('NavTitle', 'Detail Page')
      }
  };

  


 

    render() {
      console.log('render detail');
        const { params } = this.props.navigation.state;
  
        var item = params.item;
        console.log(item.img_url);

        var coordinate = {
          latitude: item.latitude,
          longitude: item.longitude,
        }
        return ( 
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
                <Image style={styles.full} source={{ uri: item.img_url }}></Image>
                <Text style={styles.price}>{item.price_formatted}</Text>
                <View style={styles.infoPage}>
                  <Text style={styles.infoTitle}>Bed Room</Text>
                  <Text style={styles.infoValue}>{item.bedroom_number}</Text>
                  <Text style={styles.infoTitle}>Bath Room</Text>
                  <Text style={styles.infoValue}>{item.bathroom_number}</Text>
                </View>
                <View style={styles.infoPage}>
                <Text style={styles.infoTitle}>Car Space</Text>
                  <Text style={styles.infoValue}>{item.car_spaces}</Text>
                  <Text style={styles.infoTitle}>Property Type</Text>
                  <Text style={styles.infoValue}>{item.property_type}</Text>
                </View>

                <MapView
                style={styles.map}
    initialRegion={{
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034,
    }}
  >
  <Marker
      coordinate={coordinate}
      title={item.title}
    />
    </MapView>
        </ScrollView>
        );
    }


  
}

const styles = StyleSheet.create({
  contentContainer: {
      paddingVertical: 0
    } ,
    full: {
      height: 120    
    },
    infoPage: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingBottom:5
    },
    price: {
      paddingHorizontal: 10,
      fontSize:30,
      fontWeight:'bold',
      color:"#48BBEC",
      paddingVertical: 10
    },
    infoTitle: {
      fontSize: 12,
      fontWeight:"bold",
      width:50,
      
    },
    infoValue: {
      fontSize: 12,
      textAlign:"right",
      width:50
    },
    map: {
      height:250
    }


});
