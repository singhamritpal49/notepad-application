import React, { Component } from 'react';
import NotePad from './NotePad';
import ViewCreatedNotepad from './ViewCreatedNotePad';
const GIST_KEY = "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";

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
        console.log("childData", childData)
        this.setState({
            data: this.state.data.concat([childData]),
            // data: this.state.data.concat([childData]),
        })
    }


    render() {
        return (
            <div >
                <div className='home' >
                    <p>NotePad Application</p>
                    <NotePad notepad={this.state.notepads} parentCallback={this.handleCallback} />
                    {this.state.data.length ?
                        <ViewCreatedNotepad notepad={this.state.data} /> : ""
                    }

                    {/* {
                    this.state.notepads.map((notepad) => {
                        return <NotePad notepad={notepad}/>
                    })
                } */}
                </div>
                {/* <ViewCreatedNotepad /> */}
            </div>
        );
    }
}

export default Home;
