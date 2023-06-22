import React from 'react'

// Code Obselette, ne fonctionne plus sur react.
// Il faut utilisé Helmet
const Head = (content, title) => (
    <head>
    
    
    <meta name="description" content={content} />
    <title>{title}</title>
  </head>
)

export default Head