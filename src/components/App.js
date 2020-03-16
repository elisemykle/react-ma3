import React from 'react';
import '../style/App.css';
import Heading from "./Heading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContent from "./HomeContent";
import News from "./News";
import Login from "./Login";


export default function App() {
  return (
      <Router className="App">
        <Navbar bg="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand>Elise rocks</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navnbar.Colapse>
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/news" className="nav-link">News</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </Nav>
            </Navnbar.Colapse>

        </Navbar>
        <Container>
            <Switch>
                <Route path="/" exact component={HomeContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Route>
                <Route path="/login" component={LoginForm}/>
                <Route path="/news" component={NewsList}/>
            </Switch>
        </Container>
      </Router>

  );
}
