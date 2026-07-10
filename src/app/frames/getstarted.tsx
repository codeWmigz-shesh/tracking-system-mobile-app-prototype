import { View, StyleSheet, Button, Image, Text} from "react-native";
// @ts-ignore
import Logo from "@/logo/loading_logo.png";

export default function Getstarted({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Button title="Get Started" onPress={onPress}/>
      <Text style={styles.text}>Ver. 1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b01f1f",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  image: {
    borderRadius: 5,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  }
});
