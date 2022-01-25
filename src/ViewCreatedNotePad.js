import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';


class ViewCreatedNotepad extends Component {
    state = {
        notepad: this.props.notepad
    }




    render() {
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

                        {
                            note.add_note_data.map((note) =>
                                <div className='note-input'>
                                    <p> My Notes</p>

                                    <Form>
                                        <Form.Group className="mb-3" style={{ "width": "380px" }}>
                                            <Form.Control type="text" placeholder="Enter note title..." value={note.title} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" style={{ "width": "380px" }}>
                                            <Form.Control as="textarea" rows={3} placeholder='Enter note...' value={note.description} />
                                        </Form.Group>
                                        <Button className="mb-3" style={{ "margin": "5px" }} variant="success"  > Save</Button>
                                    </Form>


                                </div>
                            )
                        }
                    </>
                )}




            </div>
        );
    }
}

export default ViewCreatedNotepad;
