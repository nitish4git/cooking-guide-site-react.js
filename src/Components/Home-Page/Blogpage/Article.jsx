import React from 'react'
import '../Blogpage/Article.css'
import user from '../../../assets/Featured-page/profile.png'
const Article = (props) => {
  return (
    <>
      <div className="article-container">
        <div className="article-image">
          <img src={props.thumbnail} alt="thumbnail" />
        </div>
        <div className="article-info">
          <div className="article-heading">
            <h1>
              {props.name}
            </h1>
            <p>
            {props.discription}
            </p>
          </div>
          <div className="tutor-info">
            <img src={user} alt="" />
            <h4>{props.tutor}</h4>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article