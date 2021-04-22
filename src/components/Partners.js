import { React } from 'react';
import Jibu from '../assets/images/Jibu 1.png';
import CoffeeCircle from '../assets/images/CoffeeCircle 1.png';
import Coformatique from '../assets/images/Coformatique 1.png';
import Dalia from '../assets/images/Dalia-Logo-1-white 1.png';
import FOLKDAYS from '../assets/images/FOLKDAYS_Logo_2-zeilig_Quadrat_b 1.png';
import GlobalExcel from '../assets/images/GlobalExcel_white11 1.png';

const Partners = () => {
    return (
        <div className="partners w-full h-auto pt-60 pb-60">
                <div className="header-list text-6xl w-1/2 mb-32">
                    <p className="h-full w-full">We have successfully partnered with a variety of companies from all over the world.</p>
                </div>

                <div className="w-2/3 ml-auto">
                    <ul className="flex flex-row w-full h-full grid grid-cols-3 gap-4 mb-30">
                        <li className="logo-container mr-32"><img className="object-contain" src={CoffeeCircle} alt="CoffeeCircle logo" /></li>
                        <li className="logo-container mr-32"><img className="object-contain" src={GlobalExcel} alt="GlobalExcel logo" /></li>
                        <li className="logo-container mr-32"><img className="object-contain" src={Jibu} alt="Jibu logo" /></li>
                        <li className="logo-container mr-32"><img className="object-contain" src={Dalia} alt="Dalia logo" /></li>
                        <li className="logo-container mr-32"><img className="object-contain" src={Coformatique} alt="Coformatique logo" /></li>
                         <li className="logo-container mr-32"><img className="object-contain" src={FOLKDAYS} alt="FOLKDAYS logo" /></li>
                    </ul>
                </div>
        </div>
    )
}

export default Partners;