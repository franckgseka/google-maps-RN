import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

export default function App() {

  const [origin, setOrigin] = React.useState ({
    latitude: 33.640411,
    longitude: -84.419853,
  });

  const [destination, setDestination] = React.useState ({
    latitude: 33.640411,
    longitude: -84.419853,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        <Marker 
          draggable 
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />

        <Marker 
          draggable
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

        <MapViewDirections 
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
        />

        <Polyline 
          coordinates={[ origin, destination ]}
          strokeColor="pink"
          strokeWidth={9}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }

});
