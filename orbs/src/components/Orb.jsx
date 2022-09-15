import React, { useRef, useState, useEffect } from 'react'
import style from './Orb.module.scss'

const Orb = ({orb}) => {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    //const [zPos, setZPos] = useState(0)
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
        //setZPos(100)
     }}
      onMouseUp={ () => {
        setPressed(false);
    }}
      style={{ zIndex: pressed ? 100 : 0 }} 
      //style={{ zIndex: zPos }} 
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