import Parse from 'parse';

import {
    useState
} from 'react';

/**
 * Hook to manage activity join/leave logic
 * @param {number} maxCapacity - Maximum capacity of the activity
 * @returns {object} - Join state and handler
 */
export const useActivityJoin = (maxCapacity = 0) => {
    const [hasJoined, setHasJoined] = useState(false);
    const [joinedCount, setJoinedCount] = useState(0);
    const [waitingList, setWaitingList] = useState(false);

    const handleJoin = () => {
        if (hasJoined) {
            setHasJoined(false);
            setJoinedCount((prev) => prev - 1);
            setWaitingList(false);
        } else {
            if (joinedCount < maxCapacity) {
                setHasJoined(true);
                setJoinedCount((prev) => prev + 1);
            } else {
                setWaitingList(true);
            }
        }
    };

    const isFull = joinedCount >= maxCapacity;

    return {
        hasJoined,
        joinedCount,
        waitingList,
        isFull,
        handleJoin,
    };
};