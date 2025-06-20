
import { Navigate } from "react-router-dom";

// Redirect to dashboard since we're using a layout-based approach
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
