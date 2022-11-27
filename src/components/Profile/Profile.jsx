import React, {Component} from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Address from '../Address/Address'
import Name from '../Name/Name'
import Email from '../Email/Email'

export default class Profile extends Component{
    render(){
        return(
            <>
            <Name/>
            <PersonalInfo/>
            <Address/>
            <Email/>
            </>
        )
    }
}