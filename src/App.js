import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  onSubmit = (values, actions) => {
    console.log('onSubmit');
  }

  renderSubmitButton = (props) => {
    return (
      <button type="submit">Submit</button>
    );
  }

  render() {
    const CustomInputComponent = ({
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    }) => (
        <div>
          <input type="text" {...field} {...props} />
          {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
      );

    const form = {
      name: 'Test form',
      onSubmit: (values, actions) => this.onSubmit(values, actions),
      inputs: [
        {
          id: 1,
          name: 'email',
          type: 'email',
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'E-mail',
          component: CustomInputComponent
        },
        {
          id: 2,
          name: 'firstName',
          type: 'firstName',
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Primeiro nome',
          component: CustomInputComponent
        },
        {
          id: 3,
          name: 'lastName',
          type: 'lastName',
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Último nome',
          component: CustomInputComponent
        },
        {
          id: 4,
          name: 'phone',
          type: 'phone',
          initialValue: '',
          validation: true,
          required: false,
          placeholder: 'Número de telefone',
          component: CustomInputComponent
        },
        {
          id: 5,
          name: 'age',
          type: 'age',
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Idade',
          component: CustomInputComponent
        },
        {
          id: 6,
          name: 'subdomain',
          type: 'subdomain',
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Subdomínio',
          component: CustomInputComponent
        },
      ],
      // submitButton: this.renderSubmitButton()
    }

    return (
      <>
        <Form form={form} />
      </>
    );
  }
}

export default App;
