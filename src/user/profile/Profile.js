import React, { Component } from 'react';
import Navigation from '../dashboard/navigation/Navigation';
import UserInfo from './user-info/UserInfo';
import Portfolio from '../dashboard/portfolio/Portfolio';
import Posts from '../pinned-posts/posts/Posts';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true
    };
  }

  render() {
    return (
      <div className='profile'>
        <div className='profile__navigation'>
          <Navigation profile={this.state.profile}></Navigation>
        </div>
        <div className='profile__news'>
          <div className='profile__content'>
            <UserInfo></UserInfo>
            <Portfolio></Portfolio>
          </div>
          <div className='profile__posts'>
            <Posts></Posts>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
