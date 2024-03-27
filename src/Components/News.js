import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
        <div>
            <div className='container'>
                <h2>Heading</h2>
                <div className='row'>
                    <div className='col-md-4'>
                    <NewsItems title="News" description="This is the news"/>
                    </div>
                    <div className='col-md-4'>
                    <NewsItems title="News" description="This is the news"/>
                    </div>
                    <div className='col-md-4'>
                    <NewsItems title="News" description="This is the news"/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
  }
}

export default News