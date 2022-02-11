import PropTypes from "prop-types"
import React from "react"

const Profile = (props) =>{
  const {fullName, bio, profession} = props
  const styleObeject = {
    color: 'green',
    textAlign: 'center'
  }
  const handleName = e => {
    e.preventDefault()
    alert(fullName)
  }
  return(
    <div style={styleObeject}>
      {props.children}
      <h3>Full Name:{fullName}</h3>
      <h3>Bio: {bio}</h3>
      <h3>Profession: {profession}</h3>
      <span onClick={handleName}>Click me</span>
    </div>
  )
}

Profile.defaultProps = {
  fullName: "Emilia Odoh",
  bio: "problem solving ",
  profession: "software developer"
};

Profile.propTypes = {
   numberProp: PropTypes.number,
   stringProp: PropTypes.string
}

console.log(Profile.PropTypes);


export default Profile



