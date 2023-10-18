import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  // Note: We add the newly logged in user to the query cache to prevent the 'useUser' hook call 'getCurrent' API to refetch user first time the user is logged in because we just have the user and there is no need
  const queryClient = useQueryClient();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("Err", err);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}

export default useLogin;
