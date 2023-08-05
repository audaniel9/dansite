'use client';

import { useRef, useEffect } from "react";
import { motion } from "framer-motion"

export default function Food({
    mouseDownAt = "0",
    prevPercentage = "0",
    percentage = "0",
    nextPercentage = "0"
  }) {

    const ref = useRef();

    useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
      }, [ref.current]);
    
    return (
        <motion.div id="image-track" ref={ref} 
        drag = "x"
        dragConstraints={ref}
        >
            <img className="image" src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1140&q=80" draggable="false"/>
            <img className="image" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" draggable="false" />
        </motion.div>
    )
}