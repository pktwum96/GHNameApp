import React from 'react';
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Modal,
} from 'react-bootstrap';
import { SocialsBar } from './socialbar';

interface SocialsModalProps {
    show: boolean;
    handleClose: () => void;
}
export const SocialsModal = (props: SocialsModalProps) => {
    const { show, handleClose } = props;
    const copyToClipBoard = () => {
        /* Get the text field */
        var copyText = document.getElementById(
            'website-URL-input',
        ) as HTMLInputElement;
        if (copyText) {
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(
                0,
                99999,
            ); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand('copy');
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="m-auto">
                        <h3>Share</h3>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-center">
                    <Container>
                        <p>
                            Share with your friends on your favourite
                            social media platform:
                        </p>
                        <SocialsBar />
                        <p className="mt-3">
                            Or copy the link below to share
                        </p>
                        <InputGroup className="mb-3">
                            <FormControl
                                defaultValue={window.location.origin}
                                readOnly={true}
                                id={'website-URL-input'}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button
                                    variant="outline-secondary"
                                    onClick={copyToClipBoard}
                                >
                                    <i className="bi bi-clipboard"></i>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className="m-auto"
                        variant="primary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
