import React from "react";
import { Route, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
  isVerified: boolean;
  verificationPath: string; // Path to the verification page
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  isVerified,
  verificationPath,
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        isVerified ? (
          children ? (
            <Component {...props}>{children}</Component>
          ) : (
            <Component {...props} />
          )
        ) : (
          <Navigate to={verificationPath} />
        )
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

export default ProtectedRoute;
