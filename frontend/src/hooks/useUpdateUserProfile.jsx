import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await fetch(`/api/users/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to update profile");
        }
        return data;
      } catch (error) {
        throw new Error(error.message || "Failed to update profile");
      }
    },
    onSuccess: (data) => {
      // Update localStorage and React Query cache for authUser with new data
      if (data) {
        localStorage.setItem("authUser", JSON.stringify(data));
        queryClient.setQueryData(["authUser"], data);
      }
      toast.success("Profile updated successfully");
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        queryClient.invalidateQueries({ queryKey: ["userProfile"] }),
      ]);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update profile");
    },
  });

  return { updateProfile, isUpdatingProfile };
};

export default useUpdateUserProfile;
