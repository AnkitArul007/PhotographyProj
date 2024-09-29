import { useContext, useEffect } from 'react'
import { NotificationContext } from './toast-provider';



const UseNotification = ({ duration = 5000 }) => {
    const { triggerNotification, setToastDuration } = useContext(NotificationContext);

    useEffect(() => {
        setToastDuration(duration)
    }, [duration])

    return {
        triggerNotification
    }
}

export default UseNotification
