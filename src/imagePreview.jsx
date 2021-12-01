import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ImagePreview = ({url,title, previewClose}) => {
  return (
    <Modal isOpen size="lg">
      <ModalHeader toggle={previewClose}>{title}</ModalHeader>
      <ModalBody>
        <img src={url} alt={title}/>
      </ModalBody>
    </Modal>
    
  );
};

export default ImagePreview;
