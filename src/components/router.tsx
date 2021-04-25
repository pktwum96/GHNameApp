import React from 'react';
import { Container } from 'react-bootstrap';
import { Home } from './Homepage';
import { NavigationBar } from './Nav';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Questions } from './Questions';
import { LearnMore } from './LearningPage';
import { RandomName } from './randomName';

export const AppRouter = () => {
    interface stateType {
        showModal: boolean;
    }

    const { state, pathname } = useLocation<stateType>();
    const [show, setShow] = React.useState(
        state?.showModal || pathname.includes('share'),
    );

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    return (
        <div>
            <NavigationBar handleShow={handleShow} />
            <Container>
                <Switch>
                    <Route
                        exact
                        path={['/', '/home', '/share']}
                        render={() => {
                            return (
                                <Home
                                    show={show}
                                    handleClose={handleClose}
                                />
                            );
                        }}
                    />
                    <Route
                        exact
                        path="/resultName"
                        component={Questions}
                    />
                    <Route
                        exact
                        path="/learn"
                        component={LearnMore}
                    />

                    <Route
                        exact
                        path="/random"
                        component={RandomName}
                    />

                    {/*TODO: Create 404 page*/}
                    <Route>{'404 Page Not Found'}</Route>
                </Switch>
            </Container>
        </div>
    );
};
