import React from 'react';
import concordia from '../asset/concordia.jpg'
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:py-10 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-start pl-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Carol Fung

                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Associate Professor<br />
                            Concordia Institute for <br />
                            Information Systems Engineering<br />
                             
                            Phone: (804)8289731 <br />
                            email: cfung@vcu dot edu <br />
                        </p>

                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src={concordia} alt="" className="object-contain shadow-xl rounded-xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section>
                <h3 className='pt-10 pl-12 font-bold text-3xl'>Research Interests:</h3>
                <p className='px-12 text-justify pt-5'>
                Network management and security management in various systems, including intrusion detection networks, smartphones, social networks, software defined networks and virtualized networks. Provide solutions in trust management, resource management, attack detection, decision and control in networked systems.
                </p>
            </section>
            <section>
                <h3 className='pt-10 pl-12 font-bold text-3xl'> What's New:</h3>
                <p className='px-12 text-justify pt-5 pb-3'>
                Congratulations to Bahman Rashidi for receiving the best paper award for his excellent publication record, asward by the VCU CS department.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Congratulations to Pulkit Rustgi for receiving the 2nd place poster award in VCU DURI workshop.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Congratulations to Bahman Rashidi for receiving NSF student travel grant in IEEE CNS 2016.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol received the IEEE/IFIP IM 2015 Young Professional Award for outstanding research contribution and leadership for young professionals in the field of network and service management
                </p>
                <p className='px-12 text-justify  pb-3'>
                Congratulations to Bahman Rashidi for receiving Outstanding Early-career Student Researcher Award, awarded by computer science department of VCU
                </p>
                <p className='px-12 text-justify  pb-3'>
                Congratulations to Ioana Bara for receiving job offer from Intel Corporation.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Congratulations to Ioana Bara for successfully defending her thesis titled "Detecting Spam on Twitter".
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol's paper, "RecDroid: A Resource Access Permission Control Portal and Recommendation Service for Smartphone Users", is accepted by SMPE 2014.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Farheen Azam, Prathika Kasireddy, and Joshua Hensley won the CS Excellence in Design Award in Senior design Expo, VCU 2014.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Farheen Azam, Prathika Kasireddy, and Joshua Hensley won the Best Poster Award in CAPWIC 2014 with their project "Rapid Response Vehicle Positioning System".
                </p>
                <p className='px-12 text-justify  pb-3'>
                Farheen Azam, Prathika Kasireddy, and Joshua Hensley won the Best Poster Award in CAPWIC 2014 with their project "Rapid Response Vehicle Positioning System".
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol's paper, "Quality of Interaction among Path Computation Elements for Trust-aware Inter-Provider Cooperation", has been accepted by ICC 2014.
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol's new book, "Intrusion Detection Networks: A Key to Collaborative Security", has been published by CRC Press in November 2013 (Amazon link).
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol's paper, "RevMatch:An Efficient and Robust Decision Model for Collaborative Malware Detection", is accepted by IEEE/IFIP Network Operation and Management Symposium 2014
                </p>
                <p className='px-12 text-justify  pb-3'>
                Carol Fung is the recipient of the Alumni Gold Medal from the university of Waterloo in 2013
                </p>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;