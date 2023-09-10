export async function callNextApi<TData, TResponse>(
  route: string,
  data?: TData
): Promise<TResponse> {
  const options = {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(`/api/${route}`, options);
    if (!response.ok) {
      throw new Error("Erreur lors de la requête");
    }
    return (await response.json()) as TResponse;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    throw error;
  }
}
