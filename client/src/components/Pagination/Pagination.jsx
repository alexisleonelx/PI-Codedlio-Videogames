import React from "react";
import style from "./Pagination.module.css";


const Pagination = ({ page, setPage, max, input, setInput }) => {
  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //Click on Enter
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > max ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.paginated_container}>
      <button
        disabled={page === 1 || page < 1}
        className={style.back_page}
        onClick={previousPage}
      >
        <img  alt="◀" />
      </button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="pages"
        value={input}
        autoComplete="off"
        className={style.input}
      />
      <p className={style.p}>of {max}</p>
      <button
        disabled={page === max || page > max}
        className={style.forward_page}
        onClick={nextPage}
      >
        <img  alt="▶" />
      </button>
    </div>
  );
};

export default Pagination;
