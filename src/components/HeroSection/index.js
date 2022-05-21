import React, {useState} from 'react';
// import { Button } from 'react-scroll';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonStyle';
import { HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroStyle';

const HeroSection = () => {
 const [hover, setHover] = useState(false);

 const onHover = () =>{
   setHover(!hover)
 }


  return (
    <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop mute src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign Up for a new account today and receive 250$ in 
            credit towards your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;