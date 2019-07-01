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
            }
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

    //Validation function
    validateFirst=()=>{
        let re = /^[a-zA-Z]+$/
        if (this.state.firstname.length===0){
            return false
        }
        else if(this.state.firstname.length>0){
            return re.test(this.state.firstname)
        }
        
    }
    validateLast=()=>{
        let re = /^[a-zA-Z]+$/
        if(this.state.lastname.length===0){
            return false
        }
        else if (this.state.lastname.length>0){
            return re.test(this.state.lastname)
        }
    }
    validateUsername=()=>{
        let re = /^[a-zA-Z]+$/
        if(this.state.username===0){
            return false
        }
        else if(this.state.username.length>0){
            return re.test(this.state.username)
        }
    }
    validateTelephone=()=>{
        let re = /^[0-9]+$/
        if(this.state.telephone.telephone.length===0){
            return false
        }
        else if (this.state.telephone.length>0){
            return re.test(this.state.telephone)
        }
    }
    validateEmail =()=>{
        if(this.state.email.length===0){
            return false
        }
    }
    validatePassword = ()=>{
        if(this.state.password.length===0){
            return false
        }
        else if(this.state.password.length>0){
            if (this.state.password===this.state.confirm){
                return true
            }
            else{
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
            telephone:this.state.telephone,
            email:this.state.email,
            password:this.state.password
        }
        if((this.validateFirst()) && (this.validateLast()) && (this.validatePassword())){
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
        let message = null;

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
                                error={this.state.Error.firtnameError}
                                pattern={"[a-zA-Z]+"}
                                className="firstnameError"
                                />
                                {message}
                                
                
                                <Form.Input fluid label="lastname" 
                                placeholder="lastname..." 
                                required
                                onChange={this.changeLastname}
                                name="lastname"
                                value={this.state.lastname}
                                error={this.state.Error.lastnameError}
                                pattern={"[a-zA-Z]+"}
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
                                error={this.state.Error.othernamesError}
                                required
                                />
                                <Form.Input fluid label="telephone" 
                                placeholder="telephone" 
                                required
                                onChange={this.changeTelephone}
                                name="telephone"
                                value={this.state.telephone}
                                error={this.state.Error.telephoneError}
                                pattern={"[0-9]+$"}
                                className="telephoneError"
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="email" 
                                placeholder="email..." 
                                type="email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                error={this.state.Error.emailError}
                                name="email"
                                title="invalid email"/>    
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="password" 
                                placeholder="password..." 
                                required 
                                type="password"
                                onChange={this.changePassword}
                                name="password"
                                value={this.state.password}
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="confirm password" 
                                placeholder="confirm password" 
                                required 
                                type="password"
                                onChange={this.changeConfirm}
                                name="confirm"
                                value={this.state.confirm}
                                error={this.state.Error.confirmError}
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