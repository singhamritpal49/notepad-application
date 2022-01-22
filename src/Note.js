import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';



class Note extends Component {

    render() {
        return (
            <div>
                
                {this.props.notes.map((note) => {
                    return <Form>
                        <Form.Group  className="mb-3" style={{ "width": "380px"}}> 
                            <Form.Control className="mb-3" type="text" placeholder={note.title} key={note.id} />
                            <Button variant="danger"> Delete</Button>
                            <Form.Control as="textarea" rows={3} placeholder={note.details}  />
                        </Form.Group>
                        
                    </Form>
                })}
            </div>
        );
    }
}

export default Note;
