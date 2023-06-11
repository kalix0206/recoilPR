import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState, ITodoTypes } from "./atoms/todoListState";

const TodoItemCreator = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleClick = () => {
    const todo: ITodoTypes = {
      id: getId(),
      contents: inputValue,
      isCompleted: false,
    };
    setTodoList((oldTodoList: ITodoTypes[]) => [...oldTodoList, todo]);
    setInputValue("");
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleText} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoItemCreator;

let id = 0;
function getId() {
  return id++;
}
