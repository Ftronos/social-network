import c from "./Pagination.module.css";

const Pagination = (props) => {
  const onPageChaned = (pageNumber) => {
    props.onPageChaned(pageNumber);
  };

  const paginationElement = props.pages.map((page) => {
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

  return <div className={c.pagination}>{paginationElement}</div>;
};

export default Pagination;
