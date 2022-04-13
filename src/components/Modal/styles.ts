import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ModalStyle = styled.div`
  z-index: 100;
  background: #f0f5f5;
  position: relative;
  margin: 20px auto;
  border-radius: 4px;
  max-width: 800px;
  padding: 8px;
`

export const ModalHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 8px 20px;
  font-weight: bold;
`

export const ModalButtonClose = styled(MdClose)`
  cursor: pointer;
  font-size: 30px;
`

export const ModalBodyStyle = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ModalFooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px 0;
`
