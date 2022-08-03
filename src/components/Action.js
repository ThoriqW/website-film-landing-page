import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import PageMovie from "./PageMovie";

const Action = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie/`, {
        params: {
          api_key: process.env.REACT_APP_API,
          with_genres: 28,
          page: page,
        },
      })
      .then((response) => {
        setActionMovies(response.data.results);
      });
  }, [page]);

  //useEffect will run if the value of page change. if that array is empty useEffect only run once the website reload

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <Container className="pb-4 pt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 id="action" className="text-white">
            ACTION MOVIES
          </h2>
        </div>
        <Row>
          {actionMovies.map((movie) => (
            <Col
              key={movie.id}
              md={3}
              className="d-flex justify-content-center"
            >
              <Cards
                idMovie={movie.id}
                image={process.env.REACT_APP_PATH + movie.poster_path}
                title={movie.original_title}
                sinopsis={movie.overview.substring(0, 80)}
              />
            </Col>
          ))}
        </Row>
        <PageMovie currentPage={page} next={nextPage} prev={prevPage} />
      </Container>
    </div>
  );
};

export default Action;
