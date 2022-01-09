import styled, { css } from "styled-components";

import { colors } from "../assets/style/variables";

interface Props {
  className?: string;
  children: React.ReactNode;
  hasIcon?: boolean;
  hasBoxShadow?: boolean;
  variant?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  hasIcon,
  hasBoxShadow,
  variant,
  fullWidth,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      hasBoxShadow={hasBoxShadow}
      variant={variant}
      hasIcon={hasIcon}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  hasBoxShadow: boolean | undefined;
  variant: string | undefined;
  hasIcon: boolean | undefined;
  fullWidth: boolean | undefined;
}

const StyledButton = styled.button<StyledButtonProps>`
  font-size: 1.2rem;
  transition: background-color 0.2s ease;
  font-weight: 600;
  padding: 1.6rem 2.8rem;
  border-radius: 24px;
  background: ${colors.violet};
  color: ${colors.white};
  white-space: nowrap;
  width: ${({ fullWidth }) => fullWidth && "100%"};
  ${({ variant }) =>
    variant === "red" &&
    css`
      background: ${colors.red};
    `};

  ${({ variant, theme }) =>
    variant === "light" &&
    css`
      background: ${theme.lightGreyTertiaryToLightDarkSecondary};
      color: ${theme.lightVioletSecondaryToWhite};
    `};

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding: 0.8rem 0.8rem;
    `};

  ${({ hasBoxShadow }) =>
    hasBoxShadow &&
    css`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    `};

  &:hover {
    background: ${colors.lightViolet};

    ${({ variant }) =>
      variant === "red" &&
      css`
        background: #ff9797;
      `}

    ${({ variant, theme }) =>
      variant === "light" &&
      css`
        background: ${theme.lightVioletTertiaryToWhite};
        color: ${colors.lightVioletSecondary};
      `}
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Button;
