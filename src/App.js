import React, { Component } from 'react';
import './App.css';
import Form, { inputTypes } from './components/Form';

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
    const CustomInputComponent = ({ field, form: { touched, errors }, ...props }) => (
      <div>
        <input type="text" {...field} {...props} />
        {touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );

    const CustomInputCheckbox = ({ field, form: { touched, errors }, ...props }) => (
      <div>
        <input type="checkbox" {...field} {...props} />
        {touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );

    const CustomInputPassword = ({ field, form: { touched, errors }, ...props }) => (
      <div>
        <input  {...field} {...props} type="password" />
        {touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );

    const CustomInputSelect = ({ field, form: { touched, errors }, ...props }) => (
      <div>
        <select {...field} {...props} defaultValue={0}>
          <option disabled value={0}>Select option</option>
          <option value={1}>Value 1</option>
          <option value={2}>Value 2</option>
          <option value={3}>Value 3</option>
          <option value={4}>Value 4</option>
        </select>
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );


    const { EMAIL, FIRST_NAME, LAST_NAME, PHONE, AGE, SUBDOMAIN, CHECKBOX, PASSWORD, REPEAT_PASSWORD, SELECT } = inputTypes

    const form = {
      name: 'Test form',
      onSubmit: (values, actions) => this.onSubmit(values, actions),
      inputs: [
        {
          id: 1,
          name: EMAIL,
          type: EMAIL,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'E-mail',
          component: CustomInputComponent
        },
        {
          id: 2,
          name: FIRST_NAME,
          type: FIRST_NAME,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Primeiro nome',
          component: CustomInputComponent
        },
        {
          id: 3,
          name: LAST_NAME,
          type: LAST_NAME,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Último nome',
          component: CustomInputComponent
        },
        {
          id: 4,
          name: PHONE,
          type: PHONE,
          initialValue: '',
          validation: true,
          required: false,
          placeholder: 'Número de telefone',
          component: CustomInputComponent
        },
        {
          id: 5,
          name: AGE,
          type: AGE,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Idade',
          component: CustomInputComponent
        },
        {
          id: 6,
          name: SUBDOMAIN,
          type: SUBDOMAIN,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Subdomínio',
          component: CustomInputComponent
        },
        {
          id: 7,
          name: CHECKBOX,
          type: CHECKBOX,
          initialValue: false,
          validation: true,
          required: true,
          component: CustomInputCheckbox
        },
        {
          id: 8,
          name: PASSWORD,
          type: PASSWORD,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Password',
          component: CustomInputPassword
        },
        {
          id: 9,
          name: REPEAT_PASSWORD,
          type: REPEAT_PASSWORD,
          initialValue: '',
          validation: true,
          required: true,
          placeholder: 'Repeat password',
          component: CustomInputPassword
        },
        {
          id: 10,
          name: SELECT,
          type: SELECT,
          initialValue: 0,
          validation: true,
          required: true,
          placeholder: 'Select input',
          component: CustomInputSelect
        },
      ],
      // submitButton: this.renderSubmitButton()
    }

    return (
      <>
        <Form form={form} language={'en-us'}/>
      </>
    );
  }
}

export default App;
