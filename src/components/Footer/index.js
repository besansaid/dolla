import React from 'react';
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
 } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>

                <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Term of service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Distinations</FooterLink>
                        <FooterLink to="/">sponsorships</FooterLink>
                    </FooterLinkItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">Submit Videos</FooterLink>
                        <FooterLink to="/">Embassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                        <FooterLink to="/signin">Youtube</FooterLink>
                        <FooterLink to="/signin">Twitter</FooterLink>
                    </FooterLinkItems>
  
                </FooterLinksWrapper>

            </FooterLinksContainer>
            
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;