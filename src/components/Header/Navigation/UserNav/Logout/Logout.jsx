import DeleteModal from 'components/Modals/ModalApproveAction/DeleteModal';
import svg from '../../../../../images/Icons/symbol-defs.svg';
import { LogoutBtn } from './Logout.styled';
import { useState } from 'react';


const Logout = ({ showButton }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  const handleLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <LogoutBtn type="button" onClick={handleLogout} showButton={showButton}>
        Log out
        <svg width={24} height={24}>
          <use href={`${svg}#icon-logout`} width={24} height={24} />
        </svg>
      </LogoutBtn>
      {isModalOpen && <DeleteModal onClose={isModalOpen} />}
      {/* <DeleteModal/> */}
    </>
  );
};

export default Logout;
