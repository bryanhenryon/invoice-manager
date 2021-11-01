import styled from 'styled-components';
import { colors, breakpoints } from '../assets/style/variables';

export const Sidebar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='26'>
            <path
              fill='#FFF'
              fillRule='evenodd'
              d='M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z'
            />
          </svg>
        </Logo>
        <Shade />
      </LogoContainer>

      <SwitchThemeButton>
        <MoonIcon width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z'
            fillRule='nonzero'
          />
        </MoonIcon>
      </SwitchThemeButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #373b53;

  @media ${breakpoints.md} {
    flex-direction: column;
    border-radius: 0 2rem 2rem 0;
    overflow: hidden;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  background: ${colors.violet};
  border-radius: 0 2rem 2rem 0;
  overflow: hidden;
`;

const Logo = styled.div`
  position: relative;
  z-index: 1;
  padding: 3.2rem;
`;

const MoonIcon = styled.svg`
  fill: #7e88c3;
  transition: 0.2s ease;
`;

const Shade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${colors.lightViolet};
  border-radius: 2rem 0 2rem;
  height: 50%;
`;

const SwitchThemeButton = styled.button`
  padding: 3.2rem;

  &:hover ${MoonIcon} {
    fill: #f0c420;
  }
`;
export default Sidebar;
