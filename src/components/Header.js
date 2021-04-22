import { React } from 'react';
import Logo from '../assets/images/betahills_logo.png';
import '../index.css';

const Header = () => {
    return (
         <div className='header h-16 w-full border-blue-900'>
            <div className="logo float-left h-full flex justify-center items-center cursor-pointer text-blue-700 tracking-widest text-sm">
                <img src={Logo} alt="logo" className="object-contain h-9 mr-4"/> betahills
            </div>
            <div className="actions float-right h-full flex justify-center items-center">
                <ul className="header-list flex space-x-8 cursor-pointer font-normal text-blue-700 tracking-wider text-base">
                    <li>About</li>
                    <li>Process</li>
                    <li>Solutions</li>
                    <li>Case studies</li>
                    <li>Impact</li>
                    <li>Contact</li>
                </ul>
            </div>
         </div>
    )
}

export default Header;