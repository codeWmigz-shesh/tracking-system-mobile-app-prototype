import { View, Text, StyleSheet, Button, ScrollView, Alert } from "react-native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

export default function DashboardFrame({ onNavigate }: { onNavigate: (route: string) => void }) {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const askForLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location access is required to use this feature.");
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <Text style={styles.subHeader}>Welcome back!</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <Button title="Go to Profile" onPress={() => onNavigate("/profile")} />
        <Button title="View Reports" onPress={() => onNavigate("/reports")} />
        <Button title="Settings" onPress={() => onNavigate("/settings")} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistics</Text>
        <Text style={styles.stat}>Tasks Completed: 12</Text>
        <Text style={styles.stat}>Pending Requests: 3</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Permissions</Text>
        <Button title="Enable Location" onPress={askForLocation} />
      </View>

      {location && (
        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>Your Location</Text>
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="You are here" />
          </MapView>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
    color: "#555",
  },
  section: {
    width: "100%",
    marginBottom: 25,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  stat: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444",
  },
  mapContainer: {
    width: "100%",
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100%", // ✅ ensures map fills container
    height: "100%", // ✅ ensures map fills container
  },
});
