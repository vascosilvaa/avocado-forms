import React from 'react';
import { Formik, Field } from 'formik';

const Form = ({ form: { onSubmit, inputs, submitButton } }) => {
	let initialValues = {};
	inputs.map(input => initialValues[input.type] = input.initialValue);
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => onSubmit(values, actions)}
			validate={(values) => validate(values, inputs)}
			render={(props) => (
				<form onSubmit={props.handleSubmit}>
					{inputs.map(({ id, type, name, placeholder, component }) => {
						return (
							<div key={id}>
								{component
									? <Field type={type} name={name} placeholder={placeholder} component={component} />
									: <Field type={type} name={name} placeholder={placeholder} />
								}
							</div>
						)
					})}
					{submitButton
						? submitButton
						: <button type="submit">Submit</button>
					}
				</form>
			)}
		/>
	)
};

export default Form;

const validate = (values, inputs) => {
	let errors = {};
	inputs.forEach(input => {
		if (input.validation) {
			if (input.required && !values[input.name]) {
				return errors[input.name] = "Required"
			}
			switch (input.name) {
				case 'firstName':
					if (values.firstName.length < 2) {
						errors.firstName = 'O primeiro nome deve ter, pelo menos, 2 caracteres.'
					}
					if (typeof values.firstName !== 'string' || /\d/.test(values.firstName)) {
						errors.firstName = 'O primeiro nome é invalido.'
					}
					break;
				case 'lastName':
					if (values.lastName.length < 2) {
						errors.lastName = 'O último nome deve ter, pelo menos, 2 caracteres.'
					}
					if (typeof values.lastName !== 'string' || /\d/.test(values.lastName)) {
						errors.lastName = 'O último nome é invalido.'
					}
					break;
				case 'age':
					if (isNaN(values.age)) {
						errors.age = 'A idade deve ser um número.'
					}
					if (values.age <= 0 && Number(values.age)) {
						errors.age = 'A idade deve ser positiva.'
					}
					break
				case 'phone':
					if (isNaN(values.phone)) {
						errors.phone = 'O contacto telefónico é invalido.'
					}
					if (values.phone.length < 9) {
						errors.phone = 'O contacto telefónico deve ter, pelo menos 9 números.'
					}
					break
				case 'email':
					if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
						errors.email = 'Endereço de e-mail inválido';
					break
				case 'subdomain':
					if (values.subdomain.length > 10) {
						errors.subdomain = "O subdomínio só pode ter 10 caracteres."
					}
					if (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i.test(values.subdomain))
						errors.subdomain = "Subdomínio inválido";
					break
				case 'address':
					break
				default:
					break
			}
		}
	})

	return errors;

}