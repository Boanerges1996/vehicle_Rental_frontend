import React from 'react';
import './signup.css';
import {Form ,Label,Button,Input} from 'semantic-ui-react';
import {connect} from "react-redux";



class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            lastname:"",
            username:"",
            telephone:"",
            email:"",
            password:"",
            confirm:"",
            Error:{
                firtnameError:false,
                lastnameError:false,
                othernamesError:false,
                usernameError:false,
                telephoneError:false,
                emailError:false,
                passwordError:false,
                confirmError:false,
                passwordMatchError:false
            },

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeFirstname = this.changeFirstname.bind(this)
        this.changeLastname = this.changeLastname.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeConfirm = this.changeConfirm.bind(this)
        this.validateFirst = this.validateFirst.bind(this)
        this.validateLast = this.validateLast.bind(this)

    }
    changeFirstname=e=>{
        // if (e.target.value.length===0){
        //     e.target.setCustomValidity("Please this field is required")
        // }
        this.setState({
            firstname:e.target.value
        })
    }
    changeLastname=e=>{
        this.setState({
            lastname:e.target.value
        })
    }

    changeUsername=e=>{
        this.setState({
            username:e.target.value
        })
    }
    changeTelephone=e=>{
        this.setState({
            telephone:e.target.value
        })
    }
    changeEmail=e=>{
        this.setState({
            email:e.target.value
        })   
    }
    changePassword=e=>{
        this.setState({
            password:e.target.value
        })
    }
    changeConfirm=e=>{
        this.setState({
            confirm:e.target.value
        })
    }

// This part works on validating the input before submission to the API
// Validate FIRSTNAME
    validateFirst=()=>{
        let re = /^[a-zA-Z]+$/
        if (this.state.firstname.length===0){
            return false
        }
        else if(this.state.firstname.length>0){
            return re.test(this.state.firstname)
        }
        
    }

// Validate LASTNAME
    validateLast=()=>{
        let re = /^[a-zA-Z]+$/
        if(this.state.lastname.length===0){
            return false
        }
        else if (this.state.lastname.length>0){
            return re.test(this.state.lastname)
        }
    }

// Validate USERNAME
    validateUsername=()=>{
        let re = /^[a-zA-Z]+$/
        if(this.state.username.length===0){
            return false
        }
        else if(this.state.username.length>0){
            return re.test(this.state.username)
        }
    }

// Validate TELEPHONE NUMBER
    validateTelephone=()=>{
        let re = /^[0-9]+$/
        if(this.state.telephone.length===0){
            return false
        }
        else if (this.state.telephone.length>0){
            return re.test(this.state.telephone)
        }
    }


// Validate EMAIL
    validateEmail =()=>{
        if(this.state.email.length===0){
            return true
        }
        else if(this.state.email.length>0){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(this.state.email)
        }
    }

// Validate PASSWORD
    validatePassword = ()=>{
        if(this.state.password.length===0){
            return false
        }
        else if(this.state.password.length>0){
            if (this.state.password===this.state.confirm){
                this.setState({
                    Error:{
                        passwordMatchError:false
                    }
                })
                return true
            }
            else{
                this.setState({
                    Error:{
                        passwordMatchError:true
                    }
                })
                return false
            }
        }
    }


    //This handles the form submission but first validates before it
    handleSubmit=(e)=>{
        let data = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            username:this.state.username,
            othername:"",
            telephone:this.state.telephone,
            email:this.state.email,
            password:this.state.password
        }
        if((this.validateFirst()) && (this.validateLast()) && (this.validateUsername()) && (this.validateTelephone())&&(this.validateEmail()) && (this.validatePassword())){
            console.log(data)
        }
        else{
            console.log('Invalid data')
        }
        
    }
    invalidname=(message)=>{
        message=<h6>hello</h6>
    }
   
    render(){
        let passwordVal = null;
        if(this.state.Error.passwordMatchError){
            passwordVal = <span>password Mismatch</span>
        }
        else{
            passwordVal = null
        }

        return(
            <div className="wholesignup">
                <Label as="div" className="signupsizing">
                    <div className="signupheader">
                        <img src={this.props.logo}  alt="Bermuda Rental" size="1" className="Loginlogostyle"/><br />
                        <Label size="massive">
                            Bermuda Rentals
                            <h5>Sign up to enjoy our wonderful vehicle rental services</h5>
                        </Label>
                        
                    </div>
                    <div className="signupinput">
                        <Form as="form" onSubmit={this.handleSubmit}>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="firstname"
                                placeholder="firstname..." 
                                required  
                                onChange={this.changeFirstname}
                                name="firstname"
                                value={this.state.firtname}
                                pattern={"[a-zA-Z]+"}
                                className="firstnameError"
                                />
                
                                <Form.Input fluid label="lastname" 
                                placeholder="lastname..." 
                                required
                                onChange={this.changeLastname}
                                name="lastname"
                                value={this.state.lastname}
                                title="firtsname require"
                                className="lastnameError"
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input fluid label="username" 
                                placeholder="username..." 
                                onChange={this.changeUsername}
                                name="othernames"
                                value={this.state.username}
                                required
                                />
                                <Form.Input fluid label="telephone" 
                                placeholder="telephone" 
                                required
                                onChange={this.changeTelephone}
                                name="telephone"
                                value={this.state.telephone}
                                className="telephoneError"
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="email" 
                                placeholder="email..." 
                                type="email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                title="invalid email"
                                className="signemail"
                                required
                                />    
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="password" 
                                placeholder="password..." 
                                required 
                                type="password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="passwordVal"
                                />
                                {passwordVal}
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="confirm password" 
                                placeholder="confirm password" 
                                required 
                                type="password"
                                onChange={this.changeConfirm}
                                name="confirm"
                                value={this.state.confirm}
                                />
                            </Form.Group>
                           
                        </Form>
                        <br/>
                        <Button className="loginbutton" 
                        color="green" 
                        onClick={this.handleSubmit}>Signup</Button> <br/><br/>
                        <span>login if registered to rent a vehicle</span>
                        
                    </div>

                </Label>

            </div>
        )
    }
}

const mapStoreToProp = state =>{
    return {
        logo:state.logo
    }
}
export default connect(mapStoreToProp)(Signup);