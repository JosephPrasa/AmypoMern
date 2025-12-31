import React from 'react'

const NewsItem = (p) => {
  return (
    <div style={{
        border: '1px solid gray',
        padding: '10px',
        cursor: 'pointer'
    }}>
        <h3>{p.title}</h3>
        <img src={p.image|| 'https://placehold.co/200x300'} style={{width: '100%', height:'220px', objectFit: 'cover'}}/>
        <p>{p.description || 'No Description Sorry!!'}</p>
        <a href={p.url}>{p.url}</a>
    </div>
  )
}

export default NewsItem