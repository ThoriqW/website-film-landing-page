import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const media_type = "movie";
  const time_window = "day";

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/trending/${media_type}/${time_window}`,
        {
          params: {
            api_key: process.env.REACT_APP_API,
          },
        }
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container className="pb-4">
        <h2 id="trending" className="text-white pt-4">
          TRENDING MOVIES
        </h2>
        <Row>
          {movies.map((movie) => (
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
      </Container>
    </div>
  );
};

export default Trending;
