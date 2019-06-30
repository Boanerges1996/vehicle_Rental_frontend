import React from 'react';
import './menulist.css';


export default function Menulist(props){
    return(
        <div className="menulist">
            <div className="menulistcontent">
                Vehicle
            </div>
            <div className="menulistcontent">
                Vehicle Registration
            </div>
            <div className="menulistcontent">
                Drivers
            </div>
            <div className="menulistcontent">
                Drivers Registration
            </div>
        </div>
    )
}

