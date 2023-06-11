import { atom } from "recoil";

export interface ITodoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}
export const todoListState = atom<ITodoTypes[]>({
  key: "todoListState",
  default: [
    {
      id: 1,
      contents: "tom과 함꼐",
      isCompleted: false,
    },

    {
      id: 2,
      contents: "tom이 없는",
      isCompleted: false,
    },

    {
      id: 3,
      contents: "tom&toms를",
      isCompleted: false,
    },
  ],
});
