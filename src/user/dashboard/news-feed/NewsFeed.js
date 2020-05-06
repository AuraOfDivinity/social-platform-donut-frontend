import React, { Component } from "react";
import { Button } from "react-bootstrap";
import IndividualPost from "./items/IndividualPost";
import feed from "../../../jsonData/news-feed";
import AddEventModal from "./AddEventModal";
import EventItem from "./items/EventItem";
import NewsItem from "./items/NewsItem";
import SVGIcon from "../../../Icons/SVGIcon";

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    const borderStyle = {
      borderBottom: "0 none",
    };
    var content;

    let newsFeed = feed.map((newsItem, index) => {
      if (newsItem.type === "Project") {
        content = newsItem.eventImage ? (
          <NewsItem newsItem={newsItem}></NewsItem>
        ) : (
          <div></div>
        );
      } else if (newsItem.type === "Event") {
        content = newsItem.eventImage ? (
          <EventItem newsItem={newsItem}></EventItem>
        ) : (
          <div></div>
        );
      } else {
        content = <div></div>;
      }

      return (
        <IndividualPost content={content} newsItem={newsItem} key={index} />
      );
    });
    return (
      <div className="newsfeed">
        <div className="newsfeed__container">
          <div className="newsfeed__newpost-container">
            <input
              type="text"
              className="newsfeed__input-field"
              placeholder="write a post..."
            />
            <div className="newsfeed__button-container">
              <Button variant="primary" onClick={this.handleShow}>
                <SVGIcon name="Event" fill="white" />
                Event
              </Button>
              <AddEventModal
                show={this.state.show}
                handleClose={this.handleClose}
                borderStyle={borderStyle}
              />
              <Button variant="primary">
                <SVGIcon name="Project" fill="white" />
                Project
              </Button>
            </div>
          </div>
          <div className="newsfeed__categories">
            <div className="category-type active">All</div>
            <div className="category-type">Donuts</div>
            <div className="category-type">Events</div>
            <div className="category-type">Projects</div>
          </div>
          <div className="newsfeed__posts">{newsFeed}</div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
