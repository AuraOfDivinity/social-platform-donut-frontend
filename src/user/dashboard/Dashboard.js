import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import UpcomingEvents from './upcoming-events/UpcomingEvents';
import Notifications from './notifications/Notifications';
import Portfolio from './portfolio/Portfolio';
import NewsFeed from './news-feed/NewsFeed';
import Updates from './updates/Updates';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: true
    };
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard__navigation'>
          <Navigation dashboard={this.state.dashboard}></Navigation>
        </div>
        <div className='dashboard__news'>
          <div className='news__notifications'>
            <UpcomingEvents></UpcomingEvents>
            <Notifications></Notifications>
          </div>
          <NewsFeed></NewsFeed>
        </div>
        <div className='dashboard__promotions'>
          <Portfolio></Portfolio>
          <Updates></Updates>
        </div>
      </div>
    );
  }
}

export default Dashboard;
