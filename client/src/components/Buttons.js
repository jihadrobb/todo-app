import React from "react";
import { Icon, Button, View, Text } from "native-base";

export default ({ navigation, isActive, setIsActive }) => {
  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}
    >
      <Button
        rounded
        primary
        style={{ marginHorizontal: 10, marginBottom: 10 }}
        onPress={() => navigation.navigate("Form", { currentData: null })}
      >
        <Icon name="create" />
      </Button>
      {isActive === false ? (
        <Button
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(false)}
        >
          <Text>Todo</Text>
        </Button>
      ) : (
        <Button
          bordered
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(false)}
        >
          <Text>Todo</Text>
        </Button>
      )}
      {isActive === true ? (
        <Button
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(true)}
        >
          <Text>Done</Text>
        </Button>
      ) : (
        <Button
          bordered
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(true)}
        >
          <Text>Done</Text>
        </Button>
      )}
      {isActive === null ? (
        <Button
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(null)}
        >
          <Text>All</Text>
        </Button>
      ) : (
        <Button
          bordered
          info
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          onPress={() => setIsActive(null)}
        >
          <Text>All</Text>
        </Button>
      )}
    </View>
  );
};
