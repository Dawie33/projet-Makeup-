

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const DateCalendar = () => {
  const [date, setDate] = useState(new Date());

    const handleSelectDate = () =>{
       setDate(date)
       console.log(date);
    }

    return (
        <section className='calendar'>
           
            <div>
            <Calendar onChange={setDate}  value={date} minDate ={ new Date ()} />
            </div>
            <p>  {date.toLocaleDateString()}</p>
            <button onClick={handleSelectDate}>Valider</button>
        
        </section>
    );
}

export default DateCalendar;