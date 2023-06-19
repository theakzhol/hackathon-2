import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Генерация номеров страниц и создание кнопок для каждой страницы
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      // Создание кнопки для каждой страницы
      <button
        key={i} // Уникальный ключ элемента в списке (в данном случае, номер страницы)
        className={currentPage === i ? "active" : ""} // Добавление класса "active" для текущей страницы
        onClick={() => onPageChange(i)} // Обработчик клика на кнопке, вызывает функцию onPageChange с номером страницы в качестве аргумента
      >
        {i}
      </button>
    );
  }

  return <div className="pagination">{pageNumbers}</div>;
};

export default Pagination;
