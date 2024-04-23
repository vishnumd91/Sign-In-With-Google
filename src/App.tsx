import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { useState } from "react";

const App = () => {
  const [hasToken, setHasToken] = useState(false);
  const successResponse = (response: CredentialResponse): void => {
    setHasToken(true);
  };

  const errorResponse = (): void => {
    console.log("Login Failed");
  };

  const handleLogOut = () => {
    googleLogout();
    setHasToken(false);
  };

  return (
    <>
      <div style={{ margin: "15em 30em", width: "30%" }}>
        {hasToken ? (
          <>
            <h1>Login Successful</h1>
            <button onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <>
            <GoogleLogin onSuccess={successResponse} onError={errorResponse} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
