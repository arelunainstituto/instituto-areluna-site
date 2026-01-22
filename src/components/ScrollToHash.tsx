import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const interval = setInterval(() => {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [location]);

    return null;
}
