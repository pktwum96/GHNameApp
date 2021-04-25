import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialsBar } from './SocialAppsBar';

interface HomeProps {}
export const Home = (props: HomeProps) => {
    return (
        <>
            <div>
                <div className="my-4 text-center">
                    <h1>Ghanaian Name Generator</h1>
                    <p>Let's name you!</p>
                    <SocialsBar />
                </div>
                <p>
                    Ghanaian names (or personal names in Ghana)
                    consist of several given names and surnames based
                    on the language of ethnic groups in Ghana:
                    including Akan, Mole-Dagombas, Ga, Ewe and Nzema.
                    Frequently, children are given a "day name" which
                    corresponds to the day in the week when they were
                    born. These day names have further meanings
                    concerning the soul and character of the person.
                    Middle names have considerably more variety and
                    can refer to their birth order, twin status, or an
                    ancestor's middle name.
                </p>
                <p>
                    These names are also used among Ghanaians living
                    abroad and among Africans living in the diaspora
                    who wish to identify with their ancestral
                    homeland. During the 18th and 19th centuries, the
                    enslaved people from modern day Ghana in the
                    Caribbean were referred to as Coromantees. Most
                    day names among the Mole-Dagombas are usually
                    given to the females, and few are given to both
                    sexes. Most Ghanaians have at least one name from
                    this system, even if they also have an Arabic or
                    western name. Notable figures with day names
                    include Ghana's first president Kwame Nkrumah and
                    former United Nations Secretary General Kofi
                    Annan.
                </p>
                <div className="row text-center">
                    <div className="col-lg-6 my-2">
                        <Button>
                            <Link
                                className="nav-link"
                                style={{ color: 'inherit' }}
                                to="/random"
                            >
                                Generate Random Name
                            </Link>
                        </Button>
                    </div>
                    <div className="col-lg-6 my-2">
                        <Button className="btn btn-primary">
                            <Link
                                className="nav-link"
                                style={{ color: 'inherit' }}
                                to="/quiz"
                            >
                                Quiz to figure out Name
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
