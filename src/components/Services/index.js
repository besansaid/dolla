import React from 'react';
import Icon1 from '../../images/pic4.png';
import Icon2 from '../../images/pic5.png';
import Icon3 from '../../images/pic6.png';
import { ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
  ServicesP
} from './ServicesStyle';


const Services = () => {
  return (
    <ServicesContainer id='services'>
     <ServicesH1>Our Services</ServicesH1>
     <ServicesWrapper>

         <ServicesCard>
             <ServicesIcon src={Icon1} />
             <ServicesH2>Reduce Expenses</ServicesH2>
             <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
         </ServicesCard>

         <ServicesCard>
             <ServicesIcon src={Icon2} />
             <ServicesH2>Virtual Office</ServicesH2>
             <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
         </ServicesCard>

         <ServicesCard>
             <ServicesIcon src={Icon3} />
             <ServicesH2>Premium Benefits</ServicesH2>
             <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
         </ServicesCard>

     </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;