import React from 'react';
import MapView from 'react-native-maps';
import Location from 'expo-location';
import Permissions from 'expo-permissions';
import GetLocation from 'react-native-get-location';
import DestinationButton from "./components/DestinationButton"
import CurrentLocationButton from "./components/CurrentLocationButton"
import { View, Text } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {},
    }

    this._getLocationAsync();

  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("Permission not granted!")
    }

    let location = await Location.getCurrentPositionAsync()
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    }

    this.setState({ region: region })
  }

  centerMap() {
    const { latitude,
      longitude,
      latitudeDelta,
      longitudeDelta } = this.state.region;

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DestinationButton />
        <CurrentLocationButton cb={() => { this.centerMap() }} />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          ref={(map) => { this.map = map }}
          style={{ flex: 1, zIndex: 0 }}
        />
      </View>
    );
  }
}