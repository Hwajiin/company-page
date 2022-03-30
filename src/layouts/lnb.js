import styled from "styled-components";
import colors from "../styles/constants/colors";
import fontStyle from "../styles/function/fontStyle";

const Nav = styled.nav`
  width: 100%;
  margin-bottom: 40px;
  ${fontStyle(13)}
  font-weight: 700;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  padding: 10px 0;
  color: ${({ active }) => (active === "true" ? colors.blue : colors.black)};
  text-decoration: ${({ active }) =>
    active === "true" ? "underline" : "none"};
  cursor: pointer;
`;

const Lnb = ({ clickHandler, currentCategory }) => {
  const categoryList = [
    {
      name: "personal",
      text: "퍼스널스포츠",
    },
    {
      name: "regional",
      text: "지역별",
    },
    {
      name: "crew",
      text: "크루 그룹핑",
    },
    {
      name: "logbook",
      text: "리포트/로그북",
    },
  ];

  return (
    <Nav>
      <List>
        {categoryList.map((item, idx) => (
          <Item
            key={idx}
            onClick={() => clickHandler(item.name)}
            active={currentCategory === item.name ? "true" : "false"}
          >
            {item.text}
          </Item>
        ))}
      </List>
    </Nav>
  );
};

export default Lnb;
