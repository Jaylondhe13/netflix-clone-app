import { useEffect, useState } from 'react';
import './Nav.css';
const Nav = () => {

    const [show, setShow] = useState(false);
    const transionNavbar = ()=>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transionNavbar);
        return ()=>{
            window.removeEventListener("scroll",transionNavbar);
        }
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img
                    className='nav_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''
                />

                <img
                    className='nav_avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png'
                    alt=''
                />
               
            </div>

        </div>
    )

}

export default Nav;

