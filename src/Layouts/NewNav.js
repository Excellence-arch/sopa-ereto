import React from 'react'
import Link from 'react-rounter-dom'

const NewNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-pays">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="NevBank">
            <img src={logo} />{' '}
            <span className="text-muted" style={{ fontSize: '15', fontWeight: '500' }}>
              <span className="text-blue">Sopa-</span>
              <span className="text-danger">Ereto</span>
            </span>
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NewNav