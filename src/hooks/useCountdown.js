import { useEffect, useState } from "react";

function msUntil(time) {
  const [h, m] = time.split(":").map(Number);
  const end = new Date();
  end.setHours(h, m, 0, 0);
  return end - new Date();
}

export function formatCountdown(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
}

export function useCountdown(endTime) {
  const [remaining, setRemaining] = useState(() => msUntil(endTime));

  useEffect(() => {
    const id = setInterval(() => setRemaining(msUntil(endTime)), 1000);
    return () => clearInterval(id); // stop the timer when the component unmounts
  }, [endTime]);

  return remaining;
}
