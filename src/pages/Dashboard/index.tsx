import React, { useState, FormEvent, useContext } from "react";
import { getGenericData, searchGithubUser } from "../../services/api";
import { PageTitle, PageTitleContainer, PageContainer, MoreResultsButton } from "../../styles/global";
import animationData from '../../assets/lottie-animations/search-file.json';
import { SearchResultUser, SearchResultUserContextType } from "../../models/user.model";
import UserCard from "../../components/UserCard";
import LinksParser from "../../util/linksParser";
import { UsersContext } from "../../context/app-context";
import {
  Form,
  Error,
  LottieAnimation,
  UsersList,
} from "./styles";

interface Pagination {
  prev: string;
  next: string;
  last: string;
  first: string;
}

const initialPaginationState: Pagination = {
  prev: "",
  next: "",
  last: "",
  first: "",
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>(initialPaginationState);
  const { searchQuery, users, updateUsers, updateSearchQuery } = useContext(UsersContext) as SearchResultUserContextType;

  const handleSearchUser = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    updateUsers([]);
    setPagination(initialPaginationState);
    searchUser(searchQuery);
  }

  async function searchUser (query: string): Promise<void> {
    if (!query) {
      setInputError("Digite o nome de usuário no GitHub");
      setIsLoading(false);
      return;
    }

    try {
      const response = await searchGithubUser(query, {
        q: query,
        per_page: 10
      });
      updateUsers(response.data.items);
      setIsLoading(false);
      if (response.headers.link) {
        setPagination(LinksParser(response.headers.link));
      }

      if (response.data.items.length === 0) {
        setInputError("Sem resultados.");
      } else {
        setInputError("");
      }
    } catch (error) {
      setInputError("Usuário não encontrado!");
      setIsLoading(false);
    }
  }

  async function getChangePage(url: string) {
    try {
      const response = await getGenericData(url);
      updateUsers(users.concat(response.data.items));
      setPagination(LinksParser(response.headers.link));
      setIsLoading(false);
      setInputError("");
    } catch (error) {
      setInputError("Não foi possível conectar ao servidor. Por favor, atualize a página e tente novamente.")
      setIsLoading(false)
    }
  }

  const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    getChangePage(pagination.next);
  }

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
      }
  };

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>Busque por um usuário, acesse perfis e adicione repositórios favoritos.</PageTitle>
      </PageTitleContainer>
      <Form hasError={Boolean(inputError)} onSubmit={ handleSearchUser }>
        <input
          value={ searchQuery }
          onChange={(e) => updateSearchQuery(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <UsersList>
        {users.map((user: SearchResultUser) => (
          <UserCard key={ user.node_id } user={ user } />
        ))}

        {pagination.next !== "" && (
          <MoreResultsButton onClick={handleNextPage}>
            {isLoading ? 'Caregando...' : 'Mais resultados'}
          </MoreResultsButton>
        )}

        {isLoading &&
          <LottieAnimation options={defaultOptions} width="30%" />
        }
      </UsersList>
    </PageContainer>
  );
};

export default Dashboard;
