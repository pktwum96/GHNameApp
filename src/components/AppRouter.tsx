import React from 'react';
import { Container } from 'react-bootstrap';
import { Home } from './Homepage';
import { NavigationBar } from './Nav';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Questions } from './Questions';
import { LearnMore } from './LearningPage';
import { RandomName } from './randomName';
import { SocialsModal } from './SocialsModal';

export const AppRouter = () => {
    interface stateType {
        showModal: boolean;
    }

    const { pathname } = useLocation<stateType>();
    const [show, setShow] = React.useState(
        pathname.includes('share'),
    );

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    return (
        <div>
            <NavigationBar handleShow={handleShow} />
            <Container className="col-lg-9">
                <Switch>
                    <Route
                        exact
                        path={['/', '/home', '/homepage', '/share']}
                        component={Home}
                    />
                    <Route path="/resultName" component={Questions} />
                    <Route path="/learn" component={LearnMore} />

                    <Route path="/random" component={RandomName} />

                    {/*TODO: Create 404 page*/}
                    <Route>{'404 Page Not Found'}</Route>
                </Switch>
                <SocialsModal show={show} handleClose={handleClose} />
            </Container>
        </div>
    );
};
