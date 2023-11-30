import * as yup from 'yup';

export const subscriberSchema = yup.object().shape({                   
	email: yup.string().email('Por favor ingrese un email valido').required('Email requerido')
});