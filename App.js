import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View, Alert } from "react-native";

export default function App() {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [tries, setTries] = useState(1);
  const [text, setText] = useState("Guess a number between 1-100");

  const evaluate = () => {
    setTries(tries + 1);
    if (number == answer) {
      Alert.alert("You guessed the number in " + tries + " guesses");
    } else if (number < answer) {
      setText("Your guess of " + number + " is too low");
    } else if (number > answer) {
      setText("Your guess of " + number + " is too high");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number) => setNumber(number)}
        value={number}
        keyboardType="numeric"
      />
      <Button title="Guess" onPress={evaluate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
