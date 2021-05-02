import React, { useEffect } from "react";

export const Pagination = ({ items, pageSize, initPage, onChangePage }) => {
  const [state, setState] = React.useState({});

  useEffect(() => {
    if (items && items.length) {
      setCurrentPage(initPage);
    }
  }, [items]);

  /**
   * Sets current page
   * @param {page} current page.
   */
  const setCurrentPage = (page) => {
    let obj = state;

    if (page < 1 || page > state.totalPages) return;

    obj = getCurrentPage(items.length, page, pageSize);

    const pageOfItems = items.slice(obj.startIndex, obj.endIndex + 1);

    setState(obj);

    // Parent callback
    onChangePage(pageOfItems);
  };

  /**
   * Returns pagination object.
   *
   * @param {items} items of a list.
   * @param {currentPage} number of current page.
   * @param {pageSize} size of the page.
   * @return {obj} returns pagination obj.
   */
  const getCurrentPage = (items, currentPage, pageSize) => {
    // Current page
    currentPage = currentPage || 1;

    // Define page size
    pageSize = pageSize || 10;

    // Total pages
    const totalPages = Math.ceil(items / pageSize);

    let startPage = 1;
    let endPage = totalPages;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, items - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i,
    );

    // return obj
    return {
      totalItems: items,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  return (
    <div className="pagination">
      {state.currentPage !== 1 && (
        <a onClick={() => setCurrentPage(state.currentPage - 1)}>Previuos</a>
      )}
      {state.totalItems > pageSize &&
        state.totalPages !== state.currentPage && (
          <a onClick={() => setCurrentPage(state.currentPage + 1)}>Next</a>
        )}{" "}
    </div>
  );
};
