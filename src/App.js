import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Navigationbar from './sections/Navigationbar';
import Bodysection from './sections/Bodysection';
import Mood from './sections/Mood';
import Copingtools from './sections/Copingtools';
import UnsaidThoughts from './sections/UnsaidThoughts';
import TimeCapsule from './sections/TimeCapsule';
import BestieAiChat from './sections/BestieAiChat';
import VantaBirds from './components/VantaBirds';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navigationbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/vanta-birds", element: _jsx(VantaBirds, {}) }), _jsx(Route, { path: "/", element: _jsx(Bodysection, {}) }), _jsx(Route, { path: "/mood", element: _jsx(Mood, {}) }), _jsx(Route, { path: "/coping-tools", element: _jsx(Copingtools, {}) }), _jsx(Route, { path: "/unsaid-thoughts", element: _jsx(UnsaidThoughts, {}) }), _jsx(Route, { path: "time-capsule", element: _jsx(TimeCapsule, {}) }), _jsx(Route, { path: "bestie-Ai", element: _jsx(BestieAiChat, {}) })] })] }));
}
export default App;
