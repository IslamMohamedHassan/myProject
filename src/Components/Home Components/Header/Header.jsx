import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleClick = () => {
    // Add your navigation logic here
    // window.location.href = "https://example.com";
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-sm-12 col-md-6">
            <img
              className="img"
              src="Images/istockphoto-1409751960-612x612.jpg"
              alt="img"
            />
          </div>

          <div className="col-sm-12 col-md-6 left header">
            <h1 className="head">الصيدلانى محمد محمد</h1>
            <p className="content">
              هو الشخص المختص في علم الأدوية ودوره التقليدي يتمثل في صرف الأدوية
              المكتوبة في من الأطباء المختصين مع مراجعة الطرق الصحيحة للاستخدام
              وتبيين المضاعفات والآثار الجانبية للعقاقير. وفي هذا الدور، يتأكد
              الصيدلي من الاستعمال الآمن والفعال للأدوية. ويشترك الصيادلة أيضًا
              في السيطرة على الأمراض، عن طريق مراقبة وتحسين طرق وأساليب العلاج
              أو دراسة نتائج التحاليل المختبرية، بالتعاون مع الأطباء وغيرهم من
              الطاقم الطبي. الصيدلي هو أيضًا المختص في صناعة الأدوية وتتبع عملية
              التركيب ومراقبة الجودة منذ بداية العملية التصنيعية حتى نهايتها
            </p>
            <div className="row">
              <div className="col-6">
                <div className="video-icon vidIcon">
                  <a
                    href="https://youtu.be/2Xf966hFrwc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPlayCircle} size="3x" />
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="link-icon arrowIcon">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    size="3x"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
