import React, { Component } from 'react';
import NotePad from './NotePad';
const GIST_KEY = "";

class Home extends Component {
    state= {
        notepads: []
    }
    componentDidMount() {
        fetch('https://api.github.com/gists', {
            type: 'GET',
            headers: new Headers(
             {
                "Authorization": GIST_KEY,
                'Accept': 'application/vnd.github.v3+json'
              })

        }
        )
        .then(response => response.json())
        .then(response => console.log(response ))
    }



    render() {
        return (
            <div className='home'>
                <p>NotePad Application</p>    
                <NotePad />            
            </div>
        );
    }
}

export default Home;
