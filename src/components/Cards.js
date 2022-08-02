import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const Cards = (props) => {
  const [imdbId, setImdbId] = useState("");
  const situsImdb = "https://www.imdb.com/title/";

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${props.idMovie}`, {
        params: {
          api_key: process.env.REACT_APP_API,
        },
      })
      .then((response) => {
        setImdbId(response.data.imdb_id);
      });
  }, [props.idMovie]);

  return (
    <div>
      <Card className="text-white mt-4 p-1" bg="dark">
        <Card.Img className="imageCard" variant="top" src={props.image} />
        <Card.Body className="cardBody">
          <Card.Title className="titleCard">{props.title}</Card.Title>
          <Card.Text className="textCard">{props.sinopsis + " ..."}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text className="textCard">
            <Button
              href={situsImdb + imdbId}
              target="_blank"
              variant="outline-light"
            >
              See More
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
