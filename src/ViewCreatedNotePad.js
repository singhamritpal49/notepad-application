import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import NotePad from './NotePad';


class ViewCreatedNotepad extends Component {
    state = {
        notepad: this.props.notepad
    }




    render() {
        console.log(this.props)
        return (
            <div className='notepad-input'>


                {this.state.notepad.map((note) =>
                    <>
                        <div >


                            <p>View Created Notepad Title</p>

                            <div className="input-group mb-3 notepad-layout"  >
                                <div className='input-group-prepend mb-3' style={{ "width": "250px" }}>
                                    <input type="text" className="form-control" placeholder={note.notepad_title} value={note.notepad_title} />
                                </div>

                            </div>
                        </div>


                    </>
                )}




            </div>
        );
    }
}

export default ViewCreatedNotepad;
