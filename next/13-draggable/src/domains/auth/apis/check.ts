export const check = async () => {
  const res = await fetch("https://mocks.com/check", {
    method: "POST",
    cache: "no-store"
  })

  const result = await res.json();
  return result;
}