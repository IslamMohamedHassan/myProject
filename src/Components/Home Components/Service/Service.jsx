import React from 'react';
import classes from './Services.module.css'

import {GrContact} from 'react-icons/gr'



const Service = () => {
   
    return (
        <>
            <div className='row'>
                <div className="col-lg-6" dir='rtl'>
                    <h3>اترك لي رسالة</h3>
                    <p>يمكنك التواصل معي في أي وقت من خلال ترك معلوماتك التالية و سوف يتم التواصل معك في أٌرب وقت</p>
                    <form>
                        <input className={`form-control my-3 ${classes.inputs}`} placeholder='اسم المستخدم'/>
                        <input className={`form-control my-3 ${classes.inputs}`} placeholder='البريد الإلكتروني'/>
                        <input className={`form-control my-3 ${classes.inputs}`} placeholder='رقم الهاتف'/>
                        <select>
                            <option value="option1">+20</option>
                            <option value="option2">+30</option>
                            <option value="option3">+40</option>
                        </select>
                        <select>
                            <option value="option1">EG</option>
                            <option value="option2">KSA</option>
                            <option value="option3">ALG</option>
                        </select>
                        <select>
                            <option value="option1">شكوى</option>
                            <option value="option2">طلب</option>
                            <option value="option3">مديح</option>
                        </select>
                        <button className={classes.confirm}>تأكيد</button>
                    </form>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <GrContact size="132" />
                </div>
            </div>   
        </>
    );
}

export default Service;
