import React from 'react';

const Testing = () => {
    return (
        <div className="w-full bg-white pl-20 pr-20 pt-40 pb-10">

            <div className="w-full flex flex-row pl-20 mb-28">
                <div className="text-blue-700 text-6xl  bg-red-900 ">
                    <p className="bg-white h-full w-full">Manual testing</p>
                </div>

                <div className="pl-24 pr-20 text-xs text-blue-700 leading-relaxed	tracking-widest mt-24">
                    <p className="mb-4">We take the role of the user and test your products into<br></br>
                    terms of functionality, design, and usability.
                </p>

                    <p className="mb-5">We offer the following manual testing services for web,<br></br>
                    mobile, and desktop apps.
                </p>

                    <p className="ml-4">
                        <ul className="list-disc">
                            <li>Test plan creation</li>
                            <li>Functional testing</li>
                            <li>Regression testing</li>
                            <li>UI testing, cross-browser testing</li>
                            <li>Usability and accessibility testing</li>
                        </ul>
                    </p>
                </div>
            </div>


            <div className="w-full mb-16 flex flex-row pl-20 mb-28">
                <div className="text-blue-700 text-6xl  bg-red-900">
                    <p className="bg-white h-full w-full">Automated Testing</p>
                </div>

                <div className="pr-28 text-xs text-blue-700 leading-relaxed	tracking-widest mt-24">
                    <p className="mb-4">Save time and increase your testing coverage with<br></br>
                    automated testing.
                </p>

                    <p className="mb-5">We offer the following the automated services for<br></br>
                    web, mobile, and desktop apps.
                </p>

                    <p className="ml-4">
                        <ul className="list-disc">
                            <li>Api testing</li>
                            <li>Regression testing</li>
                            <li>Ruby, Python</li>
                            <li>Tool selection</li>
                            <li>Review of existing automation</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="w-full mb-16 flex flex-row pl-20 mb-28">
                <div className="text-blue-700 text-6xl  bg-red-900">
                    <p className="bg-white h-full w-full">Perfomance Testing</p>
                </div>

                <div className="pr-32 text-xs text-blue-700 leading-relaxed	tracking-widest mt-24">
                    <p className="mb-4">
                    Ensure customer satisfaction by guaranteeing optimal<br></br> performance during standard and peak workloads. We<br></br> identify key performance criteria, provide you with <br></br>information about speed, stability and scalability, and <br></br> determine which areas need improvement.<br></br>
                    automated testing.
                </p>
                </div>
            </div>

        </div>
    )
}

export default Testing;