import c from "./Pagination.module.css";
import cn from "classnames";

type Props_type = {
  onPageChaned: (pageNumber: number) => void;
  currentPage: number;
  pagesArr: Array<number>;
};

const Pagination: React.FC<Props_type> = ({
  onPageChaned,
  currentPage,
  pagesArr,
  ...props
}) => {
  const pageChaned = (pageNumber: number) => {
    onPageChaned(pageNumber);
  };
  const visibleItemsCount: number = 15;

  let pages: Array<number> = [...pagesArr],
    showSideLeft = true,
    showSideRight = true;

  if (pagesArr.length > visibleItemsCount) {
    let startIdx = currentPage - Math.ceil(visibleItemsCount / 2),
      endIdx = currentPage + Math.floor(visibleItemsCount / 2);

    if (startIdx < 0) {
      endIdx = visibleItemsCount;
      startIdx = 0;
    } else if (endIdx > pagesArr.length) {
      endIdx = pagesArr.length;
      startIdx = pagesArr.length - visibleItemsCount;
    }

    pages = pagesArr.slice(startIdx, endIdx);

    if (pages[0] === pagesArr[0]) {
      showSideLeft = false;
    }

    if (pages[pages.length - 1] === pagesArr[pagesArr.length - 1]) {
      showSideRight = false;
    }
  }

  const paginationElements = pages.map((page) => {
    return (
      <span
        onClick={() => {
          pageChaned(page);
        }}
        key={page}
        className={cn(c.pagination__item, {
          [c.pagination__item_active]: currentPage === page,
        })}
      >
        {page}
      </span>
    );
  });

  return (
    <div className={c.pagination}>
      <span
        onClick={() => {
          onPageChaned(pagesArr[0]);
        }}
        key={pagesArr[0] - 1}
        className={c.pagination__item}
      >
        Первая
      </span>
      {showSideLeft ? (
        <span className={cn(c.pagination__item, c.pagination__item_side)}>
          ...
        </span>
      ) : null}
      {paginationElements}
      {showSideRight ? (
        <span className={cn(c.pagination__item, c.pagination__item_side)}>
          ...
        </span>
      ) : null}
      <span
        onClick={() => {
          onPageChaned(pagesArr.length);
        }}
        key={pagesArr[pagesArr.length]}
        className={c.pagination__item}
      >
        Последняя
      </span>
    </div>
  );
};

export default Pagination;
