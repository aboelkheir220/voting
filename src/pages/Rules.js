import React from 'react'
import items from '../data'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'
 const Rules = () => {
    return (
        <>
        <div className="rule">
            <h2>القوانين</h2>
            <ul>
                          {items.map((item,index) =>
                            <li key={index}>
                                <Link to="/">{item.sys.rule}</Link>
                            </li>
                          )}
                    </ul>
        </div>
        <Footer />
        </>
    )
}
export default Rules;