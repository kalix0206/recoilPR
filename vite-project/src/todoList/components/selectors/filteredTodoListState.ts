import { todoListState } from "../atoms/todoListState";
import { todoListFilterState } from "../atoms/todoListFilterState";
import { selector } from "recoil";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isCompleted);
      case "Show Uncompleted":
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});
