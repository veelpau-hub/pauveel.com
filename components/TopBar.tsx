"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="topbar">
      <div className="tb-left">
        <span className="dot" aria-label="Available for work" />
        <span>Available · MMXXVI</span>
      </div>
      <div className="tb-center">
        Pau Vidal{" "}
        <span style={{ opacity: 0.4, marginLeft: 8 }}>©</span>
      </div>
      <div className="tb-right">
        <span>Lleida</span>
        <span style={{ opacity: 0.5 }}>/</span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>
      </div>
    </div>
  );
}
