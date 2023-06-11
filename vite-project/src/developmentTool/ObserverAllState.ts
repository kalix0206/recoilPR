import { useRecoilSnapshot } from "recoil";
import { useEffect } from "react";

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified: ");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
      // todoListState ValueLoadable {state: 'hasValue', contents: Array(3)}
    }
  }, [snapshot]);
  return null;
};

/* 

asyncMap: async (mapper) => {…}
getInfo_UNSTABLE: ({ key }) => {…}
getLoadable: (recoilValue) => {…}
getNodes_UNSTABLE: (opt) => {…}
getPromise: (recoilValue) => {…}

*/
