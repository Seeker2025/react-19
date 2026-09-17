import styled from "styled-components";

import { IoMdClose } from 'react-icons/io';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 60px);
  max-height: calc(100vh - 40px);
  /* border: 2px dashed red; */
  overflow: hidden;
  position: absolute;
`;

export const ButtonClose = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  top: 2vh;
  right: 2vw;
  background-color: #bababa;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
`;

export const CrossIcon = styled(IoMdClose)`
  color: #990707;
  font-size: 30px;
  vertical-align: middle;
  text-align: center;
`;


