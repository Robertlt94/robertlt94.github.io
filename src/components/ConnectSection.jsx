import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const ConnectSection = () => {
    const {connects} = useContext(MyInfoContext);

    return (
        <section className='connect-section' id="connect">
            <h1 className='sub-headers' id="bottom-of-page">Connect with me:</h1>
            <div className='connect-container'>
                {connects.map(((connect, index) => {
                    return (
                        <a href={connect.link} className="each-connect">
                            <div key={index} >
                                <div>
                                    {connect.logo}
                                </div>
                                <h1>{connect.platform}</h1>
                            </div>
                        </a>
                    )
                }))}
            </div>
        </section>
    );
};

export default ConnectSection;