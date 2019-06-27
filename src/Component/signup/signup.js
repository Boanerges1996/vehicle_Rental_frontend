import React from 'react';
import './signup.css';
import {Form ,Label,Button,Input} from 'semantic-ui-react';



class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firtname:"",
            lastname:"",
            othernames:"",
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
                passwordMatch:false
            }
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.changeFirstname = this.changeFirstname.bind(this)
        this.changeLastname = this.changeLastname.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeOthername = this.changeOthername.bind(this)
        this.changeTelephone = this.changeTelephone.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeConfirm = this.changeConfirm.bind(this)

    }
    changeFirstname=e=>{
        this.setState({
            firtname:e.target.value
        })
    }
    changeLastname=e=>{
        this.setState({
            lastname:e.target.value
        })
    }
    changeOthername=e=>{
        this.setState({
            othernames:e.target.value
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

    ha
   
    render(){
        return(
            <div className="wholesignup">
                <Label as="div" className="signupsizing">
                    <div className="signupheader">
                        <img src={require("./logo.png")}  alt="Bermuda Rental" size="1" className="Loginlogostyle"/><br />
                        <Label size="massive">
                            Bermuda Rentals
                            <h5>Sign up to enjoy our wonderful vehicle rental services</h5>
                        </Label>
                        
                    </div>
                    <div className="signupinput">
                        <Form as="form" onSubmit={this.handleSubmit}>
                            <Form.Group widths="equal">
                                <Input fluid label="firtname" 
                                placeholder="firstname..." 
                                required  
                                onChange={this.changeFirstname}
                                name="firstname"
                                value={this.state.firtname}
                                error={this.state.Error.firtnameError}
                                />
                
                                <Form.Input fluid label="lastname" 
                                placeholder="lastname..." 
                                required
                                onChange={this.changeLastname}
                                name="lastname"
                                value={this.state.lastname}
                                error={this.state.Error.lastnameError}
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input fluid label="othernames" 
                                placeholder="othernames..." 
                                onChange={this.changeOthername}
                                name="othernames"
                                value={this.state.othernames}
                                error={this.state.Error.othernamesError}
                                />
                                <Form.Input fluid label="telephone" 
                                placeholder="telephone" 
                                required
                                onChange={this.changeTelephone}
                                name="telephone"
                                value={this.state.telephone}
                                error={this.state.Error.telephoneError}
                                />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="email" 
                                placeholder="email..." 
                                type="email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                error={this.state.Error.emailError}
                                name="email"/>    
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Input fluid label="password" 
                                placeholder="password..." 
                                required 
                                type="password"
                                onChange={this.changePassword}
                                name="password"
                                value={this.state.password}
                                error={this.state.Error.passwordError}
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
                        <Button className="loginbutton" color="green" onClick={this.handleSubmit}>Signup</Button> <br/><br/>
                        <span>login if registered to rent a vehicle</span>
                        
                    </div>

                </Label>

            </div>
        )
    }
}
export default Signup;