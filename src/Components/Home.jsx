import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import logo from "../img/logotip.png"
import mans from '../img/mans.png'
import wooman from '../img/woomans.png'
import blackman from '../img/blaack-man.png'


function Home() {
  return (
    <div>
      <div className='header'>
      <div className='nav'>
        <div className='nav-logo'>
          <img src={logo}/>
        </div>
        <div className='nav-item'>
        <Link to="/" >Главная</Link>
        <Link to="about" >About</Link>
        <Link to="contacts" >Contacts</Link>
        <Link to="service" >Service</Link>
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
            <button>Получить консультацию</button>
          </div>
          </div>
        </div>
      </div>
     
        <section className='section-item'>
          <div className='text-item'>
              <h1>Направления обучения<br />
                  </h1>
                  <p>Профессии и курсы, на которые сейчас<br />
                  открыт набор</p>
          </div>
          <div className='direction'>
            <img src={mans} />
            <img src={wooman} />
            <img src={blackman} />
          </div>
          <div className='text-di'>
          <div className='direction-text1'>
            <h1>ПОДГОТОВИТЕЛЬНЫЙ КУРС<br />
                Основы программирования</h1>
                <p>2 недели, на которых ты попробуешь все четыре профессий и подготовишь себя к погружению в изучение. <br />
                  Идеально для тех, у кого нет опыта в программировании или пользовании компьютером. <br />
                  Обучение проходит по методике перевернутого класса.</p>
                  <button className='btn-dir1'>Записаться на курс</button>
                  <button className='btn-dir2'>Узнать больше</button>
          </div>
          <div className='direction-text1'>
            <h1>КУРС-ПРОФЕССИЯ<br />
                Java-разработчик</h1>
                <p>Занимается создание сложных программ и <br /> 
                систем с высоким уровнем безопасности. 
                 Одно из самых востребованных и 
                  стабильных направлений в 
                   программировании. 
                   Выпускники чаще всего работают в банках 
                    и телекоммуникационных компаниях.</p>
                  <button className='btn-dir1'>Записаться на курс</button>
                  <button className='btn-dir2'>Узнать больше</button>
          </div>
          <div className='direction-text1'>
            <h1>ПОДГОТОВИТЕЛЬНЫЙ КУРС<br />
                Основы программирования</h1>
                <p>2 недели, на которых ты попробуешь все четыре профессий и подготовишь себя к погружению в изучение. <br />
                  Идеально для тех, у кого нет опыта в программировании или пользовании компьютером. <br />
                  Обучение проходит по методике перевернутого класса.</p>
                  <button className='btn-dir1'>Записаться на курс</button>
                  <button className='btn-dir2'>Узнать больше</button>
          </div>
          </div>
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
                  <h1>Язык <br /> программирования</h1>
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
          <div className='join'>
          <h1>Присоединяйся на любом этапе</h1>
          <p>Если ты уже знаешь основы какого-то
             языка программирования — можно 
             пропустить первые месяцы обучения.
              Для этого мы разработали специальные 
              тесты, которые помогут определить
               к какому этапу тебя стоит подключить</p>
          </div>
               <button className='btnjoin'>Запросить тест</button>
        </section>
        <section>

        </section>
    </div>
  )
}

export default Home