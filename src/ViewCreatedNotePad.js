import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
const GIST_KEY = "";


class ViewCreatedNotepad extends Component {
    state = {
        notepad: [this.props.notepad]
    }

    renderNotePads = () => {
        this.props.notepad.map((notepad) =>

            <>
                <p>Notepad Title</p>

                <div className="input-group mb-3 notepad-layout"  >
                    <div className='input-group-prepend mb-3' style={{ "width": "250px" }}>
                        <input type="text" className="form-control" placeholder="My notepad tittle..." value={notepad.notepad_title} />
                    </div>
                    <div className='notepad-buttons'>
                        <Button style={{ "marginInline": "15px" }} variant='primary'> Save NotePad</Button>
                        <Button variant="danger" onClick={(event) => this.handleDeleteNotepad(event)} > Delete</Button>
                    </div>

                </div>

            </>


        )
    }



    render() {


        // console.log("VIEW Created Link", this.props)

        return (

            <div className='notepad-input'>


                {this.state.notepad.map((note) =>
                    <>
                        <div >


                            <p>VIEW Created Notepad Title</p>

                            <div className="input-group mb-3 notepad-layout"  >
                                <div className='input-group-prepend mb-3' style={{ "width": "250px" }}>
                                    <input type="text" className="form-control" placeholder={note.notepad_title} onChange={(event) => this.handleChangeForCreateNotePad(event)} value={note.notepad_title} />
                                </div>
                                <div className='notepad-buttons'>
                                    <Button style={{ "marginInline": "15px" }} onClick={(event) => this.handleSubmitForCreateNotePad(event)} variant='primary'> Save NotePad</Button>
                                    <Button variant="danger" onClick={(event) => this.handleDeleteNotepad(event)} > Delete</Button>
                                </div>
                            </div>
                        </div>





                        <div className='note-input'>
                            <p> My Notes</p>

                            <Form>
                                <Form.Group className="mb-3" style={{ "width": "380px" }}>
                                    <Form.Control type="text" placeholder="Enter note title..." onChange={(event) => this.handleChangeForNoteTitle(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3" style={{ "width": "380px" }}>
                                    <Form.Control as="textarea" rows={3} placeholder='Enter note...' onChange={(event) => this.handleChangeForNoteDescription(event)} />
                                </Form.Group>
                                <Button className="mb-3" style={{ "margin": "5px" }} variant="success" onClick={(event) => this.handleAddNote(event)} > Add Note</Button>
                            </Form>


                        </div>
                    </>
                )}
                <div >
                    {/* <Note notes={this.state.add_note_data}/> */}


                    {/* {this.state.add_note_data.map((note) => {
                        return <Form style={{ "width": "380px" }}>
                            <Form.Group className="mb-3" >
                                <Form.Control className="mb-3" type="text" />
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="danger"> Delete</Button>
                        </Form>
                    })} */}
                </div>




            </div>
        );
    }
}

export default ViewCreatedNotepad;
