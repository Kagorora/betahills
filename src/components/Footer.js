import { React } from 'react';
import '../index.css';

const Footer = () => {
    return (
        <div className='footer h-16 w-full flex flex-row flex justify-center items-center text-xs'>
            <div className='w-1/2 flex flex-row'>
                <div className='mr-9'>
                    <p>Musterstraße 12<br></br> 12345 Berlin</p>
                </div>

                <div>
                    <p>info@betahills.com <br></br>+49(0) 151 100 321</p>
                </div>

            </div>

            <div className='w-1/2 ml-auto'>
                <div className='float-right'>
                    <p>© 2020 betahills <br></br> Imprint / Privacy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;