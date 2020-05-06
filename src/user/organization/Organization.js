import React, { Component } from 'react';
import Navigation from '../dashboard/navigation/Navigation';
import OrgInfo from './org-info/OrgInfo';
import Portfolio from '../dashboard/portfolio/Portfolio';
import Posts from '../pinned-posts/posts/Posts';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: true
    };
  }

  render() {
    return (
      <div className='organization'>
        <div className='organization__navigation'>
          <Navigation org={this.state.org}></Navigation>
        </div>
        <div className='organization__news'>
          <div className='organization__content'>
            <OrgInfo></OrgInfo>
            <Portfolio></Portfolio>
          </div>
          <div className='organization__posts'>
            <Posts></Posts>
          </div>
        </div>
      </div>
    );
  }
}

export default Organization;
