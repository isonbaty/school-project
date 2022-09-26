import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/fconfig';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <nav>
      <h2>ElSchool</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {user ? (
          <h4>{user.email}</h4>
        ) : (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}

        <li>
          <button onClick={logout}>SignOut</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
