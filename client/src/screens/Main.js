import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { Container } from 'native-base';
import { fetchTodos } from "../store/actions/todoAction";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import Buttons from "../components/Buttons";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { todos } = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch(fetchTodos());
    setLoading(false);
  }, []);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <Container>
      <ScrollView>
        <Title title="Your Todo List" />
        <Buttons navigation={navigation}/>
        <TodoList todos={todos} navigation={navigation}/>
      </ScrollView>
    </Container>
  );
};
