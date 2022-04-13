export interface SearchResultUser {
  id: number;
  node_id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface User extends SearchResultUser {
  name: string;
  location: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  blog: string;
  followers_url: string;
  following_url: string;
  company: string;
}

export type SearchResultUserContextType = {
  searchQuery: string;
  users: SearchResultUser[];
  updateSearchQuery: (query: string) => void;
  updateUsers: (users: SearchResultUser[]) => void;
}
