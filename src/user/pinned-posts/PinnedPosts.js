import React, { Component } from 'react';
import Navigation from '../dashboard/navigation/Navigation';
import Posts from './posts/Posts';
import Updates from '../dashboard/updates/Updates';

class PinnedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinned_posts: true
    };
  }

  render() {
    return (
      <div className='pinned-posts'>
        <div className='pinned-posts__navigation'>
          <Navigation posts={this.state.pinned_posts}></Navigation>
        </div>
        <div className='pinned-posts__news'>
          <h1 class='pinned-posts__post'>Pinned Posts</h1>
          <Posts></Posts>
        </div>
        <div className='pinned-posts__promotions'>
          <h1 class='pinned-posts__updates'>Organization Updates</h1>
          <Updates></Updates>
        </div>
      </div>
    );
  }
}

export default PinnedPosts;
