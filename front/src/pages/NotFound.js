import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div id="notFound" className="page">
      <div>
        <h1>404 Not Found</h1>
        <Link to={"/"}>Revenir à l'accueil</Link>
      </div>
    </div>
  )
}
