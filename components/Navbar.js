
import Link from "next/link"
import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav classname="navbar navbar-expand-lg bg-light">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">
      Navbar
    </a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon">
      </span></button>
    <div classname="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">
            Link
          </a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form classname="d-flex" role="search">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classname="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  </>
  )
}


