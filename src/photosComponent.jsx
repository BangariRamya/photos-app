import { useState, useEffect } from "react";
import Photo from "./photoComponent";
import {
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from "reactstrap";
import ImagePreview from "./imagePreview";
import Form from "./form";  

const Photos = () => {
  const [state, setState] = useState([]);  //This is for data we want to change and update, while fetching(refer below useEffect)
  const [spin, setSpin] = useState(false);
  const [page, setPage] = useState(1);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [currentImagePreview, setCurrentImagePreview] = useState(null);
  // const [formOpen, setFormOpen] = useState(false);
  // const [form, setForm] = useState(null);

  const pageUpdate = (num) => {
    setPage(num);
  };
  
  useEffect(() => {
    try{
      setSpin(true);
      fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data)
          setState(data);
          setSpin(false);
          // setPage(null);
          //console.log(page);
        });
    }  //try must followed by either catch or finally ...if not gives error
    catch (error)
    {
      setSpin(false)
      console.log(error);
    };
  }, [page]);
  
  /*...Fetching using async and await and then calling this function in useEffect..;;getting output but getting warning as missing dependency...see below at useEffect ending
  const fetchData =  async () => {
      try{
       setSpin(true);
       const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`);
       const data = await resp.json();
       
       //console.log(data);
       setState(data);
       setSpin(false);
      }
      catch(error)
      {
        setSpin(false);
        console.log(error);
      }
  }

  useEffect(() => {
  
           fetchData();

        }, [page]);  //gives warning as : React Hook useEffect has a missing dependency: 'fetchData'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  */
  

  const showImagePreview = (photoObject) => {
    // console.log(photoObject);
    setImagePreviewOpen(true);
    setCurrentImagePreview(photoObject); 
      
  }

  const hideImagePreview = () => {
    setImagePreviewOpen(false);
    setCurrentImagePreview(null); 
  }

  // const displayForm = (formObject) => {
  //     setFormOpen(true);
  //     setForm(formObject);
  //     // console.log("aaa")
  // }



  return (
    <div>
     
      {imagePreviewOpen && <ImagePreview title={currentImagePreview.title} url={currentImagePreview.url} previewClose={hideImagePreview}/>}

      <h1>Photos App</h1>

      <Form />

      {/* <Button onClick={displayForm} onButtonClick={displayForm}>New Photo</Button> */}

      {/* <Button onClick={() => {displayForm({title, url, thumbnailUrl})}}>New Photo</Button> */}
      
      {/* <Spinner style={{alignItem: "left"}}>Loading...</Spinner>       */}
      {spin && <Spinner>Loading...</Spinner>}
      <Container>
        <Row>
          {state.map((item) => (
            <Photo key={item.id} photos={item} onPhotoClick={showImagePreview} />
          ))}
        </Row>
      </Container>
      <br />
      <div className="Pagination">
        <Pagination aria-label="Page navigation example" size="lg">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" onClick={() => pageUpdate(1)}>
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" onClick={() => pageUpdate(2)}>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" onClick={() => pageUpdate(3)}>
              3
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination> 
      </div>
    </div>
  );
};
export default Photos;
