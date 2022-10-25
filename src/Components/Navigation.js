import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

// className="fixed bg-white top-0  left-0 w-2/6 h-full z-50 shadow">
//className="bg-[rgb(0,0,0,0.5)] fixed top-0 left-0 w-full h-full z-50"
function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
    })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0 , transform: 'translateX(-100%)'},
        delay: 200,
    })
    
    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                icon={faBars} 
                onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {maskTransitions(
                (styles, item) => item && 
                <animated.div 
                    style={styles}
                    className="bg-[rgb(0,0,0,0.5)] fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}/>
                )}

            {menuTransitions(
                (styles, item) => item && 
                <animated.div 
                    style={styles}
                    className="fixed bg-white top-0  left-0 w-2/6 h-full z-50 shadow"
                    >
                        This is the menu
                </animated.div>
            )}
        </nav>
    )
 }

 export default Navigation