import React from 'react';
import { Button } from 'react-bootstrap';

const OrgInfo = props => {
  return (
    <div className='org-details'>
      <div className='org-details__profile'>
        <div className='org-details__image'>
          <img src='' alt='' />
        </div>
        <div className='org-details__edit-button'>
          <Button variant='primary'>User Edit</Button>
        </div>
      </div>
      <div className='org-details__content'>
        <h1>
          CodeUnio Community <Button variant='primary'>Follow</Button>
        </h1>
        <p className='org-details__profession'>Started 10 years ago</p>
        <p className='org-details__place'>584 members</p>
        <p className='org-details__description'>
          where millions of people gather together every day to imagine, create
        </p>
        <div className='org-details__social-buttons'>
          <Button variant='primary'>Facebook</Button>
          <Button variant='primary'>Linkedin</Button>
          <Button variant='primary'>Github</Button>
        </div>
      </div>
    </div>
  );
};
export default OrgInfo;
