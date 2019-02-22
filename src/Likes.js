import React from 'react';
import { Button, Badge } from 'reactstrap';

class Likes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({ likes: this.state.likes + 1 })
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.handleLikes}>
          Like<Badge color="secondary" >{this.state.likes}</Badge>
        </Button>
      </div>
    )
  }
}

export default Likes;
  