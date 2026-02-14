import React from 'react';
import { createPortal } from 'react-dom';
import Card from './Card';

const Modal: React.FC<{
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="absolute right-17 top-18 z-50">
      <Card fileName="Modal.tsx">{children}</Card>
    </div>,
    document.body
  );
};

export default Modal;
