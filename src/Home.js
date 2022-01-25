import React, { Component } from 'react';
import NotePad from './NotePad';
import ViewCreatedNotepad from './ViewCreatedNotePad';
const GIST_KEY = "";

class Home extends Component {
    state = {
        notepads: [],
        data: []
    }
    componentDidMount() {
        fetch('https://api.github.com/gists', {
            type: 'GET',
            headers:
            {
                'Authorization': 'bearer ' + GIST_KEY,
                'Accept': 'application/vnd.github.v3+json',
            }
        })
            .then(response => response.json())
            .then(response => this.setState({
                notepads: response
            }))
    }



    handleCallback = (childData) => {
        this.setState({
            data: this.state.data.concat([childData]),
        })
    }


    render() {
        console.log(this.state)
        return (
            <div >
                <div className='home' >
                    <p style={{ "marginInlineStart": "25px", "paddingTop": "13px" }}>NotePad Application</p>
                    <NotePad notepad={this.state.notepads} parentCallback={this.handleCallback} />
                    {this.state.data.length ?
                        <ViewCreatedNotepad notepad={this.state.data} /> : ""
                    }

                </div>

            </div>
        );
    }
}

export default Home;
