import { selector } from "recoil";
import { countState } from "../atoms/countState";

export const countNextState = selector({
  key: "counterNextState",
  get: ({ get }) => {
    return get(countState) + 1;
  },
});
