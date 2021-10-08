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
        <ImgWrapper key="1"><Img src="../Assets/societies/faps/faps-1.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="2"><Img src="../Assets/societies/faps/faps-2.jpeg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="3"><Img src="../Assets/societies/faps/faps-3.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="4"><Img src="../Assets/societies/faps/faps-4.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="5"><Img src="../Assets/societies/faps/faps-5.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="6"><Img src="../Assets/societies/faps/faps-6.jpg" alt="Image"/></ImgWrapper>
        <ImgWrapper key="7"><Img src="../Assets/societies/faps/faps-7.png" alt="Image"/></ImgWrapper>
      </Carousel>
      <Title>
          Society - FAPS
      </Title>
      <Desc>
      College Life is indeed incomplete without pursuing one's passion. FAPS Derabassi is here to fix this never-ending problem. We are a team of skilled and creative individuals who strive to bring exceptional opportunities to everyone around us. FAPS Derabassi is a Citadel for Fine Arts, Photography, and Design to flourish. It is the perfect platform to showcase your talent and grow as an Individual. We aim to create a community of like-minded artists who love to express their emotions through their Artwork.
      </Desc>
    </Wrapper>
  </Container>     
}

export default Soc;