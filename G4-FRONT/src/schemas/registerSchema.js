import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const registerSchema = yup.object().shape({
    name: yup.string().min(3).required('Nombre requerido'),
	lastName: yup.string().min(3).required('Apellido requerido'),                    
	email: yup.string().email('Por favor ingrese un email valido').required('Email requerido'),
	tel: yup.string().min(12).required('Teléfono requerido'),
	password: yup.string().min(5).matches(passwordRules, {message:'Minimo 5 caracteres, debe tener al menos una mayuscula, minuscula y 1 número'}).required('Contraseña requerida'),
	confirmPass: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden').required('Confirmar contraseña requerida'),
});