import React from "react";
import PropTypes from "prop-types";
const styleObject={color:"blue",textAlign:'center'}

const Profile = (props) => {
    return <div style={styleObject}>
        <h1>name : {props.fullName}</h1>

        <h2>profession :{props.profession}</h2>

        <h2>bio : {props.bio}</h2>
        <h2>location : {props.location}</h2>
       <div >{props.cheldren}</div>
       <button onClick={props.f}>START</button>
    </div>
};

Profile.defaultProps = {
    fullName: "hafedh", profession: "student", bio: "web", location: "tunis" , f: () =>{return alert("enter your name")}}
    Profile.propTypes = {
        fullName: PropTypes.string,
        profession: PropTypes.string,
        bio: PropTypes.string,
        location: PropTypes.string,
        f: PropTypes.func
       };
export default Profile;