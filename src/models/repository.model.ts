export interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export type RepositoriesContextType = {
  isShowingModal: boolean;
  repositories: Repository[];
  favRepositoriesIds: number[];
  favRepositories: Repository[];
  updateModalState: (state: boolean) => void;
  updateRepositories: (repos: Repository[]) => void;
  addFavRepository: (repo: Repository) => void;
  removeFavRepository: (id: number) => void;
}
