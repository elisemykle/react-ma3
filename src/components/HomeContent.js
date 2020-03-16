import React from "react";
import App from './App.js';
import HomeContent from './HomeContent.js';
import NewsList from './NewsList.js';
import LoginForm from './LoginForm.js';

export default function HomeContent(props) {
    render () {
	return (
        <p>{props.children}</p>
    );
    }
}

export default HomeContent;
