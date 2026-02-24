import './styles/app.css'
import verification from './assets/icon/verification.svg'

import HTML from './assets/icon/html.svg'
import CSS from './assets/icon/css.svg'
import SCSS from './assets/icon/scss.svg'
import Rest from './assets/icon/rest-api.svg'
import Kubernetes from './assets/icon/kubernetes.svg'
import JS from './assets/icon/js.svg'
import React from './assets/icon/science.svg'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <div className="banner"></div>
          <div className="avatar"></div>
        </header>
        <main>
          <section className='title'>
            <h1>Dmytro
              <img src={verification} alt="verification" />
            </h1>
            <h3>Front-end Developer</h3>
          </section>
          <section className='stacks'>
            <img src={HTML} alt="html" />
            <img src={CSS} alt="css" style={{ fill: "#ce6161" }} />
            <img src={SCSS} alt="scss" />
            <img src={Rest} alt="rest" />
            <img src={Kubernetes} alt="kubernetes" />
            <img src={JS} alt="js" />
            <img src={React} alt="react" />
          </section>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud
            exercitation ullamco</p>
        </main>
      </div>
    </>
  )
}

export default App
