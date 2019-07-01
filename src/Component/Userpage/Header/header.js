import React from 'react';
import './header.css';
import { Image, Button } from 'semantic-ui-react';
import Userprofile from './userprofilemodal';
import {connect} from "react-redux";


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="userpageheader">
                {/* This only works when the width is below 645px the list*/} 
                <div className="menuAt645" onClick={this.props.clickToShowMenu}>
                    &#xf0c9;
                </div>
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
               {/* This only works when the width is below 645px LOGO*/} 
                <div className="logoAt645">
                    <Image src={this.props.logo} alt="logoAt645" className="logoAt645Style"/>
                    <h6>Bermuda rentals</h6>
                </div>
                <div className="useravatar">
                    <Image src={this.props.userAvatar} alt="useravatar" circular className="useravatarstyle" onClick={this.props.clickAvatar}/>

                </div>
                {/* <Userprofile /> */}
            </div>
        )
    }
}


const mapStoreToProps = state =>{
    return {
        userAvatar: state.userAvatar,
        logo:state.logo
    }
}

export default connect(mapStoreToProps)(Header)