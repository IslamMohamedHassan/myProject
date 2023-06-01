import React, { useEffect } from "react";
import WOW from "wow.js";
import "wow.js/css/libs/animate.css";
import Image from "./Assets/photo.jpg.png";
import classes from "./Choose.module.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Choose = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const myIcons = (
    <AiFillCheckCircle
      size="28px"
      style={{ marginRight: "5px", marginLeft: "5px" }}
    />
  );

  return (
    <>
    <h2 className="text-center mb-5">المهارات</h2>
    <div className={classes.choose}>
    
      <ul dir="rtl">
        <li className={`${classes.left} wow fadeIn`} data-wow-delay="0.5s">
          {myIcons}
          <section>
            <h3>المهارة الثانية</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>
        <li className="wow fadeIn" data-wow-delay="1s">
          {myIcons}
          <section>
            <h3>المهارة الرابعة</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>
        <li className={`${classes.left} wow fadeIn`} data-wow-delay="1.5s">
          {myIcons}
          <section>
            <h3>المهارة السادسة</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>
      </ul>
      <img
        src={Image}
        alt="Me"
        className="img-fluid"
        width={300}
        height={300}
      />
      <ul>
        <li className={`${classes.right} wow fadeIn`} data-wow-delay="0.5s">
          {myIcons}
          <section>
            <h3>المهارة الأولى</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>

        <li className="wow fadeIn" data-wow-delay="1s">
          {myIcons}
          <section>
            <h3>المهارة الثالثة</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>
        <li className={`${classes.right} wow fadeIn`} data-wow-delay="1.5s">
          {myIcons}
          <section>
            <h3>المهارة الخامسة</h3>
            <p>هذا نص يصف المهارة</p>
          </section>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Choose;
