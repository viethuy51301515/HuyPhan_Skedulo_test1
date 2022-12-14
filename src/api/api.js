import { Octokit } from "octokit";
const AUTH_PERSONAL_KEY = "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";
export const fetchUsers = async (query) => {
  const octokit = new Octokit({
    auth: AUTH_PERSONAL_KEY,
  });
  let users = await octokit.request("GET /search/users", {
    q: query,
    per_page: 100,
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  return users.data.items;
};
