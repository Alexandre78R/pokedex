function Pagination ({ currentPage, totalPages, onPageChange }) {

  // Calcule le nombre de pages à afficher avant et après la page courante
  const pagesToShow = 2;
  const pageStart = Math.max(currentPage - pagesToShow, 1);
  const pageEnd = Math.min(currentPage + pagesToShow, totalPages);

  // Génère les boutons pour chaque page à afficher
  const pageButtons = [];
  for (let i = pageStart; i <= pageEnd; i++) {
    pageButtons.push(
      <button key={i} onClick={() => onPageChange(i)}>
        {i}
      </button>
    );
  }

    return (
        <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        )}
        {pageButtons}
        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    )
  }

export default Pagination;