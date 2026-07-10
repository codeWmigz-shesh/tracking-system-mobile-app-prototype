import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
// @ts-ignore
import Logo from "@/logo/main-logo-red.png";

export default function LoginFrame({
  onLogin,
}: {
  onLogin: (username: string, password: string) => void;
}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>trackme</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Login"
        onPress={() => {
          if (!username || !password) {
            // Show a message if fields are empty
            alert("Please enter both username and password!");
            return;
          }

          // Example: check hardcoded credentials
          if (username === "admin" && password === "1234") {
            router.push("/frames/dashboardframe"); // proceed with login
          } else {
            alert("Invalid username or password!");
          }
        }}
      />

      <View style={{ marginTop: 12 }}>
        <Button
          title="Sign Up"
          onPress={() => router.push("/frames/signupframe")}
          color="#b01f1f"
        />
      </View>
      <Text className="top-30" style={styles.version}>
        v1.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  version: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#959595",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
