import React from "react"
import { Link } from "gatsby"

import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function thanks() {
  return (
    <div>
      <SEO title="Not so great purchase!" />

      <Purchase>
        <h2>Purchase Cancelled.</h2>
        <p>We're sorry you had to do that.</p>
        <p>Anyway, hope to see you again!</p>
        <span rol="img" aria-label="emoji">
          🙌
        </span>

        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
