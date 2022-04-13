import React, { createContext, ReactNode, useEffect, useState } from "react";
import {Repository, RepositoriesContextType} from "../../models/repository.model";
import { SearchResultUser, SearchResultUserContextType } from "../../models/user.model";


export const RepositoriesContext = createContext<RepositoriesContextType | null>(null);
export const UsersContext = createContext<SearchResultUserContextType | null>(null);

const AppProvider: React.FC<ReactNode> = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [users, setUsers] = useState<SearchResultUser[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false);

  const [favRepositories, setFavRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem('@GithubRepoExplorer:favRepositories');
    if (storedRepositories) return JSON.parse(storedRepositories);
    return [];
  });

  const [favRepositoriesIds, setFavsRepositoriesIds] = useState<number[]>(() => {
    const storedFavRepositoriesIds = localStorage.getItem('@GithubRepoExplorer:favRepositoriesIds');
    if (storedFavRepositoriesIds) return JSON.parse(storedFavRepositoriesIds);
    return [];
  });

  const updateRepositories = (repos: Repository[]) => setRepositories(repos);
  const updateUsers = (providedUsers: SearchResultUser[]) => setUsers(providedUsers);
  const updateSearchQuery = (query: string) => setSearchQuery(query);
  const updateModalState = (state: boolean) => setIsShowingModal(state);

  const addFavRepository = (favRepository: Repository) => {
    setFavsRepositoriesIds([...favRepositoriesIds, favRepository.id])
    setFavRepositories([favRepository, ...favRepositories])
  };
  const removeFavRepository = (id: number) => {
    const newFavRepositories = favRepositories.filter((repository: Repository) => {
      return repository.id !== id;
    });
    const newFavRepositoriesIds = favRepositoriesIds.filter((repoId: number) => {
      return repoId !== id;
    });

    setFavsRepositoriesIds(newFavRepositoriesIds);
    setFavRepositories(newFavRepositories);
  }

  useEffect(() => {
    localStorage.setItem('@GithubRepoExplorer:favRepositoriesIds', JSON.stringify(favRepositoriesIds))
  }, [favRepositoriesIds]);

  useEffect(() => {
    localStorage.setItem('@GithubRepoExplorer:favRepositories', JSON.stringify(favRepositories))
  }, [favRepositories]);

  return (
    <UsersContext.Provider
      value={{ users, updateUsers, searchQuery, updateSearchQuery }}
    >
      <RepositoriesContext.Provider
      value={{ isShowingModal, updateModalState, repositories, favRepositoriesIds, favRepositories, updateRepositories, addFavRepository, removeFavRepository }}>
      { children }
    </RepositoriesContext.Provider>
    </UsersContext.Provider>
  )
}

export default AppProvider;
