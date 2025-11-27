import { useState } from "react";
import EventsItem from "./EventsItem";




const apiStatusConstants={
    initial:'Nothing is click please click any event',
    sucsses:'Event is alerted successfully',
    closed: 'we are so sorry we have CLOSED rgisteration for this event',
    open: 'congrlation the registration for this event is OPEN',

}

const initialList=[
  {
    id: 1,
    title: 'Music Concert',
    date: '2024-07-15',
    location: 'New York City',
    description: 'Join us for an unforgettable night of live music featuring top artists from around the world.',
    status: apiStatusConstants.open,
  },
  {
    id: 2,
    title: 'Art Exhibition',
    date: '2024-08-01',
    location: 'Los Angeles',
    description: 'Explore contemporary art pieces from emerging and established artists at our annual art exhibition.',
    status: apiStatusConstants.closed,
  },
  {
    id: 3,
    title: 'Tech Conference',
    date: '2024-09-10',
    location: 'San Francisco',
    description: 'Discover the latest trends and innovations in technology at our annual tech conference.',
    status: apiStatusConstants.sucsses,
  },
  {
    id: 4,
    title: 'Art Exhibition',
    date: '2024-08-01',
    location: 'Los Angeles',
    description: 'Explore contemporary art pieces from emerging and established artists at our annual art exhibition.',
    status: apiStatusConstants.closed,
  },
  {
    id: 5,
    title: 'Tech Conference',
    date: '2024-09-10',
    location: 'San Francisco',
    description: 'Discover the latest trends and innovations in technology at our annual tech conference.',
    status: apiStatusConstants.sucsses,
  },
  {
    id: 6,
    title: 'Art Exhibition',
    date: '2024-08-01',
    location: 'Los Angeles',
    description: 'Explore contemporary art pieces from emerging and established artists at our annual art exhibition.',
    status: apiStatusConstants.open,
  },
  

]
const Events = () => {
  const [events, setEvents] = useState(initialList);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const handleClick = (status) => {
    setApiStatus(status);

  }

  
  return (
    <div>
       {apiStatus && `Event Status: ${apiStatus}`}
      <div className="flex flex-wrap gap-6 justify-center items-center">
       
        {events.map(item=>(
          <EventsItem key={item.id} eventDetails={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Events;