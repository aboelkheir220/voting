import React ,{useState} from 'react'
import Footer from '../component/Footer'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
 function Search() {

  
     const [value , setValue] = useState("");
     
     const onChangeHandler = event => {
        setValue(event.target.value);
      };
     const inputAgree = (event) =>{
         
          event.preventDefault();
        if (value.length === 14) {
            return toast.success("عمرك اكثر من 18 عام متاح لك الانتخاب",{position: toast.POSITION.TOP_CENTER , autoClose:false });
 
        } else {
            return toast.warning("من فضلك اعد ادخال الرقم القومى الصحيح مرة اخرى" ,{position:toast.POSITION.TOP_CENTER , autoClose:false } );
        }
         
     }

     return(
                 <>
                <div className="search">
                    <h1>الاستعلام عن لجنتك الانتخابية</h1>
                    <h3>للاستعلام عن مكان لجنتك الانتخابية ورقم اللجنة الفرعية و رقمك في الكشوف الانتخابية برجاء ادخال رقمك القومي المكون من 14 رقم</h3>
                    <form onSubmit={inputAgree}>
                        <input type="text"  placeholder="ادخل الرقم القومى" onChange={onChangeHandler}
                                      value={value} />
                        <button >استعلم</button>

                    </form>
                </div>               
                <Footer />
                </>

            )
    
     }
     export default Search;
