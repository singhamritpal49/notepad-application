import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
const GIST_KEY = "";

export class NotePad extends Component {
  state = {
    notepad_title: '',
    note_title: '',
    note_description: '',
    add_note_data: []
  }



  noteParams = () => {

    const noteObj = {}


    for (const note of this.state.add_note_data) {
      noteObj[note.title] = { "content": note.description }
    }
    return noteObj
  }


  handleSubmitForCreateNotePad = (e) => {
    if (this.state.notepad_title === '') {
      console.log("Oops, you are missing one field to fill")
      return
    }
    // console.log(this.test())
    const notePadObj = {
      "description": this.state.notepad_title,
      "public": false,
      "files": this.noteParams()
    };
    fetch("https://api.github.com/gists", {
      method: "POST",
      headers: {
        'Authorization': 'bearer ' + GIST_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(notePadObj)
    }).then(response => response.json())
      .then(data => {
        if (data.message === "Validation Failed") {
          console.log("Failed")
        } else {
          console.log("SUCCESS", data)
        }
      })
    this.props.parentCallback(this.state)





    this.setState({
      notepad_title: '',
      note_title: '',
      note_description: '',
      add_note_data: []
    })
    console.log("Form Submitted")
  }


  handleDeleteNotepad = (e) => {
    // console.log("Form Ready to submit")
    this.setState({
      notepad_title: '',
      note_title: '',
      note_description: '',
      add_note_data: []


    })
    console.log("Form Canceled")
  }





  handleChangeForCreateNotePad = (event) => {
    this.setState({ notepad_title: event.target.value })
  }

  handleChangeForNoteTitle = (event) => {
    this.setState({ note_title: event.target.value })
  }

  handleChangeForNoteDescription = (event) => {
    this.setState({ note_description: event.target.value })
  }

  handleAddNote = () => {
    this.setState({
      add_note_data: this.state.add_note_data.concat([{ title: this.state.note_title, description: this.state.note_description }]),
      note_title: '',
      note_description: ''
    })

  }


  render() {



    return <div className="notepad-input" >
      <p>Notepad Title</p>
      <div className="input-group mb-3 notepad-layout"  >
        <div className='input-group-prepend mb-3' style={{ "width": "250px" }}>
          <input type="text" className="form-control" placeholder="My notepad tittle..." onChange={(event) => this.handleChangeForCreateNotePad(event)} value={this.state.notepad_title} />
        </div>
        <div className='notepad-buttons'>
          <Button style={{ "marginInline": "15px" }} onClick={(event) => this.handleSubmitForCreateNotePad(event)} variant='primary'> Save NotePad</Button>
          <Button variant="danger" onClick={(event) => this.handleDeleteNotepad(event)} > Delete</Button>
        </div>
      </div>

      <div className='note-input'>
        <p> My Notes</p>

        <Form>
          <Form.Group className="mb-3" style={{ "width": "380px" }}>
            <Form.Control type="text" placeholder="Enter note title..." onChange={(event) => this.handleChangeForNoteTitle(event)} value={this.state.note_title} />
          </Form.Group>
          <Form.Group className="mb-3" style={{ "width": "380px" }}>
            <Form.Control as="textarea" rows={3} placeholder='Enter note...' onChange={(event) => this.handleChangeForNoteDescription(event)} value={this.state.note_description} />
          </Form.Group>
          <Button className="mb-3" style={{ "margin": "5px" }} variant="success" onClick={(event) => this.handleAddNote(event)} > Add Note</Button>
        </Form>


      </div>

      <div >


        {this.state.add_note_data.map((note) => {
          return <Form style={{ "width": "380px" }}>
            <Form.Group className="mb-3" >
              <Form.Control className="mb-3" type="text" placeholder={note.title} />
              <Form.Control as="textarea" rows={3} placeholder={note.description} />
            </Form.Group>
            <Button variant="danger"> Delete</Button>
          </Form>
        })}
      </div>


    </div>


  }
}

export default NotePad;
