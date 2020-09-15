import React, { useState, useEffect } from 'react';

import './AirportChooser.css';

const AirportChooser = (props) => {
  const [url, setUrl] = useState(props.url);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [airportData, setAirportData] = useState([]);
  const [selectedAirports, setSelectedAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState();
  const [scrollTop, setScrollTop] = useState(0);
  const [noOfElementsToAdd, setnoOfElementsToAdd] = useState(
    +props.noOfElementsToAdd || 15
  );
  const [lastEle, setLastEle] = useState(noOfElementsToAdd);

  /// @name fetchDatafromURL
  /// Fetches the data from the URL specified
  ///
  const fetchDatafromURL = () => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        setAirportData(data);
        setSelectedAirports(data.slice(0, noOfElementsToAdd));
      });
    });
  };

  /// @name toggleClass
  /// Open and Close the dropdown
  const toggleClass = () => {
    setToggleDropDown(!toggleDropDown);
  };

  /// @name onOptionsClicked
  /// On selecting an option from the dropdown
  ///
  /// @param {any} e - event
  const onOptionsClicked = (e) => {
    let { value } = e.target.dataset;
    setSelectedAirport(value);
  };

  /// @name handleScroll
  /// Add content dynamically on scrolling
  ///
  /// @param {any} e - event
  /// @returns {any} - if all the elements are added to the view
  const handleScroll = (e) => {
    let tempEleCount = 0;
    let temp = [];
    // return if all elements are added to the view
    if (lastEle === airportData.length) {
      return;
    }
    // Add noOfElementsToAdd to the view or add the remaining no of elements
    if (
      e.target.scrollTop > scrollTop &&
      lastEle + noOfElementsToAdd < airportData.length - 1
    ) {
      temp = selectedAirports.concat(
        airportData.slice(lastEle, lastEle + noOfElementsToAdd)
      );
      tempEleCount = lastEle + noOfElementsToAdd;
    } else {
      let stopIdx = airportData.length - lastEle;
      temp = selectedAirports.concat(
        airportData.slice(lastEle, lastEle + stopIdx)
      );
      tempEleCount = lastEle + stopIdx;
    }
    setSelectedAirports(temp);
    setLastEle(tempEleCount);
    setScrollTop(e.target.scrollTop);
  };

  useEffect(() => {
    setnoOfElementsToAdd(+props.noOfElementsToAdd);
    setUrl(props.url);
  }, [props]);

  return (
    <div>
      <button className='btn-primary' onClick={fetchDatafromURL}>
        View Airport List
      </button>
      {airportData.length > 0 && (
        <div
          className='custom-select-wrapper'
          onClick={toggleClass}
          onScroll={handleScroll}
        >
          <div
            className={toggleDropDown ? 'open custom-select' : 'custom-select'}
          >
            <div className='custom-select__trigger'>
              <span>{selectedAirport}</span>
              <div className='arrow'></div>
            </div>
            <div className='custom-options'>
              {selectedAirports.map((airport, index) => (
                <div
                  className='option-ctr'
                  onClick={onOptionsClicked}
                  data-value={airport.city}
                  key={airport.code}
                >
                  <div
                    className='custom-option main-ctr'
                    data-value={airport.city}
                  >
                    <span data-value={airport.city}>
                      {airport.city}, {airport.country}
                    </span>
                    <span className='airport-name' data-value={airport.city}>
                      {airport.name}
                    </span>
                  </div>
                  <span
                    className='custom-option airport-code'
                    data-value={airport.city}
                  >
                    {airport.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportChooser;
