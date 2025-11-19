import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

const VantaBirds = () => { 
  const [vantaEffect, setVantaEffect] = useState<any>(null); 
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x07192F,
        color1: 0xff0000,
        color2: 0x00d1ff,
        quantity: 5,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]); 

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed',
        top: 0, 
        left: 0, 
        zIndex: -1 
      }}
    >
   
    </div>
  );
};

export default VantaBirds;