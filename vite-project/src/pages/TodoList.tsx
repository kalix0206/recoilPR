import TodoItemCreator from "../todoList/components/TodoItemCreate";
import TodoItem from "../todoList/components/TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../todoList/components/selectors/filteredTodoListState";
import TodoListFilters from "../todoList/components/TodoListFilters";
import TodoListStats from "../todoList/components/TodoListStats";
const TodoList = (): JSX.Element => {
  //   const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((elem) => (
        <TodoItem item={elem} key={elem.id} />
      ))}
      <TodoListFilters />
      <TodoListStats />
    </>
  );
};

export default TodoList;
