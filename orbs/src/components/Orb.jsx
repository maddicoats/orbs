import DragMove from "./DragMove";
import React, { useState } from 'react'
import style from './Orb.module.scss'

const Orb = ({orb}) => {

    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });

    const handleDragMove = (e) => {
        setTranslate({
        x: translate.x + e.movementX,
        y: translate.y + e.movementY
        });
    };
                   
  return (
    <div>
        <DragMove onDragMove={handleDragMove}>
            <div style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px)` }} key={translate.key}>
                <img 
                    className={style.Orb}
                    src={orb.url} 
                    alt="" 
                    draggable="false"
                />
            </div>
        </DragMove>
    </div>
  )
}

export default Orb