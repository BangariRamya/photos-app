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

const Photos = () => {
  const [state, setState] = useState([]);
  const [spin, setSpin] = useState(false);
  const [page, setPage] = useState(1);

  const pageUpdate = (num) => {
    setPage(num);
  };

  useEffect(() => {
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
  }, [page]);

  return (
    <div>
      {/* <Spinner style={{alignItem: "left"}}>Loading...</Spinner>       */}
      {spin && <Spinner>Loading...</Spinner>}
      <Container>
        <Row>
          {state.map((item) => (
            <Photo key={item.id} photos={item} />
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
