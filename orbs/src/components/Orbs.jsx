import React from 'react'
import style from './Orbs.module.scss'
import orbs from '../data/orbs'
import Orb from './Orb';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Orbs = () => {
  const [clicks, setClicks] = useState(1)

  const handleClicks = () => {
    setClicks(clicks+1)
    console.log(clicks)
  }

  //state for last clicked ?
  return (
    <>
    <header className={style.Header}>
      <p>grab them</p>
      <h1>orbs</h1>
    </header>
    <div className={style.Orbs}>
      {orbs.map(orb => {
        return (
          <Orb 
            handleClicks={ handleClicks }
            clicks={clicks}
            orb={orb} 
            key={orb.id} 
          />
        )
      })}
    </div>
    <NavLink to='/wizard' className={style.Footer}>
      <h3>vizard the wizard</h3>
    </NavLink>
    </>
  )
}

export default Orbs