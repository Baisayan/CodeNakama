import LoginUI from "@/module/auth/login-ui";
import { requireUnAuth } from "@/module/auth/auth-utils";

const LoginPage = async () => {
  await requireUnAuth();
  return <LoginUI />;
};

export default LoginPage;
