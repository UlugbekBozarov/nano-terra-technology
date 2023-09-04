import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

import { Logo } from "components/Icons";

import {
  AuthContainer,
  HandleGoText,
  LeftBlock,
  RightBlock,
  StyledButton,
  StyledContent,
  StyledImageBlock,
  StyledImageRightBlock,
  StyledText,
} from "./AuthLayout.style";
import { Box } from "components/common";

interface IAuthLayout {
  title?: string;
  description?: string;
  submitText?: string;
  children?: ReactNode;
  onSubmit?: any;
  go?: {
    text?: string;
    linkText: string;
    link: string;
  };
}

const AuthLayout: FC<IAuthLayout> = ({
  title,
  description,
  submitText,
  onSubmit,
  children,
  go,
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
        <StyledContent onSubmit={onSubmit}>
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
            <StyledButton htmlType="submit" type="primary">
              {submitText}
            </StyledButton>
          )}
          {go && (
            <Box mt={20}>
              <HandleGoText>
                {go?.text}
                <Link to={go?.link || "/"} style={{ marginLeft: "5px" }}>
                  {go?.linkText}
                </Link>
              </HandleGoText>
            </Box>
          )}
        </StyledContent>
      </RightBlock>
    </AuthContainer>
  );
};

export default AuthLayout;
