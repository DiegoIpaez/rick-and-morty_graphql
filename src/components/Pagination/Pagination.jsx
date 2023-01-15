import { usePagination } from '../../hooks/usePagination';

export default function Pagination({ page, setPage, info, pageSize = 9 }) {
  const totalPages = info ? info.pages : '...';
  const pagination = usePagination(page, totalPages , pageSize);
  const nextPage = () => {
    if (!info) return null;
    if (info?.pages <= page) return null;
    setPage(page + 1);
  };
  const prevPage = () => {
    if (!info) return null;
    if (page <= 1) return null;
    setPage(page - 1);
  };
  return (
    <>
      <h5 className="text-center text-secondary">
        Page {!totalPages ? 0 : page} of {!totalPages ? 0 : totalPages}
      </h5>
      <div className="d-flex justify-content-center my-3">
        <button
          disabled={page === 1 || !totalPages}
          className="btn btn-dark me-2 rounded-pill px-4 shadow"
          onClick={() => prevPage()}>
          Prev
        </button>
        <nav aria-label="...">
          <ul className="pagination pagination m-0">
            {page > pageSize && (
              <li
                onClick={() => setPage(1)}
                className="page-item me-2"
                aria-current="page">
                <span className="page-link text-secondary">1...</span>
              </li>
            )}
            {pagination.map((data) => (
              <li
                onClick={() => setPage(data)}
                key={data}
                className={data === page ? 'page-item active' : 'page-item'}
                aria-current="page">
                <span className="page-link text-secondary">{data}</span>
              </li>
            ))}
            <li
              onClick={() => setPage(totalPages ?? 1)}
              className={
                totalPages === page ? 'page-item active ms-2' : 'page-item ms-2'
              }
              aria-current="page">
              <span className="page-link text-secondary">...{totalPages}</span>
            </li>
          </ul>
        </nav>
        <button
          disabled={(info && page === info.pages) || !totalPages}
          className="btn btn-dark ms-2 rounded-pill px-4 shadow"
          onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </>
  );
}
