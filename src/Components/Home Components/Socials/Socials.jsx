import React from 'react';
import {FaFacebookF,FaBehance,FaDribbble,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai';
import classes from './Socials.module.css'

const Socials = () => {
    return (
        <>
            <h2>تواصل معي</h2>
            <section className={classes.socials}>
                <div style={{borderBottom: "3px solid #3b5998",cursor:"pointer"}}>
                    <FaFacebookF style={{marginRight:"10px",color:"#3b5998"}}   size="24px"/>
                    FACEBOOK
                </div>
                <div style={{borderBottom: "3px solid #c4302b",cursor:"pointer"}}>
                    <AiFillYoutube style={{marginRight:"10px", color:"#c4302b"}} size="24px"/>
                    YOUTUBE
                </div>
                <div style={{borderBottom: "3px solid #053eff",cursor:"pointer"}}>
                    <FaBehance style={{marginRight:"10px", color:"#053eff"}}     size="24px"/>
                    BEHANCE
                </div>
                <div style={{borderBottom: "3px solid #ea4c89",cursor:"pointer"}}>
                    <FaDribbble style={{marginRight:"10px", color:"#ea4c89"}}    size="24px"/>
                    DRIBBLE
                </div>
                <div style={{borderBottom: "3px solid #00acee",cursor:"pointer"}}>
                    <FaTwitter style={{marginRight:"10px", color:"#00acee"}}     size="24px"/>
                    TWITTER
                </div>
                <div style={{borderBottom: "3px solid #0072b1",cursor:"pointer"}}>
                    <FaLinkedin style={{marginRight:"10px", color:"#0072b1"}}    size="24px"/>
                    LINKEDIN
                </div>
            </section>
        </>
    );
}

export default Socials;
