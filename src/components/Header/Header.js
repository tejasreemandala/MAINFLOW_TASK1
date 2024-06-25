import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';

export default function Header() {
  const user = {
    name: 'Nasir JD',
  };

  const cart = {
    totalCount: 10,
  };

  const logout = () => {};

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Food MIne!
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <button onClick={logout}>Logout</button>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && <span>{cart.totalCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}