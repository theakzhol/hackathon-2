import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";
import Pagination from "../Search/Pagination";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const picturesPerPage = 20; // Количество изображений на одной странице
  const totalPages = Math.ceil(pictures.length / picturesPerPage); // Общее количество страниц
  const indexOfLastPicture = currentPage * picturesPerPage; // Индекс последнего изображения на текущей странице
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage; // Индекс первого изображения на текущей странице
  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  ); // Изображения для текущей страницы

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Обновление текущей страницы при переключении пагинации
  };

  return (
    <div className="home-box">
      <div className="img-box">
        {currentPictures.map((item) => (
          <img
            src={item.image}
            alt="error-img"
            key={item.id}
            onClick={() => navigate("/details/" + item.id)}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
