import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Contact extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Entre em contato!</h3>
				<div className="form-container offset-md-3">
					<Form>
						<FormGroup>
							<Label for="">Nome</Label>
          		<Input type="text" name="name" id="contact-user-name" placeholder="" />
        		</FormGroup>
        		<FormGroup>
							<Label for="">Email</Label>
          		<Input type="email" name="email" id="contact-user-email" placeholder="nome@email.com" />
        		</FormGroup>
        		<FormGroup>
          		<Label for="message-text">Escreva sua mensagem!</Label>
          		<Input type="textarea" name="text" id="message-text" />
        		</FormGroup>
       		</Form>
       		<Button>Enviar</Button>
      	</div>
     </div> 
		)
	}
}