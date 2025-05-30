import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervanId = setInterval(() => {

            setTime(new Date());
        }, 1000);
        
        return () => {
            clearInterval(intervanId);
        }

    }, []);

    function formatTime(){
        let hours = time.getHours() % 12 || 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "AM" : "PM";

        return(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`);
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}

export default DigitalClock;