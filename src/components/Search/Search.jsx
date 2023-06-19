import React, { useEffect, useState } from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";

const Search = () => {
  const { pictures } = useSelector((state) => state.pictures);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  const [value, setValue] = useState("");

  const searchPicture = pictures.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="container-search">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search new inspiration"
          className="search-inp"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="rectangle-search">
        <p>Popular images</p>
      </div>
      <div className="home-box">
        <div className="search-box-img">
          {value ? (
            <>
              {pictures ? (
                currentPicture.map((item) => (
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
            </>
          ) : (
            <>
              {searchPicture.map((item) => (
                <img
                  src={item.image}
                  alt="error-img"
                  key={item.id}
                  onClick={() => navigate("/details/" + item.id)}
                />
              ))}
            </>
          )}
          <div className="pagination">
            <div className="roman-pagination">
              <label
                className="roman-radio"
                page={page}
                onChange={handleChange}
              >
                <input
                  type="radio"
                  name="radioName"
                  checked
                  page={page}
                  onChange={handleChange}
                />
                <span className="numeral" count={count}>
                  I.
                </span>
                <span className="title">The First</span>
              </label>

              <label className="roman-radio">
                <input
                  type="radio"
                  name="radioName"
                  page={page}
                  count={count}
                  onChange={handleChange}
                />
                <span className="numeral">II.</span>
                <span className="title">The Second</span>
              </label>

              <label className="roman-radio">
                <input
                  type="radio"
                  name="radioName"
                  page={page}
                  count={count}
                  onChange={handleChange}
                />
                <span className="numeral">III.</span>
                <span className="title">The Third</span>
              </label>

              <label className="roman-radio">
                <input
                  type="radio"
                  name="radioName"
                  page={page}
                  count={count}
                  onChange={handleChange}
                />
                <span className="numeral">IV.</span>
                <span className="title">The Fourth</span>
              </label>

              <label className="roman-radio">
                <input
                  type="radio"
                  name="radioName"
                  page={page}
                  count={count}
                  onChange={handleChange}
                />
                <span className="numeral">V.</span>
                <span className="title">The Fifth</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
