import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
function Soc(props) {
  let images = society[1].img;
  let list = images.map((item, index) => (<ImgWrapper key={index}><Img src={item} alt="Image"/></ImgWrapper>))
  // console.log(society[1])
  return <Container> 
    <Wrapper>
      <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true} interval={3000}>
        {list}
      </Carousel>
        {/* <Carousel autoPlay showArrows={false} showStatus={false}>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 1"/>
        </ImgWrapper>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 2"/>
        </ImgWrapper>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 3"/>
        </ImgWrapper> 
        </Carousel> */}
      <Title>
          Society - {society[1].name}
      </Title>
      <Desc>
          {society[1].desc}
      </Desc>
    </Wrapper>
  </Container>     
}

export default Soc;