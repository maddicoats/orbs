import React from 'react'
import style from './Wizard.module.scss'
import wizardPic from './../data/orb-wizard.png'
import Orbs from './Orbs'

const Wizard = () => {
  return (
    <div className={style.Wiz}>
        <h1>Pin the Orb on the Wizard</h1>
        <img src={wizardPic} alt="a wizard pondering his orb" height={500} />
        <Orbs />
    </div>
  )
}

export default Wizard