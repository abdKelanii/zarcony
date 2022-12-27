import { useEffect, useRef } from 'react';

export default function Title(props) {
    const h2Ref = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const h2Width = h2Ref.current.offsetWidth;
        lineRef.current.style.width = `${h2Width}px`;
    }, []);

    return (
        <div className="md:container md:mx-auto md:px-12 px-3 md:z-10 mt-7 md:mt-16">
            <div className="z-30 relative">
                <div className="md:pb-20 z-10 relative inline-block">
                    <h2 ref={h2Ref} id="h1" className="md:text-5xl font-bold text-md md:font-black text-primary p-85">{props.title}</h2>
                </div>
                <div ref={lineRef} id="line" className="bg-secondary inline-block h-2.5 absolute bottom-85px right-0 z-0 md:flex hidden"></div>
            </div>
        </div>
    )
}
