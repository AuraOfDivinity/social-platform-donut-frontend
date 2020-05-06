import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DonutTitleSmall } from '../../../donutTitle/DonutTitle';
import Logout  from '../../profile/popups/Logout';
import logo from '../../../svgs/logout.svg';
import SVGIcon from '../../../Icons/SVGIcon';

const ListItem = props => {
  return (
    <ListGroup.Item className={props.className}>
      <SVGIcon name={props.name} />
      <NavLink to={props.link} className='link'>
        <b>{props.name}</b>
      </NavLink>
    </ListGroup.Item>
  );
};

const Navigation = props => {
  const [logout, setLogout] = useState(false);

  const cancel = () => {
    setLogout(false);
  };
  const divStyle = {
    position: 'relative',
    bottom: '-15em'
  };

  return (
    <div className='navigation'>
      <ListGroup>
        <ListGroup.Item>
          <NavLink to='/dashboard'>
            <div className='navigation__title'>
              <DonutTitleSmall />
            </div>
          </NavLink>
        </ListGroup.Item>
        <ListItem
          name='Dashboard'
          className={props.dashboard ? 'navigation__listitem--active' : 'navigation__listitem--inactive'}
          link='/dashboard'
        />
        <ListItem
          name='Pinned Posts'
          className={props.posts ? 'navigation__listitem--active' : 'navigation__listitem--inactive'}
          link='/pinned-posts'
        />
        <ListItem
          name='Organization'
          className={props.org ? 'navigation__listitem--active' : 'navigation__listitem--inactive'}
          link='/organization'
        />
        <ListItem
          name='Account'
          className={props.profile ? 'navigation__listitem--active' : 'navigation__listitem--inactive'}
          link='profile'
        />
        <ListItem
          name='Settings'
          className={props.settings ? 'navigation__listitem--active' : 'navigation__listitem--inactive'}
          link='/settings'
        />
        <ListGroup.Item style={divStyle}>
          <Button
            variant='link'
            size='sm'
            style={{ 'margin-left': '-8.5px', color: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setLogout(true)}
          >
            <img className='navigation__logout' src={logo} alt='L'></img>
            <b>Logout</b>
          </Button>
          <Logout show={logout} onHide={cancel} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

Navigation.propTypes = {
  dashboard: PropTypes.bool,
  post: PropTypes.bool,
  org: PropTypes.bool,
  profile: PropTypes.bool,
  settings: PropTypes.bool
};

export default Navigation;
