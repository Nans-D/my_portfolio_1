import React from 'react';
import 'typeface-quicksand'
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation'
import Skill from './components/Skills/Skill';
import Projects from './components/Projects-folder/Projects';
import { Footer } from './components/Footer/Footer';
import { Experience } from './components/Experience/Experience';
import { Courses } from './components/Courses/Courses';
import './App.css'

function App() {
  return (
  <div className='container'>
    <body className='body-container'>

    <div style={{  maxWidth : '72rem'}}>
      <Header></Header>
      <Presentation></Presentation>
      <div id='skill'>
      <Skill></Skill>

      </div>
      <div id='projects'>
      <Projects></Projects>
      <Experience></Experience>
      <Courses></Courses>
      </div>
    </div>
    <Footer></Footer>
    </body>
  </div>
  );
}

export default App;
