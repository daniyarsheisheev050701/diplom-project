import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import { motion } from "framer-motion"
import logo from "../img/logotip.png"
import mans from '../img/mans.png'
import front from '../img/fron.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import vid from '../img/vid.jpeg'
import wooman from '../img/woomans.png'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import cardsimg from '../img/cardssimg.jpg'
function Contacts() {
  return (
    <div>Contacts
       <section className='Joinatanystage'>
         <div className='metods'>
          <h1>
          Методика обучения
          </h1>
          <p>
          Летом 2020 года мы внедрили уникальную <br /> систему обучения, не имеющую аналогов <br /> на территории СНГ
          </p>
         </div>
         <div className='learnmetods'>
         <div class="card">
          <div class="card-content">
            <div class="top">
              <h3 class="name">Старт с самого нуля</h3>
              <div class="date"><span></span></div>
            </div>
            <div class="bottom">
              <h2>Если ты до этого никогда не изучал программирование — тебе не будет тяжело. Ведь мы начинаем с самых азов: от установки нужных программ и базового синтаксиса, до реальных проектов с нуля.</h2>
              <div class="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-bg">
            <img
              class="bg-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
          <div class="shadow">
            <img
              class="shadow-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
        </div>
         <div class="card">
          <div class="card-content">
            <div class="top">
              <h3 class="name">Командное обучение</h3>
              <div class="date"><span></span></div>
            </div>
            <div class="bottom">
              <h2>Все студенты формируются в команды из 5 человек. Это помогает создавать более качественные проекты во время обучения и готовит к реалиям IT-компаний.</h2>
              <div class="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-bg">
            <img
              class="bg-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
          <div class="shadow">
            <img
              class="shadow-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
        </div>
         <div class="card">
          <div class="card-content">
            <div class="top">
              <h3 class="name">Упор на практику</h3>
              <div class="date"><span></span></div>
            </div>
            <div class="bottom">
              <h2>Более 60% обучения - работа над проектами. Ты будешь кодить не только дома, но и прямо на уроках. К концу курса это позволит сформировать настоящее партфолио работ.</h2>
              <div class="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-bg">
            <img
              class="bg-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
          <div class="shadow">
            <img
              class="shadow-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
        </div>
         <div class="card">
          <div class="card-content">
            <div class="top">
              <h3 class="name">Два ментора вместо одного</h3>
              <div class="date"><span></span></div>
            </div>
            <div class="bottom">
              <h2>В каждом направлении ты имеешь доступ сразу к двум специалистам - ментору и ревьюверу. Такое разделение обязанностей помогает.</h2>
              <div class="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-bg">
            <img
              class="bg-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
          <div class="shadow">
            <img
              class="shadow-img"
              src={cardsimg}
              alt="leafs"
            />
          </div>
        </div>

       
         </div>
         <div className='bttn'>
        <button> <a href="https://wa.me/+996500075002">Получить консультацию</a> </button>
        </div>
        </section>
    </div>
  )
}

export default Contacts