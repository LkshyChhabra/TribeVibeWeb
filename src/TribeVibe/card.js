import React from 'react';
import './homepage.css'
import styled from 'styled-components';
// import './Assets/DalekPinpointBold.tff';
import {animated} from 'react-spring';
import { Link } from 'react-router-dom'

const Aux=styled(animated.div)`
background-color:green,;

font-family:Dalek;
letter-spacing:2vh;
`;

const Img1=styled(animated.div)`
border-radius: 4% 4%;
    left: 0;
    bottom: -11px;
    position: absolute;
    z-index: -5;
`;
const Img2=styled(animated.div)`
border-radius: 4% 4%;
    left: 0;
    bottom: -11px;
    position: absolute;
    z-index: -4;
`;
const Img3=styled(animated.div)`
border-radius: 4% 4%;
    left: 0;
    bottom: -11px;
    position: absolute;
    z-index: -3;
`;
const Img4=styled(animated.div)`
border-radius: 4% 4%;
    left: 0;
    bottom: -11px;
    position: absolute;
    z-index: -2;
`;
const Img5=styled(animated.div)`
border-radius: 4% 4%;
    left: 0;
    bottom: -11px;
    position: absolute;
    z-index: -1;
`;

const Btn=styled(animated.div)`
font-size:40%;
text-shadow: none;
color:white;
width: 25%;
border-radius: 0 18px;
height: 3rem;
background: rgba(165, 71, 165,0.6);
border: none; 
margin: 0 auto;
padding-top: 2.5%;
`;

const card =(props)=>{
    // console.log("running");
    // console.log(props.xys);
    
    const trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(200px) translateZ(${60}px) skewX(${y/3}deg)  skewY(${x/3}deg) scale(${s})`;

    };

    const btnTrans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${29}px) skewX(${y/3}deg)  skewY(${x/3}deg) scale(${s})`;

    };

    const img1Trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${10}px) skewX(${y/8}deg)  skewY(${x/8}deg) scale(${s})`;

    };

    const img2Trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${12}px) skewX(${y/7}deg)  skewY(${x/7}deg) scale(${s})`;

    };

    const img3Trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${14}px) skewX(${y/6}deg)  skewY(${x/6}deg) scale(${s})`;

    };

    const img4Trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${16}px) skewX(${y/5}deg)  skewY(${x/5}deg) scale(${s})`;

    };

    const img5Trans = (x, y, s) => {
        if(x!==0 || y!==0)
        return `perspective(400px) translateZ(${18}px) skewX(${y/4}deg)  skewY(${x/4}deg) scale(${s})`;

    };










    return(
        <div className="card">
            <Img1 style={{
                transform: props.xys.xys.interpolate(img1Trans)
                 }}>
                <img style={{height: '70vh',width: '56rem',borderRadius: '8%'}} alt="" src={'https://atroposjs.com/images/header/atropos-bg.svg'}></img>
            </Img1>
            <Img2 style={{
                transform: props.xys.xys.interpolate(img2Trans)
                 }}>
                <img style={{height: '67vh',width: '56rem',borderRadius: '4%'}} alt="" src={'https://atroposjs.com/images/header/atropos-mountains.svg'}></img>
            </Img2>
            <Img3 style={{
                transform: props.xys.xys.interpolate(img3Trans)
                 }}>
                <img style={{height: '67vh',width: '56rem',borderRadius: '4%'}} alt="" src={'https://atroposjs.com/images/header/atropos-forest-back.svg'}></img>
            </Img3>
            <Img4 style={{
                transform: props.xys.xys.interpolate(img4Trans)
                 }}>
                <img style={{height: '67vh',width: '56rem',borderRadius: '4%'}} alt="" src={'https://atroposjs.com/images/header/atropos-forest-mid.svg'}></img>
            </Img4>
            <Img5 style={{
                transform: props.xys.xys.interpolate(img5Trans)
                 }}>
                <img style={{height: '67vh',width: '56rem',borderRadius: '4%'}} alt="" src={'https://atroposjs.com/images/header/atropos-forest-front.svg'}></img>
            </Img5>
             <Aux style={{
                transform: props.xys.xys.interpolate(trans)
                 }}>
                 TRIBE VIBE
             </Aux>
             
             <Link to="/societies" style={{ textDecoration: 'none' }}>
                <Btn style={{
                    transform: props.xys.xys.interpolate(btnTrans)
                    }}>
                    Get Started
                </Btn>
             </Link>

        </div>
    );
}

export default card;


// skewY(${y}deg) skew(${x}deg)