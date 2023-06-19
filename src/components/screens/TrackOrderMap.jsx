import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";
import { useState } from "react";

export default function TrackOrderMap() {
  const [coord, setCoord] = useState({
    latitude: 41.708889,
    longitude: 44.751389,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          //   latitude: 41.716667,
          //   longitude: 44.783333,
          //   latitudeDelta: 0.15,
          //   longitudeDelta: 0.15,
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="SHAURMA"
          description="SHereuli"
        >
          <Image
            source={require("../../../assets/icons/restaurant.png")}
            style={{ width: 35, height: 35 }}
          />
        </Marker>
        {/* <Marker
          coordinate={{
            latitude: 41.708889,
            longitude: 44.751389,
          }}
          title="Vakis Parki"
          description="Iseirne"
        >
          <Image
            source={require("../../../assets/icons/restaurant.png")}
            style={{ width: 35, height: 35 }}
          />
        </Marker> */}
        <Marker
          draggable
          key="marker"
          coordinate={{
            latitude: 41.708889,
            longitude: 44.751389,
          }}
          style={{ width: 100, height: 100 }}
          //   onDragEnd={(e) => setCoord({ latitude: e.nativeEvent.coordinate })}
        />
        <Polyline
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
            { latitude: 37.7665248, longitude: -122.4161628 },
            { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.7948605, longitude: -122.4596065 },
            { latitude: 37.8025259, longitude: -122.4351431 },
          ]}
          lineDashPattern={[0]}
          strokeColor="#43BE79"
          strokeWidth={15}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
