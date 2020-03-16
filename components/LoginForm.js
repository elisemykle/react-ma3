import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const schema = yup.object().shape({
	username: yup.string().required("Most enter valid username"),
	password: yup
        .string()
		.required()
		.min(8, "Password most be longer than 8")
});

 function LoginForm(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    return(
        <Form>
            <Form.Group>
                <Form.Label>Username<Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={registrer}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password<Form.Label>
                <Form.Control name="password" placeholder="Enter your password" ref={registrer}/>
            </Form.Group>
            <Button type="submit">Login</Button>

        </Form>
        )
}

export default LoginForm;
