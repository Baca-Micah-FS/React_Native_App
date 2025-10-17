import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details SCreen</Text>
      <Text style={styles.title2}>THis is the details.jsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, margin: "auto" },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 12,
    color: "purple",
  },

  title2: {
    fontSize: 20,
  },
});
