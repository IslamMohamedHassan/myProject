import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle search query here
  };

  return (
    <div className='search-bar' style={{background:'#f0f0f0',marginTop:100,padding:10}}>
      <h2 className='text-black'><i className="fa-solid fa-bolt text-warning"></i>ابحث بسرعة البرق</h2>
    <Form onSubmit={handleSubmit} className='col-6 m-auto'> 
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
        />
        <Button type="submit" variant="dark"><i className="fa-solid fa-magnifying-glass me-2"></i>Search</Button>
      </InputGroup>
    </Form>
    </div>
  );
}

export default SearchBar;