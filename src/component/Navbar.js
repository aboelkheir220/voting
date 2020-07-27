import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/vote.jpeg'

 const Navbar = () => {
    return (
        <>
            <div className="header">
            <img src={logo} alt="logo" />
            <p>الموقع الرسمى  </p>
            <h3>الهيئةالوطنية للانتخابات</h3>
            <h1>E-VOTING</h1>
            </div>
            <div className="item">
            <ul>
                <li>
                    <Link to="/"> الرئيسية</Link>
                </li>
                <li>
                    <Link  to="/commission"> الهيئة</Link>
                </li>
                <li>
                    <Link to="/agenda"> المواعيد</Link>
                </li>
                <li>
                    <Link to="/events"> الاحداث</Link>
                </li>
                <li>
                    <Link to="/rules"> القوانين</Link>
                </li>
                <li>
                    <Link to="/egyption"> المصريون بالخارج</Link>
                </li>
                <li>
                    <Link to="/complaints"> الشكاوى</Link>
                </li>

            </ul>
            </div>
        </>
           )
}
export default Navbar;