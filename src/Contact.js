import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


 class Contact extends React.Component {
   constructor(props) {
     super(props);
   }

  render() {
    return (
			<div className="form-wrapper">
				<h3>Entre em contato!</h3>
				<div className="form-container offset-md-3">
					<Form>
						<FormGroup>
							<Label for="">Nome</Label>
          		<Input type="text" name="name" id="contact-user-name" placeholder="" />
        		</FormGroup>
            <FormGroup>
							<Label for="">CPF</Label>
          		<Input type="text" name="cpf" id="contact-user-cpf" placeholder="123456789" />
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

export default Contact;