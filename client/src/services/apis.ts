import {
  setUserData,
  setLoading,
  setError,
  resetUserData,
} from "@/redux/slices/user-slice";
import type { AppDispatch } from "@/redux/store";
import api from "@/utils/axios";

export const getCurrentUser = async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    const result = await api.get("/api/user/current-user", {
      withCredentials: true,
    });

    dispatch(setUserData(result.data.user));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError((error as Error).message));
  }
};

export const logout = async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await api.get("/api/auth/logout", {
      withCredentials: true,
    });
    dispatch(resetUserData());
    return result.data;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError((error as Error).message));
  }
};
