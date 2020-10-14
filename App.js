import React from 'react';
import MapView from 'react-native-maps';
import Location from 'expo-location';
import Permissions from 'expo-permissions';
import DestinationButton from "./components/DestinationButton"
import {View, Text } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null,
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted")
      console.log("asdsadas")

    let location = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true })
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    }

    this.setState({ region: region })
  }

  render() {
    return (
      <View style = {{flex : 1}}>
        <DestinationButton/>
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}