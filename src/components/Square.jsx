export const Square = ({ children, updateBoard, isSelected, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
