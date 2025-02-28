import { useState, useEffect, useRef } from 'react';

const TimePicker = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [startTimeOptions, setStartTimeOptions] = useState([]);
  const [endTimeOptions, setEndTimeOptions] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const generateTimeOptions = () => {
      const options = [];
      for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);
          options.push(time);
        }
      }
      return options;
    };

    const allOptions = generateTimeOptions();
    setStartTimeOptions(allOptions);
    setEndTimeOptions([]);
  }, []);

  const handleStartTimeClick = (time) => {
    setStartTime(time);
    const [startHour, startMinute] = time.split(':').map(Number);
    const newEndTimeOptions = [];
    for (let hour = startHour; hour < 24; hour++) {
      for (
        let minute = hour === startHour ? startMinute + 15 : 0;
        minute < 60;
        minute += 15
      ) {
        const newTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);
        newEndTimeOptions.push(newTime);
      }
    }
    setEndTimeOptions(newEndTimeOptions);
    if (endTime === '') {
      setEndTime(newEndTimeOptions[0]);
    }
  };

  const handleEndTimeClick = (time) => {
    setEndTime(time);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="timePicker" ref={dropdownRef}>
      <div className="dropdown">
        <button
          className="dropdown-toggle rounded-3 border border-1 border-gray-400 d-flex align-items-center bg-white"
          onClick={toggleDropdown}
          type="button"
        >
          <div className="py-2 px-5">
            {startTime && endTime ? `${startTime} - ${endTime}` : '請選擇時間'}
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className={`dropdown-menu rounded-3 time-range-picker overflow-hidden ${
            isOpen ? 'show' : ''
          }`}
        >
          <div className="d-flex">
            {/* 開始時間 */}
            <ul
              className="list-unstyled dropdown-menu-start-time"
              id="start-time"
            >
              {startTimeOptions.map((time) => (
                <li key={time} onClick={() => handleStartTimeClick(time)}>
                  {time}
                </li>
              ))}
            </ul>
            {/* 結束時間 */}
            <ul
              className={`list-unstyled dropdown-menu-end-time ${
                endTimeOptions.length === 0 ? 'disabled' : ''
              }`}
              id="end-time"
            >
              {endTimeOptions.map((time) => (
                <li key={time} onClick={() => handleEndTimeClick(time)}>
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
