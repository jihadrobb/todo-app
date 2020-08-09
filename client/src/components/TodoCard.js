import React, { useState } from "react";
import { Card, CardItem, Text, Body, Button, Icon } from "native-base";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/todoAction";

export default ({ navigation, todo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

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
          <Text>{todo.description}</Text>
          <Body style={{ flex: 1, flexDirection: "row-reverse" }}>
            <Button
              small
              rounded
              danger
              onPress={() => dispatch(deleteTodo(todo.id))}
            >
              <Icon name="trash"></Icon>
            </Button>
            <Button
              small
              rounded
              warning
              onPress={() => navigation.navigate("Form", { currentData: todo })}
            >
              <Icon name="settings"></Icon>
            </Button>
          </Body>
        </CardItem>
      )}
      <CardItem footer bordered>
        <Text>
          {todo.due_date ? new Date(todo.due_date).toLocaleString() : ""}
        </Text>
      </CardItem>
    </Card>
  );
};
