import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
const VantaBirds = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect && vantaRef.current && window.VANTA) {
            setVantaEffect(
            // We access VANTA from the window object now
            window.VANTA.BIRDS({
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
            }));
        }
        return () => {
            if (vantaEffect)
                vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (_jsx("div", { ref: vantaRef, style: { width: '100%', height: '89vh' }, children: _jsx("h1", { className: "text-white text-center translate-y-5", children: "Ease your mind." }) }));
};
export default VantaBirds;
