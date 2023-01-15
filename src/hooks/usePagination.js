import { useState, useEffect } from 'react';

export const usePagination = (page, totalPages, pageSize) => {
  const [pagination, setPagination] = useState([]);

  const getPages = (currentPage, totalPages) => {
    const start =
      currentPage <= totalPages - pageSize
        ? currentPage
        : totalPages - pageSize;
    const end =
      currentPage <= totalPages - pageSize
        ? currentPage + pageSize
        : totalPages;
    const lengthArr = { length: end - start }
    return Array.from(lengthArr, (_, i) => start + i);
  };

  useEffect(() => {
    if (!totalPages) return null;
    const pagination = getPages(page, totalPages);
    setPagination(pagination);
  }, [page, totalPages]);

  return pagination;
};
