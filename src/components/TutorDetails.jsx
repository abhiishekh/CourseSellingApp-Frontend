import React from 'react'

const TutorDetails = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>{props.email}</p>
      <p>{props.created_courses}</p>
    </div>
  )
}

export default TutorDetails
