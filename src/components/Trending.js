import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";

const Trending = () => {

  const [movies, setMovies] = useState([])

  const media_type = "all"
  const time_window = "day"

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/trending/${media_type}/${time_window}`, {
      params: {
        api_key: process.env.REACT_APP_API
      }
    }).then((response) => {
      console.log("Datas", response.data.results);
      setMovies(response.data.results)
    })
  }, []);

  return (
    <div>
      <Container className="pb-4">
        <h1 id="trending" className="text-white pt-4">TRENDING MOVIES</h1>
        <Row>
          {movies.map((movie) => (
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

export default Trending;
