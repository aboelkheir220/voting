import React from 'react'
import Footer from './Footer'
import flag from '../images/flag.jpg'
import {Link} from 'react-router-dom'

export const Result = () => {
    return (
        <>
        <div className="results">
          <h2>صفحة النتائج</h2>
          <table border="1" cellSpacing="0" width="500px" align="center" class="name" >
    <tr>
      <td >عدد المنتخبين </td>
      <td>50000000</td>
    </tr>
        <tr>
      <td>عدد الاصوات الصحيحه</td>
      <td>48000000</td>
    </tr>
            <tr>
      <td>عدد الاصوات الباطلة</td>
      <td>2000000</td>
    </tr>
  </table>
  <h2 >اسماء جميع المرشحين</h2>
  <table border="1" cellSpacing="0" width="500px" align="center" class="name" >
         <tr>
                 <td >اسم المرشح</td>
                <td>عدد الاصوات </td>
              </tr>
            <tr>
                 <td>رمضان تهامى</td>
                <td>27000000</td>
              </tr>
               <tr>
                 <td> محمد خالد </td>
                <td>5000000</td>
              </tr>
                  <tr>
                 <td> كريم خالد</td>
                <td>500000</td>
              </tr>
                     <tr>
                 <td>محمد حسين</td>
                <td>500000</td>
              </tr>
                        <tr>
                 <td>محمد احمد</td>
                 <td>5000000</td>
              </tr>
                           <tr>
                 <td>حسين عزت</td>
                <td>50000000</td>
              </tr>
                              <tr>
                 <td>سمير سعيد</td>
                <td>500000</td>
              </tr>   <tr>
                 <td>ايمان</td>
                <td>5000000</td>
              </tr>
                              
       </table>
       <h2 >المرشح الفائز</h2>
          <img  src={flag} alt="flag" /> 
          <table border="1" cellSpacing="0"  width="500px" align="center"  >
              <tr>   
                <td>الاسم</td>
                <td >محمد حسين عبدالفتاح</td>
              </tr>
              <tr>
                 <td>الرمز</td>
                <td >الاسد</td>
              </tr>
              <tr>
                 <td >العمر</td>
                <td >21</td>
              </tr>
              <tr>
                 <td >المهنه</td>
                <td >مهندس</td>
              </tr>
              <tr>
                 <td>عدد الاصوات</td>
                <td >1500</td>
              </tr>

            </table>
            <button>
                <Link to="/">
                    العودة الى الصفحة الرئيسية
                </Link>
            </button>
        </div>
        
        <Footer />
        </>
    )
}
