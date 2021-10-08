import React,{useEffect} from 'react';
// import Path from './path';
import Aos from 'aos';
import "aos/dist/aos.css"
// import TimelineCard from './timlineCard';
const timeLine =(props)=>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <div className="timeline">

        <div className="timelineHeading">Day 1</div>
        <div className="imgs">
            <img data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve1.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve1.png")}/>
        </div>
        <div className="imgs">
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve1.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img data-aos="zoom-in-left" style={{padding:'4%',width:'45vh',height:'20vh'}} alt="" src={require("../Assets/Eve2.png")}/>
        </div>
        <div className="imgs">
            <img data-aos="zoom-in-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve3.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve3.png")}/>
        </div>
        <div className="imgs">
            <img className="hiddenTimelineImgs"data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve4.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img data-aos="zoom-in-left" style={{padding:'4%',width:'45vh',height:'20vh'}} alt="" src={require("../Assets/Eve4.png")}/>
        </div>
        <div className="imgs">
            <img data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve5.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve5.png")}/>
        </div>
        <div  className="timelineHeading">Day 2</div>
        <div className="imgs">
            <img data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve6.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'45vh',height:'20vh'}} alt="" src={require("../Assets/Eve6.png")}/>
        </div>
        <div className="imgs">
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve7.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img data-aos="zoom-in-left" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve7.png")}/>
        </div>
        <div className="imgs">
            <img data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve8.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'45vh',height:'20vh'}} alt="" src={require("../Assets/Eve8.png")}/>
        </div>
        <div  className="timelineHeading">Competitions</div>
        <div className="imgs">
            <img data-aos="fade-up-right" style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve9.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve9.png")}/>
        </div>
        <div className="imgs">
            <img className="hiddenTimelineImgs"style={{padding:'4%',width:'50vh',height:'20vh'}} alt="" src={require("../Assets/Eve10.png")}/>
            <img className="node"style={{width:'6vh',height:'35vh'}} alt="" src={require("../Assets/Node.png")}/>
            <img data-aos="zoom-in-left" style={{padding:'4%',width:'45vh',height:'20vh'}} alt="" src={require("../Assets/Eve10.png")}/>
        </div>
        </div>
        
    );
}

export default timeLine;