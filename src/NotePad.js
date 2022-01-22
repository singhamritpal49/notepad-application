import React, { Component } from 'react';
import Note from './Note';
import { Button, Form } from 'react-bootstrap';


export class NotePad extends Component {
  state = {
    notes:[
        {title: "Note 1", details: "Sample note 1 title",id: 1 },
        // {title: "Note 2", details: "Sample note 1 title",id: 2 }
  ]
  }


  render() {

    return <div className="notepad-input" >
      <p>Notepad Title</p>
      <div className="input-group mb-3 notepad-layout"  >
        <div className='input-group-prepend mb-3' style={{ "width": "250px" }}>
          <input type="text" className="form-control" placeholder="My notepad tittle..." />
        </div>
        <div className='notepad-buttons'>
          <Button style={{ "marginInline": "15px" }} variant='primary'> Save</Button>
          <Button  variant="danger"> Delete</Button>
        </div>
      </div>

      <div className='note-input'>
        <p> My Notes</p>

        <Form>
          <Form.Group className="mb-3" style={{ "width": "380px" }}>
            <Form.Control type="text" placeholder="Enter note title..." />
          </Form.Group>
          <Form.Group className="mb-3" style={{ "width": "380px" }}>
            <Form.Control as="textarea" rows={3} placeholder='Enter note...' />
          </Form.Group>
          <Button className="mb-3" style={{ "margin": "5px" }} variant="success"> Add</Button>
        </Form>
      </div>
    
    <div >
      {/* <Note notes={this.state.notes}/>
       */}


{this.state.notes.map((note) => {
                    return <Form style={{ "width": "380px"}}>
                        <Form.Group  className="mb-3" > 
                            <Form.Control className="mb-3" type="text" placeholder={note.title} />
                            <Form.Control as="textarea" rows={3} placeholder={note.details}   />
                        </Form.Group>
                        <Button variant="danger"> Delete</Button>
                    </Form>
                })}
    </div>

      
    </div>

    
  }
}

export default NotePad;
