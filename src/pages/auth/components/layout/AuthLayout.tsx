import { FC, ReactNode } from "react";
import { Typography } from "antd";

import { Logo } from "components/Icons";

import {
  AuthContainer,
  LeftBlock,
  RightBlock,
  StyledButton,
  StyledContent,
  StyledImageBlock,
  StyledImageRightBlock,
  StyledText,
} from "./AuthLayout.style";

interface IAuthLayout {
  title?: string;
  description?: string;
  submitText?: string;
  children?: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({
  title,
  description,
  submitText,
  children,
}) => {
  return (
    <AuthContainer>
      <LeftBlock>
        <div>
          <StyledImageBlock>
            <Logo size={320} />
          </StyledImageBlock>
          <StyledText>{description}</StyledText>
        </div>
      </LeftBlock>
      <RightBlock>
        <StyledContent>
          <StyledImageRightBlock>
            <Logo size={80} />
          </StyledImageRightBlock>
          <Typography.Title
            level={2}
            style={{ textAlign: "center", color: "#353740" }}
          >
            {title}
          </Typography.Title>
          <div>{children}</div>
          {submitText && (
            <StyledButton type="primary">{submitText}</StyledButton>
          )}
        </StyledContent>
      </RightBlock>
    </AuthContainer>
  );
};

export default AuthLayout;
