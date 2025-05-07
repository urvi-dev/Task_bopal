import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "countdown-timer";

const useCountdownTimer = (initialMinutes = 2, initialSeconds = 0) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = loadTimeFromLocalStorage();
    return (
      storedTime || {
        minutes: initialMinutes,
        seconds: initialSeconds,
        isResendVisible: false,
      }
    );
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(countdown);
          return { ...prevTime, isResendVisible: true };
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    saveTimeToLocalStorage(timeLeft);
  }, [timeLeft]);

  const resetTimer = () => {
    const initialTime = {
      minutes: initialMinutes,
      seconds: initialSeconds,
      isResendVisible: false,
    };

    setTimeLeft(initialTime);
    saveTimeToLocalStorage(initialTime);
  };

  return {
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
    isResendVisible: timeLeft.isResendVisible,
    resetTimer,
  };
};

// Helper functions to handle localStorage
const loadTimeFromLocalStorage = () => {
  try {
    const storedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTime ? JSON.parse(storedTime) : null;
  } catch (error) {
    console.error("Error loading timer from localStorage:", error);
    return null;
  }
};

const saveTimeToLocalStorage = (time) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(time));
  } catch (error) {
    console.error("Error saving timer to localStorage:", error);
  }
};

export default useCountdownTimer;
