import { useState } from "react";

function Nota(props) {
  const [notaInput, setNotaInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setNota(notaInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nota">Nota:</label>
        <input
          type="text"
          name="nota"
          value={notaInput}
          onChange={(e) => setNotaInput(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default Nota;
