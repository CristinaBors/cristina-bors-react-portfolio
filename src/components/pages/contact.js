import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";



export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left_column'
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className='right-column'>

                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className='text'>
                            555-555-5555
                        </div>


                    </div>
                </div>


                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className='text'>
                            cbors@example.com
                        </div>


                    </div>
                </div>

                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className='text'>
                            Chisinau, Moldova
                        </div>


                    </div>
                </div>
    



            </div>

        </div>
    );
}