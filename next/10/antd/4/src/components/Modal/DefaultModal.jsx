import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export function DefaultModal({ open, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }

    modalRef.current.addEventListener('close', onClose);

    return () => {
      modalRef.current.removeEventListener('close', onClose);
    };
  }, [open]);

  const onCloseModal = () => {
    modalRef.current.close();
  };

  return (
    <DefaultModal.Container ref={modalRef}>
      <div>dialog</div>

      <button onClick={onCloseModal}>닫기</button>
    </DefaultModal.Container>
  );
}

DefaultModal.Container = styled.dialog`
  width: 400px;
  height: 400px;

  border-radius: 20px;
  border: 1px solid lightgray;
`;
