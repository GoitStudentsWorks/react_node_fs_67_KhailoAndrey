import { Link } from 'react-router-dom';
import { NFText, NFImg, NFDivWrap, Button, PawIcon } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <NFDivWrap>
        <NFText>Oops! This page not found...</NFText>
        <NFImg />
        <Button type="submit">
          <Link to="/">To main page</Link>
          <PawIcon />
        </Button>
      </NFDivWrap>
    </>
  );
};

export default NotFound;
