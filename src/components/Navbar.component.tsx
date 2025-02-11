import opendoorLogo from './../assets/opendoor.logo.svg';
import searchIcon from './../assets/search-icon.svg';

const NavbarComponent = () => {
  return (
    <>
      <header style={{ display: 'block', boxShadow: '0 1px 4px rgba(68,89,109,.15)', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <div>
              <a href="/" target="_blank">
                <img src={opendoorLogo} className="logo" alt="opendoor logo" />
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
            <li>
              <button>
                <div>
                  <img src={searchIcon} className="logo" alt="search icon" />
                </div>
                <span>Search</span>
              </button>
            </li>
            <li>
              <a href="https://buy.opendoor.com/setup" target="_blank" tabIndex={0}>
                Recommended listings
              </a>
              <div>
                <div></div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <ul style={{ listStyle: 'none', display: 'none' }}>
              <li>
                <a href="https://www.opendoor.com">Also selling?</a>
              </li>
              <li>
                <a href="#" tabIndex={0}>
                  More
                </a>
                <ul>
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
              </li>
            </ul>
            <button>Sign In</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
