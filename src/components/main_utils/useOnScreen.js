import { useState, useEffect } from 'react'

const useOnScreen = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};

export default useOnScreen