import React, { Component } from 'react'
import {Link }  from 'react-router-dom'
import items from '../data'
import { FaChevronCircleDown } from 'react-icons/fa';
import Footer from '../component/Footer'




export default class Home extends Component {
    render() {
        return (
            <>
            <div className="home">
                <div className="show">
                <h2>التحقق من بيناتك الشخصيه</h2>
                <button>
                <Link className="btn" to="search">التحقق</Link>
                </button>
                </div>
                <div className="vote">
                <h2>للتصويت و انتخاب المرشحين</h2>
                <button>
                <Link to="/vote">تصويت</Link>
                </button>
                </div>
                <div className="result">
                <h2>لمتابعة النتائج</h2>
                <button>
                <Link to="/result">النتائج</Link>
                </button>
                </div>
               
            </div>
            <div className="info">
                    <p>مرحباً بكم في الموقع الرسمي للهيئة الوطنية للانتخابات، المكلفة بالإشراف على جميع الانتخابات والاستفتاءات المصرية.
                        نعرض هنا بعض المعلومات المهمة عن انتخابات مجلس الشيوخ ٢٠٢٠
                    </p>
                    <Link to="more">المزيد ...</Link>
                </div>
                <div className="important">
                    <div className="heads" >
                        <h4 >اعلانات هامة</h4>
                       <FaChevronCircleDown />
                    </div>
                    <ul>
                          {items.map((item,index) =>
                            <li key={index}>
                                <Link to="/more">{item.sys.name}</Link>
                            </li>
                          )}
                    </ul>
                </div>
                <Footer />
                </>

        )
    }
}
