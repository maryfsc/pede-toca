import React from 'react';
import InputMask from 'react-input-mask';
import { validate as validateCPF } from "gerador-validador-cpf";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

  let value;

 class Contact extends React.Component {
   constructor(props) {
		 super(props);
	 }
	 
	 _handleBlur(event) {
    return validateCPF(event.target.value) ? '' : alert('CPF inválido!');
	 }

	//  _renderWarning() {
	// 	 return (
	// 		 this._handleBlur() ? '' :  <p>CPF Inválido!</p>
	// 	 )
	//  }

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
            <FormGroup className="cpf-wrapper">
							<Label for="">CPF</Label>
							<InputMask 
								mask="999.999.999-99" 
								type="text" 
								name="cpf" 
								id="contact-user-cpf" 
								placeholder="123456789"
								onBlur={this._handleBlur}
							/>
							{value}
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