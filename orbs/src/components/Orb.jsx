import React, { useRef, useState, useEffect } from 'react'
import style from './Orb.module.scss'

const Orb = ({orb, handleClicks, clicks}) => {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const [zPos, setZPos] = useState(1)
    const ref = useRef()


    
    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
        ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
        
    }, [position])

    // Update the current position if mouse is down
    const onMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }
  
  return (
    <div ref={ ref }
      onMouseMove={ onMouseMove }
      onMouseDown={ () => {
        setPressed(true)
        handleClicks()
      }}
      onMouseUp={ () => {
        setPressed(false);
        setZPos(zPos + clicks)
      }}
      //onClick={}
      style={{ zIndex: pressed ? 99999999 : zPos }} 
      >
        <img 
            className={style.Orb}
            src={orb.url} 
            alt="an orb" 
            draggable="false"
        />
    </div>
  )
}

export default Orb