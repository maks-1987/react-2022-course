import React from 'react'
import {Link} from 'react-router-dom'

// type Props = {}

export default function Missing() {
  return (
    <main className='missing'>
      <h2>Page not found</h2>
      <p><Link to='/'>Visit our homepage</Link></p>
    </main>
  )
}