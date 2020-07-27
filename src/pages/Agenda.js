import React from 'react'
import Footer from '../component/Footer'
 const Events = () => {
    return (
        <>
        <div className="agenda">
             <h2>اجندة المواعيد</h2>
             <div className="row">
             <div className="col">
             <div className="hs">
                 <h4>17</h4>
                 <span>ابريل</span>
                 </div>
                 <h4>التصويت بالاستفتاء بالخارج</h4>
                 <p>دعوة الناخبين وإعلان الجدول الإجرائي والزمني للاستفتاء ونشره بالجريدة الرسمية</p>
             </div>
             <div className="col">
             <div className="hs">
                 <h4>20</h4>
                 <span>ابريل</span>
                 </div>
                 <h4>التصويت بالاستفتاء بالداخل</h4>
                 <p>دعوة الناخبين وإعلان الجدول الإجرائي والزمني للاستفتاء ونشره بالجريدة الرسمية</p>
             </div>
             <div className="col">
                 <div className="hs">
                 <h4>19</h4>
                 <span>ابريل</span>
                 </div>
                 <h4>دعوة الناخبين</h4>
                 <p>دعوة الناخبين وإعلان الجدول الإجرائي والزمني للاستفتاء ونشره بالجريدة الرسمية</p>
             </div>
             <div className="col">
             <div className="hs">
                 <h4>17</h4>
                 <span>ابريل</span>
                 </div>
                 <h4>إعلان النتيجة </h4>
                 <p>دعوة الناخبين وإعلان الجدول الإجرائي والزمني للاستفتاء ونشره بالجريدة الرسمية</p>
             </div>
             </div>
            
        </div>
        <Footer />
        </>
    )
}
export default Events;