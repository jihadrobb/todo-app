import React, { useState } from "react";
import { Card, CardItem, Text, Body, Button, Icon, View } from "native-base";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/actions/todoAction";

export default ({ navigation, todo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();
  const changeStatus = () => {
    dispatch(editTodo(todo.id, { status: !todo.status }));
  };

  return (
    <Card>
      <CardItem
        header
        button
        onPress={() => setShowDescription(!showDescription)}
      >
        <Text>{todo.title}</Text>
      </CardItem>
      {showDescription && (
        <CardItem>
          <Body
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              // flexWrap: "wrap",
            }}
          >
            <Text style={{ marginRight: 3, width: "80%" }}>
              {todo.description}
            </Text>
            <View style={{ alignSelf: "flex-end" }}>
              {todo.status ? (
                <Button small rounded light onPress={changeStatus}>
                  <Icon name="close-circle"></Icon>
                </Button>
              ) : (
                <Button small rounded success onPress={changeStatus}>
                  <Icon name="checkmark-circle-outline"></Icon>
                </Button>
              )}
              <Button
                small
                rounded
                warning
                onPress={() =>
                  navigation.navigate("Form", { currentData: todo })
                }
                style={{ marginVertical: 1 }}
              >
                <Icon name="settings"></Icon>
              </Button>
              <Button
                small
                rounded
                danger
                onPress={() => dispatch(deleteTodo(todo.id))}
              >
                <Icon name="trash"></Icon>
              </Button>
            </View>
          </Body>
        </CardItem>
      )}
      <CardItem footer bordered>
        <Text>
          Deadline: {todo.due_date ? new Date(todo.due_date).toLocaleString("en-ID", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) : ""}
        </Text>
      </CardItem>
    </Card>
  );
};
