import React from 'react'
import { FaPhone ,FaFacebookMessenger } from 'react-icons/fa';
import Footer from '../component/Footer';

 const Complaints = () => {
    return (
        <>
        <div className="complaint">
            <h2>الشكاوى</h2>
            <div align="center" className="service">
                <h3>لمخاطبة خدمة العملاء</h3>
                < FaFacebookMessenger fontSize="70" />

            </div>
            <div align="center" className="cal">
                <h3>الخط الساخن</h3>
                <h4>1234</h4>
                <FaPhone  fontSize="70"/>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Complaints;