export default function Pagination({ page, setPage, info }) {
  const totalPages = info ? info.pages : '...';
  const nextPage = () => {
    if (!info) return null;
    if (info?.pages < page) return null;
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
        Page {page} of {totalPages}
      </h5>
      <div className="d-flex justify-content-center my-3">
        <button
          disabled={page === 1}
          className="btn btn-dark me-2 rounded-pill px-4 shadow"
          onClick={() => prevPage()}>
          Prev
        </button>
        <button
          disabled={info && page === info.pages}
          className="btn btn-dark ms-2 rounded-pill px-4 shadow"
          onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </>
  );
}
