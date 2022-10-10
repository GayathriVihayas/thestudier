import React from 'react';
import Topbar from "./component/topbar";
import Section1 from "./component/section1";
import Section2 from "./component/section2";
import Section3 from "./component/section3";
import Section4 from "./component/section4";
import Section5 from "./component/section5";

const Homepage = () => {
    return (
        <div>
            <Topbar/>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    )
}

export default Homepage;