import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalBodyStyle, ModalButtonClose, ModalFooterStyle, ModalHeaderStyle, ModalOverlay, ModalStyle, ModalWrapper } from "./styles";

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
};

interface ModalHeaderProps {
  toggle: () => void;
};

const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        e.stopImmediatePropagation();

        isShowing && toggle();
      }
    }

    window.addEventListener('keyup', listener);

    return (() => window.removeEventListener('keyup', listener));
  }, [isShowing, toggle]);

  return (
    isShowing ? ReactDOM.createPortal(
      <ModalOverlay>
        <ModalWrapper>
          <ModalStyle>
            { children }
          </ModalStyle>
        </ModalWrapper>
      </ModalOverlay>, document.body
    ) : null
  )
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ toggle, children }) => (
  <ModalHeaderStyle>
    { children || 'Title' }
    <ModalButtonClose  onClick={ toggle } size={30} />
  </ModalHeaderStyle>
);

export const ModalBody: React.FC = ({ children }) => (
  <ModalBodyStyle>
    { children }
  </ModalBodyStyle>
);

export const ModalFooter: React.FC = ({ children }) => (
  <ModalFooterStyle>
    { children }
  </ModalFooterStyle>
);

export default Modal;
