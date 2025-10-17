import { StyleSheet, Text, View } from "react-native";

export default function DetailsTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is the details TAB page opened at the bottom of the screen
      </Text>
      <Text>Route: /detailsTab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  title: {
    // margin: 20,
    fontSize: 20,
  },
});
