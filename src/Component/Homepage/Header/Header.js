import React from 'react';
import './Header.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import {Icon,Button,Image, Label } from "semantic-ui-react";
import {Link} from "react-router-dom";




class Header extends React.Component{
    componentDidMount(){
        this.myFunc()
    }
    state={
        images : image1,
        imageCollection: [image1,image2,image3,image4],
        count:0
    }
    myFunc =()=>{
        
        setTimeout(()=>{
            this.setState(
                {
                    images:this.state.imageCollection[this.state.count]
                }
            )
            this.state.count++
            if(this.state.count<5){
                if(this.state.count===4){
                    this.state.count=0
                    this.myFunc()
                }
                else this.myFunc()
            }
        },3000)
    }
   
    render(){
        
        return(
            <div className="Header">
                <div className="mainHeader">
                    <Link to="/login"><Button floated="right" content="Login" inverted/></Link>
                    <Link to="/signup"><Button floated="right" content="Signup" inverted/></Link>
                    <Button.Group floated="left" inverted>
                        <Link to="/"><Button inverted>Home</Button></Link>
                        
                        <Button inverted>About Us</Button>
                        <Button inverted>Mission</Button>
                    </Button.Group>
                </div>
                <Image src={this.state.images} alt="Boanerges" className="Headerimg"/>               
            </div>
        )
    }
}
export default Header;