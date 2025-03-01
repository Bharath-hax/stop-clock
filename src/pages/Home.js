import React, { useState, useEffect } from 'react';

const StopClock = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Stop Clock</h1>
        <p className="text-2xl text-gray-600 mt-4">{formatTime(seconds)}</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button
            className={`px-6 py-3 text-white rounded-md ${isRunning ? 'bg-red-500' : 'bg-green-500'} hover:bg-opacity-100`}
            onClick={handleStartStop}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-opacity-80"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopClock;
