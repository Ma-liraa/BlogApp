"use client";

import { getUserApi, signinApi, signupApi } from "@/services/authService";
// import { useRouter } from "next/navigation";

import { createContext, useReducer, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthentication: false,
  isLoading: true,
  error: null,
};
const authReduser = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthentication: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthentication: true,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthentication: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
      };
  }
};

export default function AuthProvider({ children }) {
  // const router = useRouter();
  const [{ user, isAuthentication, isLoading, error }, dispatch] = useReducer(
    authReduser,
    initialState
  );
  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      // router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }
  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      // router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }
  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthentication, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context");
  return context;
}
