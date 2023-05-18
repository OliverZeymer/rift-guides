export async function logIn(email, password, router, toast, setToken, setCookie, setIsLoading) {
  try {
    setIsLoading(true);
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      setToken(data?.token);
      setCookie("token", data?.token, { expires: 1 });
      toast.success("You have successfully logged in!");
      router.push("/");
    } else {
      toast.error(data.message || "Something went wrong!");
    }
  } catch (error) {
    toast.error("An error occurred while logging in.");
  } finally {
    setIsLoading(false);
  }
}
