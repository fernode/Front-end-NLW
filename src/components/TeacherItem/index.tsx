import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
  return (
      <article className="teacher-item">
          <header>
            <img
              src="https://avatars0.githubusercontent.com/u/23129596?s=460&u=2ccb0023926c10812e010c2a62348e71ab933589&v=4"
              alt="Fernando Silva"
            />
            <div>
              <strong>Fernando Silva</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            <br/><br/>
            ea quidem ab quisquam fugit, animi minima, esse suscipit similique
            dolores repellat et quam aperiam quod reprehenderit quibusdam,
            veniam nesciunt rem.
          </p>

          <footer>
            <p>Preço/hora <strong>R$ 20,00</strong></p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}
