import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};