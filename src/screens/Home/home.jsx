import { useState } from "react";
import Container from "../../components/Container/container";
import Divider from "../../components/Divider/divider";
import "./home.css";
import ToDoList from "./List/list";

const HomeScreen = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddNew = () => {
    if (!inputValue.trim()) {
      alert("Please write something before adding a new item!");
      return;
    }

    let newList = [...list, { id: list.length + 1, todo: inputValue }];
    setList(newList);
    setInputValue("");
  };

  const handleRemove = (id) => {
    let newList = list.filter((el) => el?.id !== id);
    setList(newList);
  };

  return (
    <div className="home-screen">
      <Container>
        <h1>Simple ToDo App</h1>
        <p className="sub-title">This todo app for test design.</p>

        <div className="input-form">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write Text here . . ."
          />
          <button onClick={handleAddNew}>+ Add New</button>
        </div>

        <Divider />
        <ToDoList list={list} onRemove={(id) => handleRemove(id)} />
      </Container>
    </div>
  );
};

export default HomeScreen;
