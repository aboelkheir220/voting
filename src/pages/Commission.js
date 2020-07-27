import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'


 const Commission = () => {
    return (
        <>
        <div className="commission">
            <h2>الهيئة</h2>
            <Link to="/define">تعريف بالهيئة</Link>
            <Link to="/consist">تشكيل مجلس الادراة</Link>
            <Link to="/doing">تشكيل الجهاز التنفيذى</Link>
            <Link to="/desision">قرارات انتخابات الشيوخ</Link>
            <Link to="/follow">قرارات بشأن المتابعة</Link>      
          </div>
          <Footer />
          </>
    )
}
export default Commission;