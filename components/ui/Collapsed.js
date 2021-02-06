import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Collapse, Row, Col, Card, Button } from "react-bootstrap";
import { moviecontext } from "../../context/movies/moviesContext";

const Collapsed = ({ open }) => {
  const [disabled, setDisabled] = useState(false);
  const [paginate, setPaginate] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [offset, setOffset] = useState(0);
  const { characters } = useContext(moviecontext);

  useEffect(() => {
    offset <= 0 ? setDisabled(true) : setDisabled(false);
    setPaginate(characters.slice(offset, offset + perPage));
  }, [characters, offset, perPage]);

  const nextPage = () => {
    setOffset(offset + perPage);
  };

  const beforePage = () => {
    setOffset(offset - perPage);
  };

  return (
    <Collapse in={open} className="my-3">
      <div id="seCharacters">
        <Button onClick={beforePage} disabled={disabled}>
          -
        </Button>
        <Button onClick={nextPage}>+</Button>
        {paginate.length !== 0 ? (
          <Row>
            {paginate.map(x => (
              <Col md={4} key={x.cast_id}>
                <Card>
                  <Card.Img varian="top" src={x.profile_path} className="img-movie mb-3 img-thumbnail"></Card.Img>
                  <Card.Body>
                    <Card.Title>
                      <Link href={`/movies/character?id=${x.id}`}>{x.character}</Link>
                    </Card.Title>
                    <Card.Subtitle>Acting: {x.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : null}
      </div>
    </Collapse>
  );
};

export default Collapsed;
