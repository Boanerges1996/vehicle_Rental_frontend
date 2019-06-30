import React from 'react';
import './userprofilemodal.css';


export default function Userprofile(props){
    return (
        <div className="userprofilehead">
            <div className="userprofileavatar">
                <div className="profileavatar">
                    <img src={props.user_avatar_link} alt="useravatar" className="useravatarSty"/>

                </div>
                <div className="profileusername">
                    Welcome <br />
                    
                    <h6 className="second">{props.username}</h6>
                    <h6 className="first">Bermuda rentals</h6>
                </div>
            </div>
            <div className="userprofilecontent">
                <div className="profilesame">
                    &#xf007; View Profile
                </div>
                <div className="profilesame">
                    &#xf1de; Settings
                </div>
                <div className="profilesame">
                    <i class="fa fa-sign-out" />
                    Logout
                </div>
            </div>
        </div>
    )
}