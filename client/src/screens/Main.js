import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, View } from "react-native";
import { fetchTodos } from "../store/actions/todoAction";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import Buttons from "../components/Buttons";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoReducer);
  const [loading, setLoading] = useState(true);
  const [shownTodos, setShownTodos] = useState(todos);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isActive === null) {
      setShownTodos(todos);
    } else {
      let newTodoList = todos.filter(todo => todo.status === isActive);
      setShownTodos(newTodoList);
    }
  }, [isActive, todos]);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
      <Title title="Your Todo List" />
      <Buttons
        navigation={navigation}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <View>
        <TodoList todos={shownTodos} navigation={navigation} />
      </View>
    </ScrollView>
  );
};
