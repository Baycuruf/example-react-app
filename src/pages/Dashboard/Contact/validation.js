import { object, string } from 'yup';

const required_message = "Bu alan zorunludur"

const contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().required(required_message).email("Geçerli email girmedin davar!"),
    message: string().min(5,"5 karakter lazım oç").required(required_message),
  });
  
  export default contactSchema;