import React from "react";
import { useRef } from "react";

function useRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current);
    inputRef.current.value = "Hello";
    inputRef.current.style.border = "10px solid green";
    paraRef.current.innerText = "G00dbye";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          ref={inputRef}
          type='text'
          id='name'
          className='form-control mb-2'
        />

        <button type='submit' className='btn btn-primary rounded-sm'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default useRefExample1;
