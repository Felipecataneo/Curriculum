import { useEffect, useState } from 'react'
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faDiscord,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
              idx={15}
            />
          </h1>
          <p>
            Sou engenheiro mecânico com vasta experiência no setor de óleo e
            gás. Operei offshore com completação de poços e como consultor para
            simulação e análise de esforços de coluna, perfuração e estrutura de
            poços. Atualmente trabalho com simulações probabilisticas de tempo e
            custo para essas operações.
          </p>
          <p>
            Sou curioso e sedento por desafios, o que me levou a estudar áreas
            diferentes das que tenho contato no meu dia a dia de trabalho, como
            por exemplo gerenciamento de projetos e atualmente desenvolvimento
            web e programação em Python, Javascript e PHP.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faInstagram} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faTwitter} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faFacebook} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDiscord} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faYoutube} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faTelegram} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
