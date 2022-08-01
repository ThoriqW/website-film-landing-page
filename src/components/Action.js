import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Action = () => {

  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_API,
        with_genres: 28
      }
    }).then((response) => {
      console.log(response.data.results);
      setActionMovies(response.data.results)
    })
  }, []);

  return (
    <div>
      <Container className="pb-4">
        <h1 id="superhero" className="text-white pt-4">ACTION MOVIES</h1>
        <Row>
          {actionMovies.map((movie) => (
            <Col key={movie.id} md={3} className="d-flex justify-content-center">
              <Cards
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

export default Action;
