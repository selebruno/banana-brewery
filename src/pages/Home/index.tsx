import React, { useState } from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import BananaLogo from "assets/banana.png";
import { socialIcons } from "constants/socialIcons";

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
    height: 14rem;
  }
`;

const SocialIconsContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SocialIconWrapper = styled.div`
  margin: 4px;
`;

export default function Home() {
  const [hovering, setHovering] = useState<number | null>(null);
  return (
    <Container className="App">
      <img src={BananaLogo} alt="Banana Logo" />
      <SocialIconsContainer>
        {socialIcons.map((icon, index) => (
          <SocialIconWrapper key={index}>
            <SocialIcon
              bgColor={
                hovering === index ? "var(--secondary-color)" : "transparent"
              }
              onMouseEnter={() => setHovering(index)}
              onMouseLeave={() => setHovering(null)}
              fgColor={
                hovering === index
                  ? "var(--primary-color)"
                  : "var(--secondary-color)"
              }
              url={icon.url}
              network={icon.name}
              style={{ width: "70px", height: "70px" }} // Default size, adjust as needed
            />
          </SocialIconWrapper>
        ))}
      </SocialIconsContainer>
    </Container>
  );
}
