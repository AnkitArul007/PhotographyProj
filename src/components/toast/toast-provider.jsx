// NotificationContext.js
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import Notification from './notification'
import { css } from "@emotion/react";

export const NotificationContext = createContext({ setToastDuration: () => { }, triggerNotification: () => { } });

export const NotificationProvider = ({ children }) => {
    const [duration, setDuration] = useState(5000)
    const [notifications, setNotifications] = useState([])

    const notificationsRef = useRef(notifications);

    const setToastDuration = (dur) => {
        setDuration(dur)
    }

    useEffect(() => {
        notificationsRef.current = notifications;
    }, [notifications]);


    const triggerNotification = useCallback(({ message, type }) => {
        console.log(message, type)
        var id = Math.floor(Math.random() * 100);
        const timerId = setTimeout(() => {
            console.log("clearing....", notifications)
            console.log(id)
            setNotifications(prev => prev.filter(notify => notify.id != id))
        }, duration)

        setNotifications(prev => [...prev, { component: <Notification message={message} type={type} />, id, timerId: timerId }])
    }
        , [duration, notifications, setNotifications])

    useEffect(() => {
        return () => {
            notificationsRef.current.forEach((notification) => clearTimeout(notification.timerId));
        };
    }, []);

    const style = css`
        position : fixed;
        top: 1.25rem;
        right: 1.25rem;
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        align-items: center;
        transition-timing-function: linear;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    `

    console.log(notifications)
    return (
        <NotificationContext.Provider value={{ setToastDuration, triggerNotification }}>
            <div
                css={style}
            >
                {
                    notifications?.map((notify) => {
                        return notify.component
                    })
                }
            </div>
            {children}
        </NotificationContext.Provider>
    );
};

// export const useNotification = () => {
//     const context = useContext(NotificationContext);
//     if (!context) {
//         throw new Error('useNotification must be used within a NotificationProvider');
//     }
//     return context;
// };
