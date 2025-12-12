import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useSmoothScroll from "./components/useSmoothScroll";
import NotFound from "./pages/notfound";
const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
            mirror: true
        });
    }, []);
    useSmoothScroll();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to={"/404"} />} />

        </Routes>
    )
}

export default App
