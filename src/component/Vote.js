import React from 'react'
import candidate1 from '..//images/voting/x.jpg'
import candidate2 from '..//images/voting/w.jpg'
import candidate3 from '..//images/voting/imgm.jpg'
import candidate4 from '..//images/voting/imgc.jpg'
import candidate5 from '..//images/voting/f.jpg'
import candidate6 from '..//images/voting/aa.jpg'
import candidate7 from '..//images/voting/q.jpg'
import candidate8 from '..//images/voting/imgg.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom'


 const Vote = () => {
    return (
        <>
        <div className="voting">
            <h2>من فضلك اختر المرشح الذى تريد انتخابه</h2>
            <table border="1px" cellSpacing="0">
                <tr>
                    <td className="number font"> الرقم</td>
                    <td className="font">صورة المرشح</td>
                    <td className="font">اسم المرشح</td>
                    <td className="font">مكان التصويت</td>
                </tr>
           <tr>
                <td className="font number">1</td>
                <td><img className="photo" src={candidate1} alt="candidate" /></td>
                <td className="font">رمضان التهامى</td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">2</td>
                <td><img className="photo" src={candidate2} alt="candidate" /></td>
                <td className="font"> محمد خالد</td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">3</td>
                <td><img className="photo" src={candidate3} alt="candidate" /></td>
                <td className="font"> حسين عزت</td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">4</td>
                <td><img className="photo" src={candidate4} alt="candidate" /></td>
                <td className="font"> محمد حسين عبدالفتاح</td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">5</td>
                <td><img className="photo" src={candidate5} alt="candidate" /></td>
                <td className="font"> محمد أحمد ابوالخير</td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">6</td>
                <td><img className="photo" src={candidate6} alt="candidate" /></td>
                <td className="font">سمير سعيد </td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">7</td>
                <td><img className="photo" src={candidate7} alt="candidate" /></td>
                <td className="font">كريم خالد  </td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            <tr>
                <td className="font number">8</td>
                <td><img className="photo" src={candidate8} alt="candidate" /></td>
                <td className="font">احمد نبيل </td>
                <td><input type="radio" name="vote" className="check" /> </td>
            </tr>
            </table>
            <button>
                <Link to="/thank" >انتخاب</Link>
            </button>
        </div>
        <Footer />
        </>
    )
}
export default Vote;