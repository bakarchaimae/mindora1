import { limitToLast, onValue, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../app/firebase/config";

export default function useRealtimeData() {
  const [sample, setSample] = useState<any>(null);

  useEffect(() => {
    const dataRef = query(
      ref(db, "devices/device1"),
      limitToLast(1) // only latest sample
    );

    return onValue(dataRef, snap => {
      if (snap.exists()) {
        const obj = snap.val();
        const lastKey = Object.keys(obj)[0];
        setSample(obj[lastKey]);
      }
    });
  }, []);

  return sample;
}
