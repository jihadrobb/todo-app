import React from "react";
import { Container, View, Text } from "native-base";
import TodoCard from "./TodoCard";

export default ({ todos, navigation }) => {
  if (todos.length < 1) {
    return (
      <Container>
        <View>
          <Text style={{ textAlign: "center", justifyContent: "center" }}>
            No Todos yet...
          </Text>
        </View>
      </Container>
    );
  }
  return (
    <Container>
      <View>
        {todos.map((todo) => {
          return <TodoCard todo={todo} key={todo.id} navigation={navigation} />;
        })}
      </View>
    </Container>
  );
};
