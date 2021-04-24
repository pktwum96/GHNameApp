import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Home } from './components/Homepage';
import NavigationBar from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container>
                    <Home />
                </Container>
            </div>
        );
    }
}

export default App;
