import React from 'react';
import PartnersSlider from '../Components/Home Components/logoSlideShow/logoSlideShow';
import Footer from '../Components/Footer/Footer';
import SearchBar from '../Components/Home Components/Search/Search';
import News from '../Components/Home Components/News/News';
import Navs from '../Components/Navbar/Navbar'
import Header from "../Components/Home Components/Header/Header"
import  Stats from "../Components/Home Components/Stats/Stats"
import Blog from "../Components/Home Components/Blog/Blog"
import Brands from "../Components/Home Components/Brands/Brands"
import Choose from "../Components/Home Components/Choose/Choose"
import Service from "../Components/Home Components/Service/Service"
import Socials from "../Components/Home Components/Socials/Socials"
// import Slides from "../Components/Home Components/logoSlideShow"
// import News from "../Components/Home Components/News"
// import Search from "../Components/Home Components/Search"
// import Footer from "../Components/Footer"

const Home = () => {
    return (
        <div>
            <Navs/>
            <Header/>
            <Stats/>
            <Blog/>
            <Brands/>
            <Choose/>
            <Socials/>
            <Service/>
            <PartnersSlider/>
            <News/>
            <SearchBar/>
            <Footer/>

            




            
        </div>
    );
}

export default Home;
    