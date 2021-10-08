import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import society from './data.js';

const Title = styled.h1`
  font-size: 1.5em;
  color: #EA698B;
`;
const Desc = styled.h1`
  font-size: 1.5em;
  // color: #822FAF;
  color: #C77DFF;
`;
const ImgWrapper = styled.div`
margin: auto;
`;
const Img = styled.img`
  display: block;
  max-width:800px;
  max-height:350px;
  width: auto;
  height: auto;
`;
const Wrapper = styled.div`
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 3.5px );
// -webkit-backdrop-filter: blur( 3.5px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 80vw;
  margin : auto;
  height: 100vh;
`;
const Container = styled.section`
  padding-top: 4em;
  width: 99vw;
  margin : auto;
  height: 100vh;
  background: rgb(151,58,168);
  background: linear-gradient(rgba(151,58,168,1) 0%, rgba(71,18,107,1) 100%);
`;

function Soc() {

//   let { id:societyKey } = useParams(); 
//   // console.log(societyKey)
//   const socToDis = society[societyKey]
//   // console.log(socToDis)

//   let images = socToDis.img;
//   let list = images.map((item, index) => (<ImgWrapper key={index}><Img src={item} alt="Image"/></ImgWrapper>))
  // console.log(society[1])
  return <Container> 
    <Wrapper>
      <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true} interval={3000}>
        {/* {list} */}
        <ImgWrapper key="1"><Img src="../Assets/societies/mlsc/mlsc-1.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="2"><Img src="../Assets/societies/mlsc/mlsc-2.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="3"><Img src="../Assets/societies/mlsc/mlsc-3.jpg" alt="Image"/></ImgWrapper>
      </Carousel>
      <Title>
          Society - MLSC
      </Title>
      <Desc>
      Microsoft Learn Student Chapter is a technical society devoted to elevating the coding culture of Thapar Institute of Engineering and Technology by mentoring and motivating its students to refine their critical thinking, logical reasoning, and coding skills. MLSC was formed with the motive of providing the students a dynamic platform that serves as nodes of activity for not only its members but the computing community at large, offering all possible resources and opportunities to learn, master, and polish their abilities. We value holistic growth which includes injecting soft skills along with cultivating a  progressive mindset. MLSC effectuates it by organizing numerous technology-driven events including seminars, lectures, and the opportunity to meet peers and experts in many fields of interest, tech meetups, and Hackathons, and promoting team building. In the long run, MLSC plans to foster nurture young minds of TIET to a magnitude where they are proficient enough to compete amongst the nonpareil, thus upheaving the name of TIET.
      </Desc>
    </Wrapper>
  </Container>     
}

export default Soc;