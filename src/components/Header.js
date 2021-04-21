import { React } from 'react';
import Logo from '../assets/images/betahills_logo.png';

const Header = () => {
    return (
         <div className='h-16 w-full bg-green-300 pr-20	pl-20 border-b-2 border-blue-900'>
            <div className="logo float-left h-full flex justify-center items-center cursor-pointer text-blue-700 tracking-widest text-sm">
                <img src={Logo} alt="logo" className="object-contain h-9 mr-4"/> betahills
            </div>
            <div className="actions float-right h-full flex justify-center items-center">
                <ul className="flex space-x-8 cursor-pointer font-normal text-blue-700 tracking-wider text-base">
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