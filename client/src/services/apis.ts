import { setUserData, setLoading, setError } from "@/redux/slices/user-slice";
import type { AppDispatch } from "@/redux/store";
import api from "@/utils/axios";

export const getCurrentUser = async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    const result = await api.get("/api/user/current-user", {
      withCredentials: true,
    });

    dispatch(setUserData(result.data));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError((error as Error).message));
  }
};
