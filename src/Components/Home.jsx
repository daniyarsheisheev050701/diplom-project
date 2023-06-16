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
function Home() {
  const texAnimation ={
    hidden: {
      x:- 600,
      opacity:0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition:{delay: custom * 0.1},
    })
 
  }
   const teAnimation ={
    hidden: {
      x: 600,
      opacity:0,
    },
    visible: custom => ({
      x:- 0,
      opacity:1,
      transition:{delay: custom * 0.1},
    })
 
  }
   const tAnimation ={
    hidden: {
      y: 600,
      opacity:0,
      // transition: 
      
    },
    visible: custom => ({
      y:- 0,
      opacity:1,
      transition:{delay: custom * 0.1},
    })
 
  }
  return (
    <div>
      <div className='header'>
      <div className='nav'>
        <div className='nav-logo'>
          <img src={logo}/>
        </div>
        <div className='nav-item'>
        <Link to="/" >Главная</Link>
        <Link to="about" >Frontend разработчик</Link>
        <Link to="contacts" >Методика</Link>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSemZ4_lFY9X4QkTPFiwqjabQCt2KbEFlDjrOVc2gDn559kXCQ/viewform" >Тестирование</Link>
        </div>
     
      </div> 
        <div className="header-inner">
          <div className="item-header">
            <h1>Начни путь<br />
               в программировании</h1>
               <h1>Получи профессию Frontend-разработчика<br />
                за 3 месяцев.
                            С нуля.</h1>
                            <div className='btn'>
            <button> <a href="https://wa.me/+996500075002">Получить консультацию</a> </button>
          </div>
          </div>
        </div>
      </div>
     
        <section className='section-item'>
          <motion.div 
           initial="hidden"
          whileInView="visible"
          variants={texAnimation} 
          >
<Card className='cards' sx={{ maxWidth: 550 }}>
      <CardMedia
    
        sx={{ height: 500, }}
        image={mans}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ПОДГОТОВИТЕЛЬНЫЙ КУРС <br />
        Основы программирования
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="19px">
          2 недели, на которых ты попробуешь все четыре профессий и подготовишь себя к погружению в изучение.
            Идеально для тех, у кого нет опыта в программировании или пользовании компьютером.
            Обучение проходит по методике перевернутого класса.
        </Typography>
      </CardContent>
      <CardActions className='bnn'>
      <Button className='bbb'> <a href="https://wa.me/+996500075002">писаться на курс</a> За</Button>
        <Button ><a href="https://wa.me/+996500075002">Узнать больше</a> </Button>
      </CardActions>
    </Card>
          </motion.div>
        <motion.div
        //  initial="hidden"
        //  whileInView="visible"
        //  variants={tAnimation}
        >
        <Card  className='cards' sx={{ maxWidth: 550 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={wooman}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ПОДГОТОВИТЕЛЬНЫЙ КУРС <br />
        Основы программирования
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="19px">
          2 недели, на которых ты попробуешь все четыре профессий и подготовишь себя к погружению в изучение.
            Идеально для тех, у кого нет опыта в программировании или пользовании компьютером.
            Обучение проходит по методике перевернутого класса.
        </Typography>
      </CardContent>
      <CardActions className='bnn'>
        <Button className='bbb'> <a href="https://wa.me/+996500075002">писаться на курс</a> За</Button>
        <Button ><a href="https://wa.me/+996500075002">Узнать больше</a> </Button>
      </CardActions>
    </Card>
        </motion.div>
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={teAnimation}
    >
 <Card  className='cards' sx={{ maxWidth: 550 }}>
      <CardMedia
        sx={{ height: 500}}
        image={front}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            КУРС-ПРОФЕССИЯ <br />
            Frontend-разработчик
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize="19px">
                 Мастер создания сайтов. Умеет делать их красивыми, интерактивными,
                  с большим функционалом. Профессия отлично подойдет тем, кто хочет 
                  фрилансить и постоянно разрабатывать новые проекты.
                          Один из самых популярных курсов для новичков.   
        </Typography>
      </CardContent>
      <CardActions className='bnn'>
      <Button className='bbb'> <a href="https://wa.me/+996500075002">писаться на курс</a> За</Button>
        <Button ><a href="https://wa.me/+996500075002">Узнать больше</a> </Button>
      </CardActions>
    </Card>
    </motion.div>
        </section>
        <section className='learning'>
            <div className='learntext'>
              <h1>
              Этапы обучения
              </h1>
              <p>Своя система на каждом 
                направлении — <br /> подбери лучшее для себя</p>
            </div>
            <p>Главная цель этого формата — сделать из тебя
               профессионального младшего разработчика.
                Все <br /> составляющие готовят тебя к реальным
                 задачам, которые ты встретишь
               при работе на компанию или фрилансе.</p>
               <div className='learntext2'>
                <div className='inner-text-learn'>
                  <h1>Основы программирования</h1>
                  <p>Две недели обучения для погружения в IT-сферу.
                      Пять раз в неделю на занятиях с менторами 
                      ты изучишь базу 5 языков программирования.
                      В конце курса ты будешь понимать всех необходимые
                      ' термины, программы и технологии программирования.
                      Реальная практика поможет тебе определиться
                      с направлением для дальнейшего полноформатного
                        обучения.</p>
                </div>
                <div className='inner-text-learn'>
                  <h1>Язык программирования</h1>
                  <p>Три месяца углубленного изучения выбранного языка программирования.
                          Учимся 5 раз в неделю. Делаем фокус на 
                          небольших проектах, которые помогают
                          закрепить большое количество новой информации.
                          Проводим 3 тимбилдинга, 3 тренинга от 
                          разработчиков, хакатон и техническое 
                          интервью со специалистом из IT-компании..</p>
                </div>
                <div className='inner-text-learn'>
                  <h1>Профессиональные <br /> технологии</h1>
                  <p>Еще три месяца изучаем ООП, Базы Данных,
                     фреймворки, библиотеки и дополнительные 
                     направления - все, 
                    что нужно для создания реальных проектов.
                      Начинаем разрабатывать крупные
                      командные задания, которые пойдут
                        тебе в портфолио.
                      Учимся 5 раз в неделю + 3
                      тимбилдинга, 3 тренинга, 
                      хакатон и техническое интервью.</p>
                </div>
               </div>
        </section>
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
        <section className='price'>
            <div className='aaa'>
              <h1>
                Стоимость обучения
              </h1>
              <h2>
              ОБУЧЕНИЕ <br />
              IT-ПРОФЕССИИ
              </h2>
              <h3>
                    Обучение полностью оффлайн
                    2 ментора с опытом от 1х лет
                    Чат с менторами и всеми студентами Академии
                    Круглосуточный доступ ко всем учебным материалам и урокам
                    Персональный отзыв на каждое задание
                    Доступ к обучению на других направлениях/языках
                    Ежемесячные тренинги 
                    Собеседования, экзамены
                    Система помощи в трудоустройстве
                    3.5 месяцев обучения
              </h3>
              <h2>
              13000
                в месяц
              </h2>
            </div>
        </section>
        <section className='otzyv'>
          <div className='ot'>
            <h1>
            Отзывы наших студентов
            </h1>
          </div>
          <div className='sad'>
          <div>
          <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={vid}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography className='vv' variant="h6" color="text.secondary">
        .....sdgblhasdghfujiahsdifghsdh
        </Typography>
      </CardContent>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={vid}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography className='vv' variant="h6" color="text.secondary">
        .....sdfkjkgasdjhfgsdhfgsdhfg
        </Typography>
      </CardContent>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={vid}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography className='vv' variant="h6" color="text.secondary">
        .....sdgbhhjasdgfuiawheuiwuf
        </Typography>
      </CardContent>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={vid}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography className='vv' variant="h6" color="text.secondary">
        .....SKJdfsdjfhsdjfhsdjfjshdfhsdhf
        </Typography>
      </CardContent>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={vid}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography className='vv' variant="h6" color="text.secondary">
        .....asfjhashfgh sdhjfsjdfhghasdg
        </Typography>
      </CardContent>
    </Card>
          </div>
          </div>
        </section>
        <section className='questions'>
          <h1>
          Частые вопросы
          </h1>
          <div className='acordion'>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>Как выбрать язык?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Просто - не выбирай. На первом месяце, когда мы проходим основы
             программирования, ты сможешь попробовать все направления.
              В конце месяца, после реальной практической работы, станет
               ясно что понравилось тебе больше и по какому направлению 
               стоит продолжить обучение.
                А если не хочешь ждать старта в сентябре — попробуй себя на краткосрочных курсах
            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>какой нужен компютер/ноутбук?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Если ты хочешь учиться у нас оффлайн - тебе понадобится ноутбук. Если онлайн - будет достаточно ПК.
              Минимальные требования к твоей машинке:
              ⚡️ 64х-битная система
              ⚡️ Двухъядерный процессор (intel core i3 и выше)
              ⚡️ от 4х Гб оперативной памяти
              ⚡️ рекомендуется SSD на 128 Гб и выше
            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>Можно ли поступать без опыта в IT?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Нужно! Для всех, кто обладает нулевым опытом мы
             создали вводный курс обучения - основы программирования.
              На нем ты изучишь все нужные термины, понятия и механики.
               Он подготовит тебя к профессиональному изучению и поможет 
               понять какое направление подходит больше всего.
            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>я получу сертификат?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Всем выпускникам курса мы выдаем официальный сертификат на
             английском языке. Лучшие студенты получают сертификат золотого образца.
              Сертификаты подкреплены нашей образовательной лицензией №LE18000550
            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>Помогаете с трудоустройством?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Конечно! У нас целая система, которая помогает выпускникам быть актуальными на рынке труда.
              1. Только актуальные курсы
              Мы за пускаем только востребованные направления на рынке КР. Многие наши курсы открываются 
              в партнерстве с компаниями, нуждающимися в сотрудниках
              2. Технические интервью
              Каждые три месяца внешние специалисты тестируют наших студентов. По итогу таких интервью,
              студенты получают рейтинг и персональные рекомендации по дальнейшему развитию.
              3. Фокус на soft skills
              В программу нашего обучения мы включаем не только технические навыки, но и навыки 
              командной работы, ведения проектов, бизнес-мышление и многое другое.4. Портфолио
              В IT среде самым важным является не диплом или сертификат обучения,
              а фактический опыт. Вас будут оценивать по проектам, которые вы создали.
                Поэтому в течении курса студенты академии создают несколько проектов, формирующих рабочее портфолио.5. Презентация выпускных работ
              Самой большой демонстрацией возможностей студента является финальный проект.
              На его демонстрацию мы приглашаем IT и HR специалистов, чтобы они дали 
              оценку и увидели потенциал выпускников.6. Рассылка по HR
              Оформленное резюме и портфолио выпускников рассылается по HR-специалистам 
              IT-компаний Кыргызстана
              7. Погружение в компании
              Перед выпуском, студенты Бишкека проходят серию экскурсий по IT-компаниям.
              Это дает возможность узнать больше о будущем месте работы и поговорить с сотрудниками.


            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>Есть ли ограничение по возрасту?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Для обучения IT-профессии мы принимаем всех ребят с 16 до 175 лет.
            Система обучения очень гибкая и может адаптироваться под ритм жизни практически любого человека. 
            А менторы обладают опытом в преподавании, что помогает найти общий язык со всеми студентами
            и объяснять даже самые сложные темы простым языком.
            </h2>   
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary>
          <Typography><h3>Получится ли совмещать со школой/Университетом/работой?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>
            Получится, если ваш график не слишком загруженный. Минимальное количество 
            часов, нужно для обучения в Академии - 3 часа каждый день.
            Для того чтобы учиться действительно хорошо, потребуется уделять больше времени.
             Но этого минимума хватит для усвоения 80% всего материала
            </h2>   
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
    </div>
  )
}

export default Home