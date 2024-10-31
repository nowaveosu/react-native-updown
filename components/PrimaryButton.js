import { View, Text, Pressable, StyleSheet } from "react-native";
// react native에는 상속계념이 없다
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
