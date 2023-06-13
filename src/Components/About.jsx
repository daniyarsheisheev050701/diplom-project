import React from 'react'
import aa from '../Components/css/About.css'
import jsimg from '../img/jsimg.jpg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function About() {
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
  return (
    <div>
      <header className='headerabout'>
      <h1>
      Получи профессию <br />
      <h1 className='dd'> Frontend-разработчика <br /></h1>
      за 9 месяцев. <br />
      С нуля. <br />
      </h1>
      </header>
      <section className='fron-1'>
          <div>
            <h1>Что такое Frontend</h1>
            <p>Это всё, что ты видишь и кликаешь на сайте <br />
             или в приложении - картинки, кнопочки, <br />
              анимации и даже бесячая реклама. <br />
              Самые главные инструменты frontend <br />
               разработки сайтов это JavaScript, HTML и CSS. <br />
              В Кыргызстане фронтенд-разработчики востребованы <br />
               практически в каждой
              IT-компании. Это также одно <br /> из самых популярных направлений <br />
               для фриланса 
              и удаленной работы. Все потому, <br />
               что в современном <br />
               мире сайт нужен каждому
              Пройти тест, <br />
               чтобы узнать подходит ли тебе Frontend</p>
          </div>
          <div className='jsim'>
            <img src={jsimg} alt="" />
          </div>
      </section>
      <section className='frpod'>
        <div>
          <h1>Программа обучения</h1>
          <p>Краткое содержание курса</p>
        </div>
        <div className='obuch'>
        <div className='box1'>
          <h1>Основы программирования</h1>
          <p>Программисты не только работают по-другому,<br />
             они иначе думают. В этом блоке мы расскажем <br />
             тебе как быть программистом до мозга костей. <br />
              Пройдем основные понятия, разберемся в технологиях <br />
               и установим все необходимые программы.</p>
        </div>
        <div className='box1'>
          <h1>HTML</h1>
          <p>Язык, который отвечает за содержимое сайта <br />
           - тексты, картинки, ссылки и тд. <br />
                  Ты научишься правильно писать семантику <br />
                   страницы и отработаешь весь функционал на практике.</p>
        </div>
        <div className='box1'>
          <h1>CSS</h1>
          <p>CSS позволит тебе создавать красоту. <br />
           Цвета, переходы, анимации - заслуга этого блока. <br />
                Здесь твой внутренний дизайнер соединится с <br />
                  программистом для создания прекрасного.</p>
        </div>
        <div className='box1'>
          <h1>JavaScript</h1>
          <p>Вот тут начинается настоящее программирование. <br />
           Ты изучишь алгоритмы, ООП, работу с API, синхронный <br />
            и асинхронный код. И подробно разберешь синтаксис самого JS</p>
        </div>
        <div className='box1'>
          <h1>React</h1>
          <p>Это фреймворк, которым владеет каждый <br />
           хороший frontend разработчик. Он помогает создавать <br />
            пользовательские <br />
              интерфейс, удобно связывая JS и HTML</p>
        </div>
        <div className='box1'>
          <h1>NodeJS</h1>
          <p>Фреймворк, который позволяет создавать не <br />
           просто сайты, а полноценные приложения.
              </p>
        </div>
        </div>
      </section>
      <section className='frontobuchenie'>
        <div className='glowfront'>
          <h1>
          Методика обучения
          </h1>
          <p>
          Лучшие практики частных школ, <br />
           адаптированные под нашу ментальность
          </p>
        </div>
        <div className='frontcards'>
        <Card sx={{ maxWidth: 425, height: 420 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }}gutterBottom>
          W100+ проектов
        </Typography>
        <Typography variant="h4" color="text.secondary" component="div">
        70% курса - это практика.
        Ты будешь закреплять каждую тему на практике.
        А значит в твоем портфолио будет ооочень много работ
        </Typography>
      </CardContent>
    </Card>
        <Card sx={{ maxWidth: 425, height: 420 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }}gutterBottom>
              13 крутых
              спецов
        </Typography>
        <Typography variant="h4" color="text.secondary" component="div">
        Два ментора и еще 11 специалистов, которые 
        будут проводить тренинги и технические интервью. 
        Столько людей ты встретишь за курс
        </Typography>
      </CardContent>
    </Card>
        <Card sx={{ maxWidth: 425, height: 420 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }}gutterBottom>
        2 ментора на группу
        </Typography>
        <Typography variant="h4" color="text.secondary" component="div">
        Тебя будут прокачивать целых 2
         ментора на разных уровнях. Преподаватель и ревьюер
        </Typography>
      </CardContent>
    </Card>
        <Card sx={{ maxWidth: 425, height: 420 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }}gutterBottom>
        3 занятий в неделю
        </Typography>
        <Typography variant="h4" color="text.secondary" component="div">
        На трех из них ты будешь проходить новые темы, 
        а еще два нужны для отработки проектов и разборов вопросов
        </Typography>
      </CardContent>
    </Card>
        
        </div>
      </section>
    </div>
  )
}

export default About