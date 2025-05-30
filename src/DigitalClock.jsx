import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervanId = setInterval(() => {

            setTime(new Date());
        }, 999);
        
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

    function formatDate(){
        const day = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();

        let monthName;

        switch (month) {
            case 0: monthName = "January"; break;
            case 1: monthName = "February"; break;
            case 2: monthName = "March"; break;
            case 3: monthName = "April"; break;
            case 4: monthName = "May"; break;
            case 5: monthName = "June"; break;
            case 6: monthName = "July"; break;
            case 7: monthName = "August"; break;
            case 8: monthName = "September"; break;
            case 9: monthName = "October"; break;
            case 10: monthName = "November"; break;
            case 11: monthName = "December"; break;
            default: monthName = ""; break;
        }

        return(`${monthName} ${day} ${year}`);
    }

    function dayDetector(){

        const day = time.getDay();

        let dayName;

        switch (day) {
            case 0: dayName = "Sunday"; break;
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            default: dayName = ""; break;
        }

        return(dayName);
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                    <br/>
                    <span className="date">{formatDate()}</span>
                    <br/>
                    <span className="date">{dayDetector()}</span>
                </div>
            </div>
        </>
    );
}

export default DigitalClock;