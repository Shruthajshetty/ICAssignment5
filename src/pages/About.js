import React from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
function handleOptionClick(option) {
    // Display an alert with the selected option.
    window.alert(`You selected: ${option}`);
}

function About() {
    return (
        <>
<nav class="navbar navbar-expand-lg ">
        <div class="container">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        
        <Container>
            <h1 className="mt-4">About Us</h1>
            
            <Row>
                <Col md={6}>
                    <p>
                    Welcome to our food app, your ultimate culinary companion! We are passionate about bringing delicious food experiences to your fingertips, making your dining adventures easy, enjoyable, and unforgettable.

At our core, we believe that good food has the power to bring people together and create lasting memories. Whether you're a seasoned foodie or just starting your culinary journey, our app is designed to cater to all tastes and preferences.
                    </p>
                </Col>
                <Col md={6}>
                <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Select an Option
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleOptionClick("Option 1")}>Option 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleOptionClick("Option 2")}>Option 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleOptionClick("Option 3")}>Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                </Col>
            </Row>
        </Container>
        </>
    );
}

export default About;