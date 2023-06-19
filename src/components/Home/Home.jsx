import React, { useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);
  console.log(pictures);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const [page, setPage] = useState(1);

  const picturesPage = 20;
  const count = Math.ceil(pictures.length / picturesPage);

  function currentPicture() {
    const start = (page - 1) * picturesPage;
    const end = start + picturesPage;
    return pictures.slice(start, end);
  }

  const handleChange = (p) => {
    setPage(p);
  };

  console.log(page, count);

  return (
    <div className="home-box">
      <div className="img-box">
        {pictures ? (
          currentPicture().map((item) => (
            <img
              src={item.image}
              alt="error-img"
              key={item.id}
              onClick={() => navigate("/details/" + item.id)}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="pagination">
        <div className="roman-pagination">
          <button className="numeral" onClick={handleChange} page={page}>
            {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
