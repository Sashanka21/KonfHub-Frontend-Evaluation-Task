import React, { useState, useEffect } from 'react';

const EventTimer = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(data?.start_date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(data?.start_date));
    }, 1000);
    return () => clearInterval(interval);
  }, [data?.start_date]);

  return (
    <div className='flex items-center justify-center min-h-2 bg-gray-100'>
      <div className='text-center w-full p-4 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-semibold mb-2'>Event Starts In:</h1>
        <div className='text-2xl font-mono tracking-wider'>
          {timeLeft.days}D:{timeLeft.hours}H:{timeLeft.minutes}M:{timeLeft.seconds}S
        </div>
      </div>
    </div>
  );
};

const calculateTimeLeft = (startDate) => {
  const eventDate = new Date(startDate);
  const currentTime = new Date();
  const difference = eventDate - currentTime;

  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

export default EventTimer;
