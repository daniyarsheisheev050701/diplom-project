import React from 'react'
import aa from '../Components/css/About.css'
import jsimg from '../img/jsimg.jpg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { dark } from '@mui/material/styles/createPalette';
import jstes from '../img/jstest.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
        <div className='hhhh'>
        <h1 className='aaaa'>
      Получи профессию <br /></h1>
      <h1 className='dd'> Frontend-разработчика <br /></h1>
    <h1 className='dsdss'>за 9 месяцев. <br />
      С нуля. <br />
      </h1>  
        </div>
      
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
        <div className='obuchenie'>
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
        <div>
        <div class="container">
  <div class="card">
    <div class="content front">
      <h2 class="title">100+ проектов</h2>
      <div class="arrow"></div>
    </div>
    <div class="content back">
      <p>70% курса - это практика.
Ты будешь закреплять каждую тему на
 практике. А значит в твоем портфолио будет ооочень много работ</p>
    </div>
  </div>
  <div class="card">
    <div class="content front">
      <h2 class="title">13 крутых спецов</h2>
      <div class="icons">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
      <div class="arrow"></div>
    </div>
    <div class="content back">
      <p>Два ментора и еще 11 специалистов,
         которые будут проводить тренинги и
          технические интервью. Столько людей ты встретишь за курс
</p>
    </div>
  </div>
  <div class="card">
    <div class="content front">
      <h2 class="title">5 занятий в неделю</h2>
      <div class="arrow"></div>
    </div>
    <div class="content back">
      <p>На трех из них ты будешь проходить новые темы,
         а еще два нужны для отработки проектов и разборов вопросов</p>
    </div>
  </div> 
