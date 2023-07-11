import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaTrowel } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTrowel></FaTrowel>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>


    );
};

export default RightSideNav;