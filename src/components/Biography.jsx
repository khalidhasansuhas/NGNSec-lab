import React from 'react';
import Footer from './Footer';

const Biography = () => {
    return (
        <div>
            <section>
                <h3 className='pt-10 pl-12 font-bold text-3xl'>Biography:</h3>
                <p className='px-12 text-justify pt-5'>
                    Carol Fung received her PhD degree in computer science from the University of Waterloo (Canada). Her research area is network management and cyber security, including trust management, resource allocation, game theory, Bayesian inference theory and crowdsourcing. Her research has applications in SDN/NFV networks, 5G networks, cyber security and smartphone networks. She is the recipient of the IEEE/IFIP IM Young Professional Award in 2015, University of Waterloo Alumni Gold Medal in 2013, best paper awards three times in IM/NOMS. She also received numerous prestige awards and scholarships including Google Anita Borg scholarship, NSERC Postdoc fellowship, David Cheriton Scholarship, NSERC Postgraduate Scholarship, and President's graduate scholarship in UoW.
                </p>
            </section>
            <section>
                <h3 className='pt-10 pl-12 font-bold text-3xl'>Honours and Awards:</h3>
                <p className='px-12 text-justify pt-5'>
                    IEEE/IFIP IM 2015 Young Professional Award <br />
                    Alumni Gold Medal, University of Waterloo 2013 <br />
                    Best disertation award in IM 2013 <br />
                    NSERC Postdoc Fellowship 2013-2015 <br />
                    Google Global Community Scholarship 2011 <br />
                    Google Anita Borg Memorial Scholarship 2011 <br />
                    Best student paper award in CNSM 2010 <br />
                    Best paper award in IM 2009 <br />
                </p>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Biography;