import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const registerSchema = yup.object().shape({
    name: yup.string().min(3).required('Ingrese un Nombre válido. Ej. John'),
	last_name: yup.string().min(3).required('Ingrese un Apellido válido. Ej. Doe'),                    
	telephone: yup.string().min(12).required('Ingrese un telefono válido. Ej. 542215123478'),
	email: yup.string().email('Ingrese un email válido. Ej. john.doe@itechnology.com').required('Ingrese un email válido. Ej. john.doe@itechnology.com'),
	password: yup.string().min(5).matches(passwordRules, {message:'Minimo 5 caracteres, debe tener al menos una mayuscula, minuscula y 1 número'}).required('Contraseña requerida'),
	confirmPass: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden').required('Confirmar contraseña requerida'),
});