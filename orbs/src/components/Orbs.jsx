import React from 'react'
import style from './Orbs.module.scss'
import orbs from '../data/orbs'
import Orb from './Orb';

const Orbs = () => {

  return (
    <div className={style.Orbs}>
        {orbs.map(orb => {
            return (
                <Orb orb={orb} key={orb.id}/>
            )
        })}
    </div>
  )
}

export default Orbs