/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function ComingSoon({ daysToAdd = 30 }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const [targetDate] = useState(() => {
        const currentDate = new Date();
        return new Date(currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="coming-soon">
            <h1>Coming Soon...</h1>
            <div className="countdown">
                <div className="time-box">
                    <span>{timeLeft.days}</span> <p>Days</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours}</span> <p>Hours</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes}</span> <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds}</span> <p>Seconds</p>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
