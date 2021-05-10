import React from 'react'

function UserHeader() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm" style={{"backgroundColor": "cornflowerblue","color": "cornsilk"}}>
          <span className="navbar-brand" href="#">UMA</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/user/list" style={{"backgroundColor": "cornflowerblue","color": "cornsilk"}}>User</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default UserHeader
