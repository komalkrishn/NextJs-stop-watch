import { ReactNode } from "react";
import styles from "../page.module.css";

export interface StopWatchButtonsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  formatTime: ReactNode;
}

export default function StopWatchButtons({
  onStart,
  onStop,
  onReset,
  formatTime,
}: StopWatchButtonsProps) {
  return (
    <div className={styles.stopWatch}>
      <div className={styles.title}>Cosmo Clock </div>
      <div className={styles.display}>{formatTime}</div>
      <div className={styles.controls}>
        <button onClick={onStart} className={styles.startButton}>
          Start
        </button>
        <button onClick={onStop} className={styles.stopButton}>
          Stop
        </button>
        <button onClick={onReset} className={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
}
