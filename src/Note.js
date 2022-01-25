import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';



class Note extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <div className='note-input' >
                    <p> My Notes</p>

                    <Form>
                        <Form.Group className="mb-3" style={{ "width": "380px" }}>
                            <Form.Control type="text" placeholder={Object.keys(this.props.note.files)[0]} />
                        </Form.Group>
                        <Form.Group className="mb-3" style={{ "width": "380px" }}>
                            <Form.Control as="textarea" rows={3} value={this.props.note.description} placeholder='Enter this.props.note...' onChange={(event) => this.handleChangeForNoteDescription(event)} />
                        </Form.Group>
                        <Button className="mb-3" style={{ "margin": "5px" }} id={this.props.note.id} variant="success" onClick={(event) => this.handleAddNote(event)} > Save</Button>
                        <Button className="mb-3" style={{ "margin": "5px" }} id={this.props.note.id} variant="danger" onClick={(event) => this.handleAddNote(event)} > Delete</Button>
                    </Form>


                </div>
            </div>
        );
    }
}

export default Note;
