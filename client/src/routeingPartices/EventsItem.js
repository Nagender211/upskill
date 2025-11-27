
const EventsItem = (props) => {
  const { eventDetails,handleClick } = props;
  const { id, title, date, location, description, status } = eventDetails;
  const handleStatus=()=>{
    handleClick(status);
  }
  return (
    <div  onClick={handleStatus}>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
      {/* <p>{status}</p> */}
    </div>
  );
};

export default EventsItem;