import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faBriefcase,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const Stats = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    const statsSection = statsRef.current;

    const handleScroll = () => {
      const rect = statsSection.getBoundingClientRect();
      const isStatsVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isStatsVisible) {
        setIsVisible(true);
        setCountKey((prevKey) => prevKey + 1); // Increment key to force re-render
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="stats" id="stats" ref={statsRef}>
        <h2>Achievements</h2>
        <div className="container">
          <div className="box">
            <FontAwesomeIcon icon={faUsers} size="3x" />
            {isVisible && (
              <CountUp
                key={countKey}
                start={0}
                end={300}
                duration={5}
                className="number"
              />
            )}
            <span className="text">Clients</span>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faUserGraduate} size="3x" />
            {isVisible && (
              <CountUp
                key={countKey}
                start={0}
                end={400}
                duration={5}
                className="number"
              />
            )}
            <span className="text">Students</span>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faStar} size="3x" />
            {isVisible && (
              <CountUp
                key={countKey}
                start={0}
                end={12}
                duration={5}
                className="number"
              />
            )}
            <span className="text">Experience</span>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faBriefcase} size="3x" />
            {isVisible && (
              <CountUp
                key={countKey}
                start={0}
                end={500}
                duration={5}
                className="number"
              />
            )}
            <span className="text">Consulting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
