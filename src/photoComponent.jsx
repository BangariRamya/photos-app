import { Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";

const Photo = ({photos}) => {

  return (
    
     <Col xs="12" sm="6" md="4" xl="3">   
      <Card className="card">
        <CardImg
          alt="Photo image"
          // src="https://picsum.photos/318/180"
          src={photos.thumbnailUrl}
          top width="100%"
        />
        <CardBody>

          <CardTitle tag="h5">{photos.title}</CardTitle> 

        </CardBody>
      </Card>
    </Col>
    
  );
};
export default Photo;


// import { Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";

// const Photo = (props) => {

//   const {photos} = props;
//   const {thumbnailUrl, title} = photos;

//   return (
    
//      <Col xs="12" sm="6" md="4" xl="3">   
//       <Card>
//         <CardImg
//           alt="Photo image"
//           // src="https://picsum.photos/318/180"
//          src={thumbnailUrl}
//           top
//           width="100%"
//         />
//         <CardBody>

//           <CardTitle tag="h5">{title}</CardTitle>
          
//         </CardBody>
//       </Card>
//       </Col>
    
//   );
// };
// export default Photo;

