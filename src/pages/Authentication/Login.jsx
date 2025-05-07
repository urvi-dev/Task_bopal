import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import VerifyEmail from "./VerifyEmail";
import Password from "./Password";

const Login = () => {
  const [verificationEmail, setVerificationEmail] = useState(null);
  const navigate = useNavigate();

  const RenderAuthStep = () => {
    if (!verificationEmail) {
      return (
        <VerifyEmail
          verificationEmail={verificationEmail}
          setVerificationEmail={setVerificationEmail}
        />
      );
    }

    const isOTPVerified = verificationEmail?.data?.isOTPVerified ?? false;
    const isVerified = verificationEmail?.data?.isVerified ?? false;

    if (isOTPVerified || isVerified) {
      return (
        <Password
          verificationEmail={verificationEmail}
          navigate={navigate}
          setVerificationEmail={setVerificationEmail}
        />
      );
    }

    return null;
  };

  return <RenderAuthStep />;
};

export default Login;
