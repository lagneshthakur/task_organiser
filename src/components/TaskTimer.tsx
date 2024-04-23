import { beautifyTimer } from '@/helpers/TaskHelpers';
import React, { useState, useEffect } from 'react';

interface TimerProps {
    startTimer: boolean;
}

const TaskTimer: React.FC<TimerProps> = ({ startTimer }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (startTimer) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [startTimer]);

    return (
        <p className='absolute lg:-right-48 -bottom-10 lg:bottom-0  lg:top-1/2 -translate-y-1/2 w-40'>{beautifyTimer(seconds)}</p>
    );
};

export default TaskTimer;