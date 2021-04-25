import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #fff;
`;

const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  color: #fff;
  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        <a href="#">Game of Thrones DB</a>
      </HeaderTitle>
      <HeaderLinks>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Houses</a>
        </li>
        <li>
          <a href="#">Books</a>   
        </li>
      </HeaderLinks>
    </HeaderBlock>
  );
};

export default Header;