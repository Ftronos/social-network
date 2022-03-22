import c from "./Pagination.module.css";

const Pagination = (props) => {
  const onPageChaned = (pageNumber) => {
    props.onPageChaned(pageNumber);
  };
  const visibleItemsCount = 15;

  let pages = [...props.pages],
    showSideLeft = true,
    showSideRight = true;

  if (props.pages.length > visibleItemsCount) {
    let startIdx = props.currentPage - Math.ceil(visibleItemsCount / 2),
      endIdx = props.currentPage + Math.floor(visibleItemsCount / 2);

    if (startIdx < 0) {
      endIdx = visibleItemsCount;
      startIdx = 0;
    } else if (endIdx > props.pages.length) {
      endIdx = props.pages.length;
      startIdx = props.pages.length - visibleItemsCount;
    }

    pages = props.pages.slice(startIdx, endIdx);

    if (pages[0] === props.pages[0]) {
      showSideLeft = false;
    }

    if (pages[pages.length - 1] === props.pages[props.pages.length - 1]) {
      showSideRight = false;
    }
  }

  const paginationElements = pages.map((page) => {
    const className =
      c.pagination__item +
      (props.currentPage === page ? " " + c.pagination__item_active : "");

    return (
      <span
        onClick={() => {
          onPageChaned(page);
        }}
        key={page}
        className={className}
      >
        {page}
      </span>
    );
  });

  return (
    <div className={c.pagination}>
      <span
        onClick={() => {
          onPageChaned(props.pages[0]);
        }}
        key={props.pages[0] - 1}
        className={c.pagination__item}
      >
        Первая
      </span>
      {showSideLeft ? (
        <span className={c.pagination__item + " " + c.pagination__item_side}>
          ...
        </span>
      ) : null}
      {paginationElements}
      {showSideRight ? (
        <span className={c.pagination__item + " " + c.pagination__item_side}>
          ...
        </span>
      ) : null}
      <span
        onClick={() => {
          onPageChaned(props.pages.length);
        }}
        key={props.pages[props.pages.length]}
        className={c.pagination__item}
      >
        Последняя
      </span>
    </div>
  );
};

export default Pagination;
