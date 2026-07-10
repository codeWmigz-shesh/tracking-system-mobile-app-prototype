import { View } from "react-native";
import { useRouter } from "expo-router";
import Getstarted from "@/app/frames/getstarted";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Getstarted onPress={() => router.push("/frames/loginframe")} />
    </View>
  );
}
