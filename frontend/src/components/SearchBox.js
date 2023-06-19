import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Books..."
        className="search-box"
        style={{ width: "500px" }}
      ></Form.Control>
      <Button type="submit" variant="secondary" className="p-10" style={{marginLeft: "50px" }}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
