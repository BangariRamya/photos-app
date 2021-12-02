import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ImagePreview = ({url,title, previewClose, thumbnailUrl, onButtonClick}) => {
  return (
    <Modal isOpen size="lg">
      <ModalHeader toggle={previewClose}>{title}</ModalHeader>
      <ModalBody>
        <img src={url} alt={title}/>
      </ModalBody>
      {/* <form onSubmit={() => onButtonClick({url,title, thumbnailUrl})}>
        <input type="text"/>
      </form> */}
    </Modal>
    
  );
};

export default ImagePreview;
