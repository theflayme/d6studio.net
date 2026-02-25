import './styles/app.css'
import Verification from './assets/icon/verification.svg?react'

import HTML from './assets/icon/html.svg?react'
import CSS from './assets/icon/css.svg?react'
import SCSS from './assets/icon/scss.svg?react'
import Rest from './assets/icon/rest-api.svg?react'
import Kubernetes from './assets/icon/kubernetes.svg?react'
import JS from './assets/icon/js.svg?react'
import ReactIcon from './assets/icon/science.svg?react'
import GitHubIcon from './assets/icon/github.svg?react'
import TelegramIcon from './assets/icon/telegram.svg?react'
import EmailIcon from './assets/icon/email.svg?react'
import TypeScriptIcon from './assets/icon/typescript.svg?react'
import TailWindIcon from './assets/icon/tailwind.svg?react'
import MongoDBIcon from './assets/icon/mongodb.svg?react'

import NoDevice from './pages/NoDevice'
import BannerImage from './assets/images/Banner.webp'
import AvatarImage from './assets/images/avatar.webp'

function App() {
  const link = [
    {
      href: 'https://github.com/theflayme',
      icon: GitHubIcon,
    },
    {
      href: 'https://t.me/d6studio',
      icon: TelegramIcon,
    },
    {
      href: 'mailto:workd6studio@gmail.com',
      icon: EmailIcon,
    },
  ]

  return (
    <>
      <NoDevice />
      <div className="container__card">
        <div className="header__card">
          <div className="header__card__banner" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="header__card__social">
              <ul>
                {link.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <item.icon className='card__social__icon' />
                    </a>
                  </li>
                ))}
              </ul>
              <span className='header__card__button'>Follows</span>
            </div>
          </div>
          <div className="header__card__avatar" style={{ backgroundImage: `url(${AvatarImage})` }}></div>
        </div>
        <div className="content__card">
          <div className='content__card__title'>
            <h1>Dmytro
              <Verification />
            </h1>
            <h3>Front-end Developer / Designer</h3>
          </div>
          <div className='content__card__carusel-wrapper'>
            <div className="carusel-visible">
              <div className='content__card__carusel'>
                <div className="group__carusel">
                  <HTML className='group__carusel__item' />
                  <CSS className='group__carusel__item' />
                  <SCSS className='group__carusel__item' />
                  <Rest className='group__carusel__item' />
                  <Kubernetes className='group__carusel__item' />
                  <JS className='group__carusel__item' />
                  <TypeScriptIcon className='group__carusel__item' />
                  <ReactIcon className='group__carusel__item' />
                  <TailWindIcon className='group__carusel__item' />
                  <MongoDBIcon className='group__carusel__item' />
                </div>
                <div aria-hidden className="group__carusel">
                  <HTML className='group__carusel__item' />
                  <CSS className='group__carusel__item' />
                  <SCSS className='group__carusel__item' />
                  <Rest className='group__carusel__item' />
                  <Kubernetes className='group__carusel__item' />
                  <JS className='group__carusel__item' />
                  <TypeScriptIcon className='group__carusel__item' />
                  <ReactIcon className='group__carusel__item' />
                  <TailWindIcon className='group__carusel__item' />
                  <MongoDBIcon className='group__carusel__item' />
                </div>
              </div>
            </div >
          </div>
          <p className='content__card__description'>If you need a visual style for your web
            project, I’m always happy to help</p>
        </div >
      </div >
    </>
  )
}

export default App
