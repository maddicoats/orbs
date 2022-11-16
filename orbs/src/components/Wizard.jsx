import React from 'react'
import style from './Wizard.module.scss'
import wizardPic from './../data/orb-wizard.png'
import Orbs from './Orbs'
import { useState, useEffect } from 'react'

const Wizard = () => {
 const [orbIsClicked, setOrbIsClicked] = useState(false);
 const [wizardIsVisible, setWizardIsVisible] = useState(true)

//  const wizardShroud = (event) => {
//         if (!wizardIsVisible) {
//             setWizardIsVisible(false)
//         }
//     }


  return (
    <div className={style.Wiz}>
        <h1>Pin the Orb on the Wizard</h1>

        <img 
          src={wizardPic} 
          alt="a wizard pondering his orb" 
          height={500}
          className={!orbIsClicked?style.Wizible:style.Inwizible}
          onMouseOver={ () => {
            setWizardIsVisible(false)
          }}
        />

        <Orbs 
          onMouseDown={ () => {
            setOrbIsClicked(true)
            console.log(orbIsClicked)
          }}
        />
    </div>
  )
}

export default Wizard