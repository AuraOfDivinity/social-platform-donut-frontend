import React from 'react';
import customNotifications from '../../../jsonData/notifications';

const Notifications = () => {
  let notifications = customNotifications.map((notification, i) => {
    return (
      <div key={i}>
        <div className='notification-container'>
          <div className='notification-container__image'>
            <img alt='image__icon' src={notification.imgSrc}></img>
          </div>
          <div className='notification-description'>
            <h6>{notification.heading}</h6>
            {notification.tag ? (
              <button type='button' className='tag'>
                {notification.tag}
              </button>
            ) : (
              <div></div>
            )}
            <p>{notification.content}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className='notifications'>
      <div className='text-center notifications__heading'>
        <h5>Notifications</h5>
      </div>
      <div className='notifications__allnotifications'>{notifications}</div>
    </div>
  );
};

export default Notifications;
