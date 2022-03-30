import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import semosLogoW from "../assets/images/logo/logo-w.png";
import semosLogoB from "../assets/images/logo/logo-b.png";

const SLink = styled(Link)`
  display: block;
  width: 90px;
  height: 34px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Logo = () => {
  const { pathname } = useLocation();

  return (
    <SLink to="/" aria-label="홈으로 가기">
      <Img src={pathname === "/" ? semosLogoW : semosLogoB} />
    </SLink>
  );
};

export default Logo;
