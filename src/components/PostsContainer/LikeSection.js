import React from 'react';

const LikeSection = props => {

  console.log("this is likes section", props)

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
          <i onClick={() => { props.raiseLikes() }} className="btn far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="btn far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
     {props.like} likes</p>
</div>
  )
};

export default LikeSection;
