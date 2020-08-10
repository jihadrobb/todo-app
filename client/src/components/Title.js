import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "native-base";

export default ({ title }) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fa8072",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
