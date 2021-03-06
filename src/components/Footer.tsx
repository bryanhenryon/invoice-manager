import styled from "styled-components";

import { colors, breakpoints } from "../assets/style/variables";

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => (
  <StyledFooter>
    <CopyrightText>© {currentYear} Bryan Henryon — </CopyrightText>
    <PortfolioLink
      href='https://bryanhenryon.fr'
      target='_blank'
      rel='noopener'
    >
      www.bryanhenryon.fr
    </PortfolioLink>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.4rem;

  @media ${breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

const CopyrightText = styled.span`
  color: ${({ theme }) => theme.darkToWhite};
`;

const PortfolioLink = styled.a`
  color: ${colors.lightVioletSecondary};

  &:hover {
    text-decoration: underline;
  }
`;
export default Footer;
