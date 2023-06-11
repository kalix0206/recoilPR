import { useRecoilState } from "recoil";
import { ITodoTypes } from "./atoms/todoListState";
import { todoListState } from "./atoms/todoListState";

const TodoItem = ({ item }): JSX.Element => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      contents: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });
    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.contents} onChange={editItemContents} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;

const replaceItemAtIndex = (
  arr: Array<ITodoTypes>,
  index: number,
  newValue: string
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
const removeItemAtIndex = (arr: Array<ITodoTypes>, index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
