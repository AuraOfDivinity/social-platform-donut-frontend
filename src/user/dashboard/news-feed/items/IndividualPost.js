import React from 'react';
import { Dropdown } from 'react-bootstrap';
import upVoteImg from '../../../../svgs/up.svg';
import downVoteImg from '../../../../svgs/down.svg';
import commentIcon from '../../../../svgs/comment.svg';
import PropTypes from 'prop-types';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=''
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className='list-unstyled'>{children}</ul>
      </div>
    );
  }
);

const IndividualPost = props => (
  <div className='individual-post'>
    {props.content}
    <div className='individual-post__container'>
      <div className='individual-post__image'>
        <img src={props.newsItem.imgSrc} alt='icon' />
      </div>
      <div className='individual-post__user-details'>
        <h2>{props.newsItem.createdBy}</h2>
        <small>{props.newsItem.created}</small>
      </div>
      <div className='dropdown-container'>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>...</Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey='1'>Item 1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    <div className='individual-post__feedback'>
      <p>{props.newsItem.details}</p>
      <div className='individual-post__vote-container'>
        <div className='individual-post__upvote'>
          <button className='individual-post__vote-button'>
            <img src={upVoteImg} alt='Up Vote'></img>
          </button>
          <small>{props.newsItem.upvotes}</small>
        </div>
        <div className='individual-post__downvote'>
          <button className='individual-post__vote-button'>
            <img src={downVoteImg} alt='Down Vote'></img>
          </button>
          <small>{props.newsItem.downVotes}</small>
        </div>
        <div className='individual-post__comments'>
          <img src={commentIcon} alt='comment'></img>
          <small>Comment</small>
        </div>
      </div>
    </div>
  </div>
);

IndividualPost.propTypes = {
  newsItem: PropTypes.object,
  key: PropTypes.number
};

export default IndividualPost;
