import { NavLink, Outlet } from 'react-router-dom';

export const activeLinkHelper = ({ isActive }) => (isActive ? 'rr rr--active' : 'rr rr--inactive');

const Layout = () => {
  return (
    <>
      <nav className="db-nav ">
        <div className="db-nav__container wiggle-helper">
          <div>
            <h2 className="db__h2">React Cocktails</h2>
          </div>
          <div className="db-nav__links-c">
            <NavLink className={activeLinkHelper} to="">
              Home
            </NavLink>
            <NavLink className={activeLinkHelper} to="about">
              About
            </NavLink>
          </div>
        </div>
      </nav>
      <section className="main">
        <Outlet />
      </section>
      <footer className="db__footer">Footer</footer>
    </>
  );
};

export default Layout;
