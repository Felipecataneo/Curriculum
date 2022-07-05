import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'F',
    'e',
    'l',
    'i',
    'p',
    'e',
    '',
    'C',
    'a',
    't',
    'a',
    'n',
    'e',
    'o',
  ]
  const jobArray = [
    'S',
    'o',
    'l',
    'u',
    'c',
    'i',
    'o',
    'n',
    'a',
    'd',
    'o',
    'r',
    '',
    'd',
    'e',
    '',
    'p',
    'r',
    'o',
    'b',
    'l',
    'e',
    'm',
    'a',
    's',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _10`}>l</span>
            <span className={`${letterClass} _11`}>á,</span>
            <br />
            <span className={`${letterClass} _12`}>E</span>
            <span className={`${letterClass} _13`}>u </span>
            <span className={`${letterClass} _13`}></span>
            <span className={`${letterClass} _14`}>s</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>u</span>
            <span className={`${letterClass} _17`}> </span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={19}
            />
            <br />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={11}
            />
          </h2>
          <h3>
            Engenhario Mecânico / Óleo e Gás / PMBOK / Desenvolvimento Web
          </h3>
          <Link to="/about" className="flat-button">
            Saiba mais sobre mim
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
