import React from 'react';
import events from '../../../jsonData/upcoming-events';

const UpcomingEvents = () => {
  let upcomingEvents = events.map((event, i) => {
    return (
      <div key={i}>
        <div className='event-container'>
          <div className='event-container__image'>
            <img alt='event-icon' src={event.imgSrc}></img>
          </div>
          <div className='event-container__description'>
            <h6>{event.createdBy}</h6>
            {event.tag ? (
              <button type='button' className='event-container__tag'>
                {event.tag}
              </button>
            ) : (
              <div></div>
            )}
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className='upcoming-events'>
      <div className='text-center events__header'>
        <h5>Upcoming Events</h5>
      </div>
      <div className='events__allevents'>{upcomingEvents}</div>
    </div>
  );
};

export default UpcomingEvents;
