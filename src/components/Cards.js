import {Card} from "react-bootstrap"

const Cards = (props) => {
    return (
        <div>
            <Card className="text-white mt-4 p-1" bg="dark">
              <Card.Img className="imageCard" variant="top" src={props.image}/>
              <Card.Body className="cardBody">
                <Card.Title className="titleCard">{props.title}</Card.Title>
                <Card.Text className="textCard">
                  {props.sinopsis + " ..."}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;