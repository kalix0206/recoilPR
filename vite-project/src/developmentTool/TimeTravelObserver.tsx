import { useGotoRecoilSnapshot, useRecoilSnapshot } from "recoil";
import { useState, useEffect } from "react";

const TimeTravelObserver = () => {
  const [snapshots, setSnapshots] = useState([]);
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    if (snapshots.every((s) => s.getID() !== snapshot.getID())) {
      snapshot.retain();
      setSnapshots([...snapshots, snapshot]);
    }
  }, [snapshot]);

  const gotoSnapshot = useGotoRecoilSnapshot();

  return (
    <ol>
      {snapshots.map((snapshot, i) => (
        <li key={i}>
          Snapshot {i}
          <button onClick={() => gotoSnapshot(snapshot)}>Restore</button>
        </li>
      ))}
    </ol>
  );
};

export default TimeTravelObserver;
