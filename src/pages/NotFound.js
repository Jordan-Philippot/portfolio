import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {



  useEffect(() => {

  }, [])



  return (
    <div id="notFound" className="page">
      <div class="board">
        <p id="error">
          error
        </p>
        <p id="code">
          404
        </p>
        <Link to={"/"}>Revenir à l'accueil</Link>

      </div>
    </div>
  )
}
