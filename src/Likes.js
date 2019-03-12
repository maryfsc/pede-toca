import React from 'react';
import { Button, Badge } from 'reactstrap';

class Likes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  _handleLikes() {    
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="like-wrapper">
        <Button color="secondary" onClick={() => this._handleLikes()}> 
          Like<Badge color="secondary">{this.state.likes}</Badge>
        </Button>
      </div>
    )
  }
}

export default Likes;

/*
1) What it renders?
  -a button with a badge (span) that contains Likes and a counter for them, starting with 0;

2) Does the component renders different things under different circumstances?
  -No, it's always a button with a badge.

3) When passing a function as a prop, does it calls it? What does it does?
  -Yes, it should make a callback call to update the state;

4) What happens when the user interacts with my component?
  -When the user clicks it, it should update the like count accordingly.

Other contracts:
  - a div is always rendered, and it contains all other elements;
  - there is a button and inside of it, a span with like counts;?
  */
