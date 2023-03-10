import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Component21 from '../components/component21'
import Component4 from '../components/component4'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Sane Rotten Armadillo</title>
        <meta property="og:title" content="Home1 - Sane Rotten Armadillo" />
      </Helmet>
      <div className="home1-container01">
        <Link to="/dsadsadsa" className="home1-navlink">
          <div className="home1-container02"></div>
        </Link>
      </div>
      <span>Text</span>
      <div className="home1-container03">
        <li className="list-item">
          <span>Text</span>
        </li>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1678408007285-13b67e759417?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3ODQ1MDU1OA&amp;ixlib=rb-4.0.3&amp;w=200"
          className="home1-image"
        />
      </div>
      <div>
        <DangerousHTML
          html={`<div style="background: blue;"> hellow </div>`}
        ></DangerousHTML>
      </div>
      <iframe
        src="https://www.youtube.com/embed/DeQkMK5LME4"
        className="home1-iframe"
      ></iframe>
      <ul className="list">
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
      </ul>
      <div className="home1-container04">
        <form className="home1-form"></form>
        <input type="text" placeholder="placeholder" className="input" />
      </div>
      <textarea placeholder="placeholder" className="textarea"></textarea>
      <input type="checkbox" checked="true" />
      <input type="radio" name="radio" />
      <div data-thq="thq-dropdown" className="home1-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="home1-dropdown-toggle">
          <span className="home1-text06">Menu Item</span>
          <div data-thq="thq-dropdown-arrow" className="home1-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home1-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home1-dropdown-list">
          <li data-thq="thq-dropdown" className="home1-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home1-dropdown-toggle1"
            >
              <span className="home1-text07">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home1-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home1-dropdown-toggle2"
            >
              <span className="home1-text08">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home1-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home1-dropdown-toggle3"
            >
              <span className="home1-text09">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <header data-thq="thq-navbar" className="home1-navbar-interactive">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home1-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home1-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home1-nav"
          >
            <span>About</span>
            <span className="home1-text11">Features</span>
            <span className="home1-text12">Pricing</span>
            <span className="home1-text13">Team</span>
            <span className="home1-text14">Blog</span>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home1-btn-group">
          <button className="home1-login button">Login</button>
          <button className="button">Register</button>
        </div>
        <div data-thq="thq-burger-menu" className="home1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home1-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home1-nav1"
          >
            <div className="home1-container05">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home1-image1"
              />
              <div data-thq="thq-close-menu" className="home1-menu-close">
                <svg viewBox="0 0 1024 1024" className="home1-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home1-nav2"
            >
              <span className="home1-text15">About</span>
              <span className="home1-text16">Features</span>
              <span className="home1-text17">Pricing</span>
              <span className="home1-text18">Team</span>
              <span className="home1-text19">Blog</span>
            </nav>
            <div className="home1-container06">
              <button className="home1-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home1-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home1-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home1-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home1-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <button className="button">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="home1-image2"
        />
        <span>
          <span>Buttdsakuhd sa</span>
          <span className="home1-text22">ugudsauda</span>
          <span>on</span>
        </span>
      </button>
      <select>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home1-video"
      ></video>
      <Component21 rootClassName="component21-root-class-name1"></Component21>
      <Component4></Component4>
      <div className="home1-container07">
        <h1 className="home1-text24">
          <span>Headsaoij dsaihdsiuahiu hdsaiu hdsia</span>
          <br></br>
          <span>
            dsaiuhds iauhdshai
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home1-text28">udhsadsadincfdvfdg vfudbvfd</span>
          <br className="home1-text29"></br>
          <span className="home1-text30">
            dsaui dusaybu dsau
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>dusia.   iduhsai uhdsaiuh sda.    odisjadsag</span>
        </h1>
      </div>
      <img
        alt="image"
        src="/playground_assets/2022_mercedesbenz_eqs_0000-800h.jpeg"
        className="home1-image3"
      />
      <img
        alt="image"
        src="/playground_assets/settings%20%5B1%5D.svg"
        className="home1-image4"
      />
      <div className="home1-container08">
        <h1>Heading</h1>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1678406498046-78d787f6e12a?ixid=Mnw5MTMyMXwwfDF8YWxsfDExfHx8fHx8Mnx8MTY3ODQ1MDU1OA&amp;ixlib=rb-4.0.3&amp;h=1900"
        className="home1-image5"
      />
      <div className="home1-container09"></div>
    </div>
  )
}

export default Home1
