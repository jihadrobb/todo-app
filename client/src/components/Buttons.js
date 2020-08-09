import React from "react";
import { Icon, Button, View } from "native-base";

export default ({ navigation }) => {
  return (
    <View>
      <Button
        rounded
        success
        style={{ marginHorizontal: 10, marginBottom: 10 }}
        onPress={() => navigation.navigate("Form", { currentData: null })}
      >
        <Icon name="create" />
      </Button>
    </View>
  );
};
