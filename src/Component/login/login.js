import React from 'react';
import './login.css';
import { Label, Form, Input ,Image, Header, Button} from 'semantic-ui-react';






class Login extends React.Component{
    render(){
        return(
            <div className="wholelogin">

                <Label as="div" className="mysizing">
                    <div className="loginheader">
                        <img src={require("./logo.png")}  alt="Bermuda Rental" size="1" className="Loginlogostyle"/><br />
                        <Label size="massive">
                            Bermuda Rentals
                            <h5>Login to enjoy our wonderful vehicle rental service</h5>
                        </Label>
                        
                    </div>
                    <div className="logininput">
                        <Form>
                            <Form.Field width='10'>
                                <Label>Username</Label>
                                <Input placeholder="Username..." size="tiny" className="logininputsize"/>
                            </Form.Field>
                            <Form.Field width='10'>
                                <Label>Passowrd</Label>
                                <Input placeholder="password..." size="tiny" className="logininputsize"/>
                            </Form.Field>
                        </Form>
                        <br/>
                        <Button className="loginbutton" color="green">Login</Button> <br/><br/>
                        <span>sign up to enjoy if not registered</span>
                        
                    </div>

                </Label>
                
            </div>

        )
    }
}
export default Login;