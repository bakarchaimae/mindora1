import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export interface DeviceSignals {
  ax: number;
  ay: number;
  az: number;
  gx: number;
  gy: number;
  gz: number;
  delta: number;
  theta: number;
  lowAlpha: number;
  highAlpha: number;
  highBeta: number;
  highGamma: number;
  heartRate: number;
}

export function useDeviceSignals() {
  const [data, setData] = useState<DeviceSignals | null>(null);

  useEffect(() => {
    const deviceRef = ref(db, "realtime_signals/device1");
    return onValue(deviceRef, snap => {
      setData(snap.val());
    });
  }, []);

  return data;
}
