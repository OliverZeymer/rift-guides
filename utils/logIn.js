export async function logIn(email, password, router, toast, setAuth, setCookie, setIsLoading) {
  try {
    setIsLoading(true);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setAuth({
        token: data?.token.toString(),
        user: data?.user,
      });
      setCookie("token", data?.token, {
        days: 1,
      });

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
