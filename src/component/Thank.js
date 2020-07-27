import React from 'react'
import { Link } from 'react-router-dom'

 const Thank = () => {
    return (
        <div className="thank">
            <h2>شكرا لك</h2>
            <h6>تم الانتخاب بنجاح</h6>
            <button>
                <Link to="/">
                    العودة الى الصفحة الرئيسية
                </Link>
            </button>
        </div>
    )
}
export default Thank;