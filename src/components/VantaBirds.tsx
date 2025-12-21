import { useState, useEffect, useRef } from 'react'

const VantaBirds = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
      setVantaEffect(
        // We access VANTA from the window object now
        (window as any).VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0,
          color1: 0xff0000,
          color2: 0x00ff00
          // Note: We don't need to pass "THREE" anymore, it finds it automatically
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} style={{ width: '100%', height: '89vh' }}>
        <h1 className = "text-white text-center translate-y-5" >Ease your mind.</h1>
    </div>
  )
}

export default VantaBirds