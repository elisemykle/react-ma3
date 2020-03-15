import React from "react";
import App from './App.js';
import HomeContent from './HomeContent.js';
import NewsList from './NewsList.js';
import LoginForm from './LoginForm.js';

export default function Heading(props) {
    return <h1>{props.content}</h1>;
}

export default Heading;
