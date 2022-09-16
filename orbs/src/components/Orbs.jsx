import React from 'react'
import style from './Orbs.module.scss'
import orbs from '../data/orbs'
import Orb from './Orb';
import { useState } from 'react';

const Orbs = () => {
  const [clicks, setClicks] = useState(1)

  const handleClicks = () => {
    setClicks(clicks+1)
    console.log(clicks)
  }

  //state for last clicked ?
  return (
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
  )
}

export default Orbs