import { Button } from "react-bootstrap";

const PageMovie = (props) => {
  return (
    <div>
      <div className="pagination d-flex justify-content-between align-items-center text-white mt-4">
        <Button onClick={() => props.prev()} variant="outline-light">
          PREV
        </Button>
        <p className="mb-0">{props.currentPage}</p>
        <Button onClick={() => props.next()} variant="outline-light">
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default PageMovie;
