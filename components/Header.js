import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import { moviecontext } from "../context/movies/moviesContext";
import { getMovies } from "../helpers/crud";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const { searchMovies } = useContext(moviecontext);

  const handleOnChange = e => setSearch(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    const _searchMovies = await getMovies(`/search/movie?query=${search}`);
    searchMovies(_searchMovies);
    setSearch("");
    router.push(`/search?movie=${search}`);
  };

  return (
    <Navbar variant="dark" expand="lg" bg="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/img/anjrot2.png" width="100" height="59" alt="anjrot-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Form inline onSubmit={handleSubmit} noValidate>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnChange} value={search} />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
