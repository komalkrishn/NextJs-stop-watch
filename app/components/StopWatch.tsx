"use client";

import React, { useState, useEffect, useRef } from "react";
import StopWatchButtons from "./StopWatchButtons";

const StopWatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeIdRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeIdRef.current);
      }, 10);
    }
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    startTimeIdRef.current = Date.now() - elapsedTime;
  };

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (): string => {
    const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(
      2,
      "0"
    );
    const minutes = String(
      Math.floor((elapsedTime / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
      2,
      "0"
    );
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(
      2,
      "0"
    );

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <>
      <StopWatchButtons
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
        formatTime={formatTime()}
      />
    </>
  );
};

export default StopWatch;
