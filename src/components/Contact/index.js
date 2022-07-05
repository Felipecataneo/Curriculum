import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'mailmessage',
        'template_b61owla',
        form.current,
        'NKBWv-zpvAVhovnn8'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          // window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'E',
                'n',
                't',
                'r',
                'e',
                '',
                'e',
                'm',
                '',
                'C',
                'o',
                'n',
                't',
                'a',
                't',
                'o',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Estou sempre em busca de novos desafios e oportunidades. Fale comigo
            pelo formulário abaixo ou se preferir pelo número (18) 98116-8691.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nome" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Título"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensagem"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Felipe Cataneo,
          <br />
          Brasil,
          <br />
          Rua Teixeira de Freitas, 43 ap 45 <br />
          Santos- SP
          <br />
          <br />
          <span className="fade">felipecataneo@hotmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-23.95562, -46.34096]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-23.95562, -46.34096]}>
              <Popup>Eu moro aqui, venha tomar um café :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
