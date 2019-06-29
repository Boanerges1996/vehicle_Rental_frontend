import React from 'react';
import './header.css';
import { Image, Button } from 'semantic-ui-react';


export default class Header extends React.Component{
    render(){
        return(
            <div className="userpageheader">
                <div className="userpagelogo">

                </div>
                <div className="userpagelinks">
                    <Button.Group size="large" color="black" fluid compact>
                        <Button compact>Vehicles</Button>
                        <Button compact>Vehicle Registration</Button>
                        <Button compact>Drivers</Button>
                        <Button compact>Driver Registration</Button>
                    </Button.Group>

                </div>
                <div className="useravatar">
                    <Image src={require('./avatar.jpg')} alt="useravatar" circular className="useravatarstyle"/>

                </div>
            </div>
        )
    }
}