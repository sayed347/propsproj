import React from 'react'
import PropTypes from "prop-types";
const Profile =(props)=>{
props.handleName()
    return (<div>
    {props.children}
    <h1>{props.data.fullName}</h1>
    <h1>{props.data.bio}</h1>
    <h1>{props.data.profession}</h1>
    
    </div>)
   
    
}
export default Profile;
Profile.defaultProps={
    data:"sa",
    
   
};
Profile.propTypes={
    data:PropTypes.string,
    handleName:PropTypes.func

};