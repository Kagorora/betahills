import { React } from 'react';

const Home = () => {
    return (
        <div className='home w-full h-screen bg-green-300'>
            <div className="main-text pt-40 text-7xl mb-3.5 w-1/2"><p>
                We do software testing
                  or flawless products. With a purpose. </p>
            </div>

            <div className="home-blue-btn-container w-1/2 ml-auto">
                <button className='home-blue-btn text-white'>
                    Get in touch
                </button>
            </div>

        </div>
    )
}

export default Home;