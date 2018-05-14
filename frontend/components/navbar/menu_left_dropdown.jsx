import React from 'react';
import { Link } from 'react-router-dom';

const LeftDropDown = ({ clearDropdowns }) => (
  <div className="dropdown-list" onClick={(event) => event.stopPropagation()} >
    <a href='https://github.com/akeefe09/fakegur/blob/master/README.md' target="_blank">about</a>
    <a href='https://github.com/akeefe09' target="_blank">my github</a>
    <a href='https://www.linkedin.com/in/alexander-keefe-785551130/' target="_blank">my linkedin</a>
  </div>
);

export default LeftDropDown;
