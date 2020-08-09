import React, { useState } from "react";
import {
  Container,
  Content,
  Item,
  Input,
  Form,
  Label,
  Button,
  Text,
} from "native-base";
import DatePicker from "react-native-datepicker";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/actions/todoAction";
import Title from "../components/Title";

export default ({ route, navigation }) => {
  const { currentData } = route.params;
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    title: currentData ? currentData.title : "",
    description: currentData ? currentData.description : "",
    due_date: currentData ? currentData.due_date : new Date(),
  });
  const changeInput = (name, value) => {
    const newInput = {
      ...formInput,
      [name]: value,
    };
    setFormInput(newInput);
  };
  const submitForm = () => {
    currentData
      ? dispatch(editTodo(currentData.id, formInput))
      : dispatch(addTodo(formInput));
    navigation.navigate("Main");
  };
  return (
    <Container>
      <Content>
        <Title title={currentData ? "Edit Todo" : "Add new Todo"} />
        <Form>
          <Item stackedLabel>
            <Label>Title</Label>
            <Input
              value={formInput.title}
              onChangeText={(text) => changeInput("title", text)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Description</Label>
            <Input
              value={formInput.description}
              onChangeText={(text) => changeInput("description", text)}
            />
          </Item>
          <Item>
            <Label>Due Date</Label>
            <DatePicker
              style={{ width: 200 }}
              date={formInput.due_date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={formInput.due_date}
              maxDate="2030-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => changeInput("due_date", date)}
            />
          </Item>
          <Button block primary style={{ margin: 10 }} onPress={submitForm}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
