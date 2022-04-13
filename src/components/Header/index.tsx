import React, { useContext } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { RepositoriesContext } from "../../context/app-context";
import { RepositoriesContextType, Repository } from "../../models/repository.model";
import IconBadge from "../IconBadge";
import Modal, { ModalBody, ModalHeader } from "../Modal";
import RepositoryCard from "../RepositoryCard";
import {
  HeaderContainer,
  HeaderLogoTitle,
  HeaderTitle,
  GitHubIcon,
  HeaderFavButtonContainer,
  MessageText
} from "./styles";

const Header: React.FC = () => {

  const { favRepositoriesIds } = useContext(RepositoriesContext) as RepositoriesContextType;
  const { favRepositories, isShowingModal, updateModalState } = useContext(RepositoriesContext) as RepositoriesContextType;

  return (
    <HeaderContainer>
        <HeaderLogoTitle>
          <GitHubIcon />
          <HeaderTitle>Github Repo Explorer</HeaderTitle>
        </HeaderLogoTitle>

        <HeaderFavButtonContainer onClick={() => updateModalState(!isShowingModal) }>
          <IconBadge
            badge_amount={favRepositoriesIds.length}
            icon={<BsBookmarkHeartFill size={30} />}
          />
        </HeaderFavButtonContainer>

      <Modal isShowing={isShowingModal} toggle={() => updateModalState(!isShowingModal)}>
        <ModalHeader toggle={() => updateModalState(!isShowingModal)}>
          { favRepositories.length > 0 && favRepositories.length }
          { favRepositories.length === 0 && " Repositórios favoritos" }
          { favRepositories.length > 1 && " Repositórios favoritos" }
          { favRepositories.length === 1 && " Repositório favorito" }
        </ModalHeader>
        <ModalBody>
          {favRepositories.map((repository: Repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}

          { favRepositories.length === 0 &&
            <MessageText>Nenhum repositório salvo.</MessageText>
          }
        </ModalBody>
      </Modal>
      </HeaderContainer>
  )
}

export default Header;
