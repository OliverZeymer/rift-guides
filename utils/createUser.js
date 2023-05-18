export async function createUser(email, password, toast, setIsLoading, switchAuthModeHandler) {
  try {
    setIsLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      toast.success("You have successfully created an account! Please log in below.", {
        autoClose: 4000,
      });
      switchAuthModeHandler();
    } else {
      toast.error(data.message || "Something went wrong!");
    }
    return response;
  } catch (error) {
    toast.error("An error occurred while creating an account.");
    return null;
  } finally {
    setIsLoading(false);
  }
}
