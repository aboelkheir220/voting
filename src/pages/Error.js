import React from 'react'
import {Link } from 'react-router-dom'

 const Error = () => {
    return (
        <div className="error">
            <h2>تعذر تحميل الصفحة</h2>
            <h3>حاول مرة اخرى</h3>
            <button>
                <Link to="/">
                    العودة الى الصفحة الرئيسية
                </Link>
            </button>
        </div>
    )
}
export default Error;