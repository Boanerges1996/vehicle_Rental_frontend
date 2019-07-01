import React from 'react';
import Header from './Header/header';
import Userprofile from './Header/userprofilemodal';
import Menulist from './Header/meulist/menulist';
import Vehiclepage from './Vehiclepage/Vehiclepage';

export default class Userpage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showProfileModal:false,
            showMenulist:false
        }
        this.showProfile = this.showProfile.bind(this)
        this.showMenu = this.showMenu.bind(this)
    }
    showProfile = ()=>{
        let toggle = this.state.showProfileModal
        this.setState({
            showProfileModal:!toggle,
            showMenulist:false
        })
    }
    showMenu = ()=>{
        let toggle = this.state.showMenulist
        this.setState({
            showProfileModal:false,
            showMenulist:!toggle
        })
    }
    render(){
        let userProfileModal = null
        let menuList = null
        if (this.state.showProfileModal){
            userProfileModal = <Userprofile user_avatar_link={require('./Header/avatar.jpg')} username={"Roberta"}/>
        }
        if(this.state.showMenulist){
            menuList = <Menulist />
        }
        return(
            <div>
                <Header clickAvatar={this.showProfile} clickToShowMenu={this.showMenu}/>
                {userProfileModal}
                {menuList}
                <Vehiclepage />
            </div>
        )
    }
}