import { useState, useEffect } from 'react';

export const usePagination = (page, totalPages, pageSize) => {
  const [pagination, setPagination] = useState([]);

  const getPages = (currentPage, totalPages) => {
    const totalDataLength = totalPages - pageSize;
    const totalLength = totalDataLength < 1 ? 1 : totalDataLength;
    const start = currentPage <= totalLength ? currentPage : totalLength;
    const end = currentPage <= totalLength ? currentPage + pageSize : totalPages;

    if (totalDataLength < 1) {
      const lengthArr = { length: totalPages };
      return Array.from(lengthArr, (_, i) => start + i);
    }
    const lengthArr = { length: end - start };
    return Array.from(lengthArr, (_, i) => start + i);
  };

  useEffect(() => {
    if (!totalPages) return null;
    const pagination = getPages(page, totalPages);
    setPagination(pagination);
  }, [page, totalPages]);

  return pagination;
};