</div>
        </div>
      </section>
      <section className='tests'>
        <div className='tesbackg'>
        <Card sx={{ maxWidth: 525, height: 750, boxShadow: 1}}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }}gutterBottom>
        Вступительный тест
        </Typography>
        <Typography variant="h4" color="text.secondary" component="div">
          <p className='testtext'>
          Мы разработали специальный онлайн- тест,
         который поможет определить подойдет ли тебе это направление.
         Он проверит твое логическое мышление, визуальное
        восприятие и мотивацию. Ответ придет сразу после сдачи теста
          </p>
        </Typography>
      </CardContent>
      <div className='btnnb'>
      <button className='tesbtn'> <a href="https://docs.google.com/forms/d/e/1FAIpQLSemZ4_lFY9X4QkTPFiwqjabQCt2KbEFlDjrOVc2gDn559kXCQ/formResponse">Сдать тест</a></button>

      </div>
    </Card>
        </div>
        <div className='imgjstes'>
          <img src={jstes} alt="" />
        </div>
      </section>
      <section className='pricese'>
        <div className='stoimost'>
          <h1>
          Стоимость обучения
          </h1>
        </div>
        <div className='tess'>
          <h2>
          МЕСЯЦ ОБУЧЕНИЯ
          </h2>
          <p>Дает полный доступ на 1 месяц. Ты можешь <br />
              разделить полную сумму обучения <br />
             на ежемесячные взносы и оплачивать в <br />
             удобные тебе даты</p>
             <span>
             4300 <br />
              сомов
             </span>
        </div>
        <div className='tess'>
          <h2>
          МЫ ПРЕДЛОГАЕМ ВАМ
          </h2>
          <p>При разовой оплате за весь курс, мы даем <br />
           скидку в 5% на полную сумму. Данная стоимость <br />
            указана с учетом скидки.</p>
             <span>
             13000 <br />
              сомов
             </span>
        </div>
      </section>
      <section className='ques'>
        <div className='texques'>
          <h1>
          Частые вопросы
          </h1>
        </div>
        <div className='acardionques'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <h1>Как понять подходит ли вам Frontend?</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Просто - попробуй его в деле. На первом месяце,
           когда мы проходим основы программирования, ты сможешь
            попробовать все три направления. В конце месяца, после
             реальной практической работы, станет ясно что понравился
              ли тебе Frontend и стоит ли его изучать дальше.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Какой нужен компютер или ноутбук?</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Если ты хочешь учиться у нас оффлайн
           - тебе понадобится ноутбук.
            Если онлайн - будет достаточно ПК.
            Рекомендуемые требования к твоей машинке:
            Процессор intel серий i3 либо i5 и выше
            Количеством ядер от 4
            SSD хотя бы на 128 гигабайт
            Экран fullHD (1920x1080)
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Можно ли поступать без опыта в IT?</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Нужно! Для всех, кто обладает нулевым опытом
             мы создали вводный курс обучения - основы
              программирования. На нем ты изучишь все нужные 
              термины, понятия и механики. Он подготовит тебя 
              к профессиональному изучению и поможет понять 
              какое направление подходит больше всего.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Я получу сертификат?</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Всем выпускникам курса мы выдаем официальный сертификат
             на английском языке. Лучшие студенты получают сертификат золотого образца.
             Сертификаты подкреплены нашей образовательной лицензией №LE18000550
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Помогаете с трудоустройством?</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Конечно! У нас целая система, которая помогает
             выпускникам быть актуальными на рынке труда
                1. Только актуальные курсы
                Мы за пускаем только востребованные направления на рынке
                КР. Многие наши курсы открываются в партнерстве с
                  компаниями, нуждающимися в сотрудниках
                2. Технические интервью
                Каждые три месяца внешние специалисты тестируют
                наших студентов. По итогу таких интервью, студенты
                  получают рейтинг и персональные рекомендации по дальнейшему развитию.
                3. Фокус на soft skills
                В программу нашего обучения мы включаем не только
                технические навыки, но и навыки командной работы,
                  ведения проектов, бизнес-мышление и многое другое.
                4. Портфолио
                В IT среде самым важным является не диплом или
                сертификат обучения, а фактический опыт. Вас 
                будут оценивать по проектам, которые вы создали.
                  Поэтому в течении курса студенты академии создают 
                  несколько проектов, формирующих рабочее портфолио.
                5. Презентация выпускных работ
                Самой большой демонстрацией возможностей студента
                является финальный проект. На его демонстрацию мы 
                приглашаем IT и HR специалистов, чтобы они дали оценку и увидели потенциал выпускников.
                6. Рассылка по HR
                Оформленное резюме и портфолио выпускников
                рассылается по HR-специалистам IT-компаний Кыргызстана
                7. Погружение в компании
                Перед выпуском, студенты Бишкека проходят
                серию экскурсий по IT-компаниям. Это дает возможность
                узнать больше о будущем месте работы и поговорить с сотрудниками.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Есть ли ограничение по возрасту?</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Мы принимаем всех ребят с 15 до 175 лет.
            Система обучения очень гибкая и может адаптироваться
            под ритм жизни практически любого человека. А менторы
              обладают опытом в преподавании, что помогает найти
              общий язык со всеми студентами и объяснять даже самые
                сложные темы простым языком
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1>Получиться ли совмещать со школой/Университетом/работой</h1> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            олучится, если ваш график не слишком загруженный. 
            Минимальное количество часов, нужно для обучения в
             Академии - 3 часа каждый день.
              Для того чтобы учиться действительно хорошо, 
              потребуется уделять больше времени. Но этого минимума 
              хватит для усвоения 80% всего материала
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </section>
      <footer className='footer'>
          <div>
            <h1>Наши контакты</h1>
          </div>
          <div className='fot'>
          <div className='fo'>
            <h2>Для обучения</h2>
            <a href="">+996500075002</a>
            <a href="">+996777075002</a>
            <a href="">hello@Knau-it.kg</a>
          </div>
          <div className='fo'>
            <h2>Для партнерств</h2>
            <a href="">+996 772 000 562</a>
            <a href="">hello@Knau-it.kg</a>
          </div>
          <div className='fo'>
            <h2>Работай в Академии</h2>
            <a href="">Открытые вакансии</a>
            <a href="">+996777075002</a>
            <a href="">hello@Knau-it.kg</a>
          </div>
          </div>
          <div className='fotes'>
          <div className='svgs'>
            <h2>СОЦСЕТИ</h2>
            <svg data-testid="DeleteIcon"><FacebookIcon/></svg>
            <svg data-testid="DeleteIcon"><TwitterIcon/></svg>
            <svg data-testid="DeleteIcon"><InstagramIcon/></svg>
            <svg data-testid="DeleteIcon"><YouTubeIcon/></svg>
            <svg data-testid="DeleteIcon"><TelegramIcon/></svg>
          </div>
          <div>
            <h2>ССЫЛКИ</h2>
            <p>Профориентационный тест <br />
                Зачисление на курс</p>
          </div>
          <div>
            <h2>КУРСЫ</h2>
            <p>Основы программирования <br />
                Frontend разработчик</p>
          </div>
          </div>
          
        </footer>
        <section>
      
        </section>
    </div>
  )
}

export default About