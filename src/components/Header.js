import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Header: LitGuideBerlin</h1>
      <nav className="register">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/authors">
          <button>Authors</button>
        </NavLink>
        <NavLink to="/museums">
          <button>Museums</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </nav>
    </header>
  );
}
