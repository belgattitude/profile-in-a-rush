import type { NextApiRequest, NextApiResponse } from 'next';
import { getGithubRepos } from '../../../backend/github/getGithubRepos';

export default async function apiGithubProjectsRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  const data = await getGithubRepos();
  const repos = data.viewer.repositories.nodes;
  const body = repos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      homepageUrl: repo.homepageUrl,
      stargazerCount: repo.stargazerCount,
      primaryLanguage: repo.primaryLanguage?.name,

      forkCount: repo.forkCount,
      url: repo.projectsUrl,
      createdAt: repo.createdAt,
      updatedAt: repo.updatedAt,
      isFork: repo.isFork,
      visibility: repo.visibility,
    };
  });

  res.status(200).send(JSON.stringify(body, null, 2));
}
