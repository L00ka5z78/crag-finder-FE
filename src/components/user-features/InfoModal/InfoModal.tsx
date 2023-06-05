import { Link } from 'react-router-dom';

type Props = {
  modalVisible: boolean;
  modalText: string;
  closeModal: () => void;
  linkPath?: string;
};

export const InfoModal: React.FC<Props> = ({
  modalVisible,
  modalText,
  linkPath,
  closeModal,
}) => {
  return (
    <>
      <div className="textModalContainer">
        <div className="textModalBox">
          <div className="textModalText">{modalText}</div>
          {linkPath ? (
            <Link to={linkPath} className="textModalLink">
              <button className="textModalButton">OK</button>
            </Link>
          ) : (
            <button className="textModalButton">OK</button>
          )}
        </div>
      </div>{' '}
    </>
  );
};
