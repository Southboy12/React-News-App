import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://nypost.com/wp-content/uploads/sites/2/2024/03/175-million-reduction-nearly-62-79013090_931462.jpg?quality=75&strip=all&w=1024" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems 