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
