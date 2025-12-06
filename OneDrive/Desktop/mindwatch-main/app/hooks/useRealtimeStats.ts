import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export function useRealtimeStats() {
  const [stats, setStats] = useState<any | null>(null);

  useEffect(() => {
    const statsRef = ref(db, "realtime_signals");

    const unsubscribe = onValue(statsRef, (snapshot) => {
      if (snapshot.exists()) {
        setStats(snapshot.val());
      } else {
        setStats(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return stats;
}
