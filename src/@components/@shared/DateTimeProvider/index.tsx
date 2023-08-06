import React, { createContext, useEffect, useState } from 'react';

export const DateTimeContext = createContext<any>({
  currentDateTime: new Date(),
  timeRemaining: 30 * 60 * 1000,
});

const DateTimeProvider = ({ children }: any) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date('2023-08-08T09:59:53'));
  const [timeRemaining, setTimeRemaining] = useState(30 * 60 * 1000);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(prevDateTime => new Date(prevDateTime.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Stop if time is up
    if (timeRemaining <= 0) return;

    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1000); // decrement by one second
    }, 1000);

    // Clean up the interval on component unmount or if time runs out
    return () => {
      clearInterval(intervalId);
    };
  }, [timeRemaining]); // Dependency on timeRemaining ensures effect reruns when time changes

  return (
    <DateTimeContext.Provider value={{ currentDateTime, timeRemaining, setIsFirst, isFirst }}>
      {children}
    </DateTimeContext.Provider>
  );
};

export default DateTimeProvider;
