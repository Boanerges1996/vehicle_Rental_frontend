import React from 'react';
import Header from './Header/Header';
import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';

export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <FontAwesomeIcon icon="coffee" />
                <Header />
            </div>
        )
    }
}
