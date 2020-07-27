import React from 'react'
import img1 from '../images/1.jpeg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpeg'
import img6 from '../images/6.jpg'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'

 const Events = () => {
    return (
        <>
        <div className="event">
             <h2>اخبار و احداث الهيئة الرسمية للانتخابات</h2>
             <div className="row">
                 <div className="col">
                       <img src={img1} alt="hh" />
                       <h4>استقبال وفد جامعة الدول العربية وتوقيع بروتوكول التعاون</h4>
                       <Link to="/more">المزيد ...</Link>
                 </div>
                 <div className="col">
                 <img src={img2} alt="hh" />
                 <h4>رئيس الهيئة الوطنية يستقبل وفود المنظمات الدولية والإقليمية المتابعة للانتخابات الرئاسية</h4>
                 <Link to="/more">المزيد ...</Link>
                     </div>
                     <div className="col">
                     <img src={img3} alt="photo" />
                     <h4>حضور وفد من الهيئة الوطنية للانتخابات المؤتمر الدولى عن الانتخابات برومانيا</h4>
                     <Link to="/more">المزيد ...</Link>
                     </div>
             </div>
             <div className="row">
                 <div className="col">
                       <img src={img4} alt="photo" />
                       <h4>الدورة التدريبية لمنظمة المرأة العربية عن مراقبة الانتخابات</h4>
                       <Link to="/more">المزيد ...</Link>
                 </div>
                 <div className="col">
                 <img src={img5} alt="photo" />
                 <h4>مشاركة الهيئة بالملتقي الثاني للإدارات الانتخابية في جامعة الدول العربية</h4>
                 <Link to="/more">المزيد ...</Link>
                     </div>
                     <div className="col">
                     <img src={img6} alt="photo" />
                     <h4>خطابات وكلمات السيد رئيس الهيئة الوطنية للانتخابات</h4>
                     <Link to="/more">المزيد ...</Link>
                     </div>
             </div>

        </div>
        <Footer />
        </>
    )
}
export default Events;