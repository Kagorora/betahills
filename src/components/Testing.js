import React from 'react';

const Testing = () => {
    return (
        <div className="Testing w-full bg-white pt-40 pb-10">

            <div className="w-full mb-28">
                <div className="header-list text-6xl  bg-red-900 w-1/2">
                    <p className="bg-white h-full w-full">Manual testing</p>
                </div>

                <div className="w-1/2 ml-auto information-text">
                    <p className="mb-4">We take the role of the user and test your products into
                    terms of functionality, design, and usability.
                </p>

                    <p className="mb-5">We offer the following manual testing services for web,
                    mobile, and desktop apps.
                </p>

                    <p className="">
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


            <div className="w-full mb-28">
            <div className="header-list text-6xl  bg-red-900 w-1/2">
                    <p className="bg-white h-full w-full">Automated Testing</p>
                </div>

                <div className="w-1/2 ml-auto information-text">
                    <p className="mb-4">Save time and increase your testing coverage with
                    automated testing.
                </p>

                    <p className="mb-5">We offer the following the automated services for
                    web, mobile, and desktop apps.
                </p>

                    <p className="">
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

            <div className="w-full">
            <div className="header-list text-6xl  bg-red-900 w-1/2">
                    <p className="bg-white h-full w-full">Perfomance Testing</p>
                </div>

                <div className="w-1/2 ml-auto information-text">
                    <p className="mb-4">
                    Ensure customer satisfaction by guaranteeing optimal performance during standard and peak workloads. We identify key performance criteria, provide you with information about speed, stability and scalability, and  determine which areas need improvement.
                    automated testing.
                </p>
                </div>
            </div>

        </div>
    )
}

export default Testing;