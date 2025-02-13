import './Navbar.component.css';
import searchIcon from './../assets/search-icon.svg';
import opendoorLogo from './../assets/opendoor.logo.svg';

const NavbarComponent = () => {
  return (
    <>
      <header className="app-main-header">
        <div className="app-main-header-wrapper">
          <div className="app-main-header-content">
            <div className="app-main-header-logo">
              <a href="/" target="_blank">
                <img src={opendoorLogo} className="logo" alt="opendoor logo" />
              </a>
            </div>
            <div className="app-main-header-search">
              <button className="spacing-11-px">
                <img src={searchIcon} className="logo" alt="search icon" />
                <span>Search</span>
              </button>
              <a href="https://buy.opendoor.com/setup" target="_blank" tabIndex={0} className="spacing-11-px">
                Recommended listings
              </a>
            </div>
            <div className="app-main-header-links">
              <a href="https://www.opendoor.com" className="spacing-11-px">
                Also selling?
              </a>
              <a href="#" tabIndex={0} className="spacing-11-px">
                More
              </a>
              <ul className="app-main-header-links-more-list">
                <li>
                  <a href="https://www.opendoor.com/w/about" role="link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/stories" role="link">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/reviews" role="link">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/faq" role="link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/jobs" role="link">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/resources" role="link">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/trusted-lenders" role="link">
                    Lenders
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/blog" role="link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/agents" role="link">
                    Agents
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/vendor-partnerships" role="link">
                    Vendors
                  </a>
                </li>
                <li>
                  <a href="https://www.opendoor.com/w/contact-us" role="link">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="spacing-11-px">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
