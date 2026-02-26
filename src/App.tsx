import './styles/app.scss'
import { Suspense } from 'react'

import Verification from './assets/icon/verification.svg?react'

import GitHubIcon from './assets/icon/github.svg?react'
import TelegramIcon from './assets/icon/telegram.svg?react'
import EmailIcon from './assets/icon/email.svg?react'

import NoDevice from './pages/NoDevice'
import BannerImage from './assets/images/Banner.webp'
import AvatarImage from './assets/images/avatar.webp'

import Carousel from './components/Carousel'


function App() {
  const link = [
    {
      href: 'https://github.com/theflayme',
      icon: GitHubIcon,
      label: 'GitHub',
    },
    {
      href: 'https://t.me/d6studio',
      icon: TelegramIcon,
      label: 'Telegram',
    },
    {
      href: 'mailto:workd6studio@gmail.com',
      icon: EmailIcon,
      label: 'Email',
    },
  ]

  return (
    <Suspense fallback={<div className='container__card'></div>}>
      <NoDevice />
      <div className="container__card">
        <div className="header__card">
          <div className="header__card__banner" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="header__card__social">
              <ul>
                {link.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
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
            <p>Front-end Developer / Designer</p>
          </div>
          <div className='content__card__carusel-wrapper'>
            <div className="carusel-visible">
              <Carousel />
            </div >
          </div>
          <p className='content__card__description'>If you need a visual style for your web
            project, I’m always happy to help</p>
        </div >
      </div >
    </Suspense>
  )
}

export default App
