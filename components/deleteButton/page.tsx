import React from 'react';
import { deleteToDo } from '@/actions/delete-todo'; // Adjust the path as necessary

interface Props {
  id: string;
  onDelete: () => void;
}

const DeleteButton: React.FC<Props> = ({ id, onDelete }) => {
  const handleClick = async () => {
    try {
      await deleteToDo(id);
      onDelete(); // Trigger the parent component to update or re-fetch the data
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteButton;
