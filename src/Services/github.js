export async function getUserRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}
