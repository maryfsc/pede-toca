import React from 'react';
import { Button, Badge } from 'reactstrap';

class Likes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes() {
    this.setState({ likes: this.state.likes + 1 })
  };

  render() {
    return (
      <div>
        <Button color="secondary">
          Like<Badge color="secondary" onClick={this.handleLikes()}>{this.state.likes}</Badge>
        </Button>
      </div>
    )
  }
}

export default Likes;

/*
1) What it renders?
  -a button with a badge that contains Likes and a counter for them;

2) Does the component renders different things under different circumstances?
  -No, it's always a button with a badge.

3) When passing a function as a prop, does it calls it? What does it does?
  -Yes, it should call it and update the state of count likes;

4) What happens when the user interacts with my component?
  -When the user clicks the button, it should update the like count.
*/