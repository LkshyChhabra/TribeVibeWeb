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
        <ImgWrapper key="1"><Img src="../Assets/societies/Rotract/Rotract-1.jpeg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="2"><Img src="../Assets/societies/Rotract/Rotract-2.jpeg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="3"><Img src="../Assets/societies/Rotract/Rotract-3.jpeg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="4"><Img src="../Assets/societies/Rotract/Rotract-4.jpeg" alt="Image"/></ImgWrapper>
      </Carousel>
      <Title>
          Society - Rotract
      </Title>
      <Desc>
      Rotaract as an organisation currently function in more than 180+ countries originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, United States, and has grown into a major organization of over 10,904 clubs spread around the world and over 203,000 members and are serving the society with the motto, Self Development | Fellowship through Service.Here at Rotaract you don't only get the chance to become an exemplary leader but also an emotionally intellectual human being who takes on world problems with utmost care and precision to benefit society in the end. 
      </Desc>
    </Wrapper>
  </Container>     
}

export default Soc;