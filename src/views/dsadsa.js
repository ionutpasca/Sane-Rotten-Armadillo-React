import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Component2 from '../components/component2'
import Component1 from '../components/component1'
import Component21 from '../components/component21'
import Component4 from '../components/component4'
import './dsadsa.css'

const Dsadsa = (props) => {
  return (
    <div className="dsadsa-container">
      <Helmet>
        <title>vfdvfdvfd</title>
        <meta name="description" content="vfdoijhds aihdoisadsa" />
        <meta property="og:title" content="vfdvfdiuhvfiud" />
        <meta
          property="og:description"
          content="idhnsaiundsiauo doisjadsadsa"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-assets-qa_/6447513b-593b-4a9c-a682-ab1fed7f9664/7cc9813d-80aa-4471-8640-445b181eee3a?org_if_sml=1"
        />
      </Helmet>
      <a href="#xxxx" className="dsadsa-link">
        <div className="dsadsa-container1"></div>
      </a>
      <span>Text</span>
      <div className="dsadsa-container2">
        <li className="list-item">
          <span>Text</span>
        </li>
      </div>
      <div>
        <DangerousHTML
          html={`<div style="background: blue;"> hellow </div>`}
        ></DangerousHTML>
      </div>
      <iframe
        src="https://www.youtube.com/embed/DeQkMK5LME4"
        className="dsadsa-iframe"
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
      <Component2 rootClassName="component2-root-class-name"></Component2>
      <Component1 rootClassName="component1-root-class-name"></Component1>
      <div className="dsadsa-container3">
        <form className="dsadsa-form"></form>
        <input type="text" placeholder="placeholder" className="input" />
      </div>
      <textarea placeholder="placeholder" className="textarea"></textarea>
      <input type="checkbox" checked="true" />
      <input type="radio" name="radio" />
      <div data-thq="thq-dropdown" className="dsadsa-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="dsadsa-dropdown-toggle">
          <span className="dsadsa-text06">Menu Item</span>
          <div data-thq="thq-dropdown-arrow" className="dsadsa-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="dsadsa-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="dsadsa-dropdown-list">
          <li data-thq="thq-dropdown" className="dsadsa-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="dsadsa-dropdown-toggle1"
            >
              <span className="dsadsa-text07">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="dsadsa-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="dsadsa-dropdown-toggle2"
            >
              <span className="dsadsa-text08">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="dsadsa-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="dsadsa-dropdown-toggle3"
            >
              <span className="dsadsa-text09">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <header data-thq="thq-navbar" className="dsadsa-navbar-interactive">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="dsadsa-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="dsadsa-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="dsadsa-nav"
          >
            <span>About</span>
            <span className="dsadsa-text11">Features</span>
            <span className="dsadsa-text12">Pricing</span>
            <span className="dsadsa-text13">Team</span>
            <span className="dsadsa-text14">Blog</span>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="dsadsa-btn-group">
          <button className="dsadsa-login button">Login</button>
          <button className="button">Register</button>
        </div>
        <div data-thq="thq-burger-menu" className="dsadsa-burger-menu">
          <svg viewBox="0 0 1024 1024" className="dsadsa-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="dsadsa-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="dsadsa-nav1"
          >
            <div className="dsadsa-container4">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="dsadsa-image"
              />
              <div data-thq="thq-close-menu" className="dsadsa-menu-close">
                <svg viewBox="0 0 1024 1024" className="dsadsa-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="dsadsa-nav2"
            >
              <span className="dsadsa-text15">About</span>
              <span className="dsadsa-text16">Features</span>
              <span className="dsadsa-text17">Pricing</span>
              <span className="dsadsa-text18">Team</span>
              <span className="dsadsa-text19">Blog</span>
            </nav>
            <div className="dsadsa-container5">
              <button className="dsadsa-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="dsadsa-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="dsadsa-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="dsadsa-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="dsadsa-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <button className="button">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="dsadsa-image1"
        />
        <span>
          <span>Buttdsakuhd sa</span>
          <span className="dsadsa-text22">ugudsauda</span>
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
        className="dsadsa-video"
      ></video>
      <Component21 rootClassName="component21-root-class-name"></Component21>
      <Component4></Component4>
      <div className="dsadsa-container6">
        <h1 className="dsadsa-text24">
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
          <span className="dsadsa-text28">udhsadsadincfdvfdg vfudbvfd</span>
          <br className="dsadsa-text29"></br>
          <span className="dsadsa-text30">
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
        className="dsadsa-image2"
      />
      <img
        alt="image"
        src="/playground_assets/settings%20%5B1%5D.svg"
        className="dsadsa-image3"
      />
      <div className="dsadsa-container7">
        <h1>Heading</h1>
      </div>
    </div>
  )
}

export default Dsadsa
