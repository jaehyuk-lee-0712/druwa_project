import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { checkLists, countryLists } from "../data/list"; // Assuming this is a list of objects with a 'title' property

const List = () => {
  const initialStoreStates = checkLists.reduce((acc, list) => {
    acc[list.title.toLowerCase()] = true;
    return acc;
  }, {});

  const initialCountryStates = countryLists.reduce((acc, list) => {
    acc[list.title.toLowerCase()] = true;
    return acc;
  }, {});

  const [storeData, setStoreData] = useState([]);
  const [checkedStoreStates, setCheckedStoreStates] = useState(initialStoreStates);
  const [checkedCountryStates, setCheckedCountryStates] = useState(initialCountryStates);
  const [allStoreChecked, setAllStoreChecked] = useState(true);
  const [allCountryChecked, setAllCountryChecked] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:9000/list",
          { ...checkedStoreStates, ...checkedCountryStates }
        );
        setStoreData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [checkedStoreStates, checkedCountryStates]);

  const toggleStoreCheck = (store) => {
    setCheckedStoreStates((prev) => {
      const newCheckedStates = {
        ...prev,
        [store]: !prev[store],
      };
      setAllStoreChecked(Object.values(newCheckedStates).every(Boolean));
      return newCheckedStates;
    });
  };

  const toggleCountryCheck = (country) => {
    setCheckedCountryStates((prev) => {
      const newCheckedStates = {
        ...prev,
        [country]: !prev[country],
      };
      setAllCountryChecked(Object.values(newCheckedStates).every(Boolean));
      return newCheckedStates;
    });
  };

  const toggleAllStoreChecks = (value) => {
    const newState = {};
    checkLists.forEach((list) => {
      newState[list.title.toLowerCase()] = value;
    });
    setCheckedStoreStates(newState);
    setAllStoreChecked(value);
  };

  const toggleAllCountryChecks = (value) => {
    const newState = {};
    countryLists.forEach((list) => {
      newState[list.title.toLowerCase()] = value;
    });
    setCheckedCountryStates(newState);
    setAllCountryChecked(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = storeData.filter((store) => {
    const matchedCountry = countryLists.find(
      (country) =>
        checkedCountryStates[country.title.toLowerCase()] &&
        store.dtAddress.includes(country.title)
    );

    const matchesSearchTerm = store.dtName.toLowerCase().includes(searchTerm) || store.dtAddress.toLowerCase().includes(searchTerm);

    return matchedCountry && matchesSearchTerm;
  });

  return (
    <div className="alllist container">
      <div className="alllist__inner">
        <div className="all__search">
          <div className="text">
            <em>7</em>개의 포지션이 열려 있어요
          </div>
          <div className="search">
            <div className="icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m19.59 18.41-3.205-3.203c1.0712-1.3712 1.579-3.0994 1.4197-4.832-.1593-1.73274-.9735-3.3394-2.2767-4.49233s-2.9972-1.76527-4.7364-1.71212c-1.73913.05315-3.39252.76779-4.62288 1.99815s-1.945 2.88375-1.99815 4.6229c-.05316 1.7392.55918 3.4332 1.71211 4.7364s2.7596 2.1174 4.49232 2.2767c1.7327.1592 3.4608-.3485 4.832-1.4197l3.204 3.204c.1567.1541.3678.24.5876.2391.2197-.0009.4302-.0886.5856-.2439.1554-.1554.243-.3659.2439-.5856.001-.2198-.085-.431-.2391-.5876zm-4.886-3.808c-.0183.0156-.036.032-.053.049-.042.044-.042.044-.08.092-.91.886-2.197 1.424-3.571 1.424-1.19232.0001-2.348-.4121-3.27107-1.1668s-1.55672-1.8055-1.79352-2.974c-.2368-1.1686-.06217-2.38311.49428-3.43762s1.46047-1.88413 2.55878-2.34819c1.09833-.46405 2.32333-.53398 3.46733-.19793s2.1365 1.0574 2.8094 2.04174c.6728.98434.9845 2.1711.8822 3.359-.1022 1.1879-.6122 2.3039-1.4434 3.1588z"
                  fill="#6b7684"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="직무명, 기술 스택, 주요 업무 등을 검색해보세요"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="all__list">
          <div className="list__check__box">
            <div className="list__check">
              <div className="title">매장</div>
              <div className="checkbox">
                <div className="box__lists">
                  <label className="checkable" htmlFor="checkable-all-store">
                    <input
                      className="checkable__input"
                      type="checkbox"
                      id="checkable-all-store"
                      checked={allStoreChecked}
                      onChange={(e) => toggleAllStoreChecks(e.target.checked)}
                    />
                    <span className="checkable__text">전체</span>
                  </label>
                </div>
                {checkLists.map((list, key) => (
                  <div className="box__lists" key={key}>
                    <label className="checkable" htmlFor={`checkable-store-${key}`}>
                      <input
                        className="checkable__input"
                        type="checkbox"
                        id={`checkable-store-${key}`}
                        checked={checkedStoreStates[list.title.toLowerCase()]}
                        onChange={() => toggleStoreCheck(list.title.toLowerCase())}
                      />
                      <span className="checkable__text">{list.title}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="list__check">
              <div className="title">지역</div>
              <div className="checkbox">
                <div className="box__lists">
                  <label className="checkable" htmlFor="checkable-all-country">
                    <input
                      className="checkable__input"
                      type="checkbox"
                      id="checkable-all-country"
                      checked={allCountryChecked}
                      onChange={(e) => toggleAllCountryChecks(e.target.checked)}
                    />
                    <span className="checkable__text">전체</span>
                  </label>
                </div>
                {countryLists.map((list, key) => (
                  <div className="box__lists" key={key}>
                    <label className="checkable" htmlFor={`checkable-country-${key}`}>
                      <input
                        className="checkable__input"
                        type="checkbox"
                        id={`checkable-country-${key}`}
                        checked={checkedCountryStates[list.title.toLowerCase()]}
                        onChange={() => toggleCountryCheck(list.title.toLowerCase())}
                      />
                      <span className="checkable__text">{list.title}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="list__view">
            {filteredData.map((store, index) => (
              <Link to="/" key={index}>
                <div className="list__moglog">
                  <span className="mog__title">
                    <div>
                      <span className="title">{store.dtName}</span>
                      <span
                        className={`open ${store.open === "" ? "hidden" : ""}`}
                      >
                        {store.categoryName}
                      </span>{" "}
                    </div>
                  </span>
                  <span className="mog__desc">{store.dtAddress}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
