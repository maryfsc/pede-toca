import * as React from 'react';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import ArtistCard from './ArtistsCard.js';
import About from './About.js';
import { Route } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';

    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: 'rafael@laboratoria.la',
        password: 'banana'
      })
    }

    fetch(`${BASE_URL}/login`, options)
      .then(() => {
        const options = {
          method: 'get',
          credentials: 'include'
        }

        fetch(`${BASE_URL}/artists`, options)
          .then(res => res.json())
          .then(data => {
            this.setState({artists: data})});
        });
  }

  render() {
    return (
      <div>
        <Header />        
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About}/>        
        <Route path='/contact' component={Contact} />        
        <Route path='/artists' render={() => 
          <div>
          <h3 className="mb-4">Artistas</h3>
            {this.state.artists.map(artist => 
            <ArtistCard name={artist.name} id={artist.id} genre={artist.genre} />
            )}
          </div>
        } />
        <Footer content="A cool site made with React & PedeToca API!"/>
      </div>
    );
  }
}
