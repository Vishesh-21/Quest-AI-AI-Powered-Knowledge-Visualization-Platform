import api from "@/utils/axios";

export const getCurrentUser = async () => {
  const result = await api.get("/api/user/current-user", {
    withCredentials: true,
  });

  return result.data;
};
