import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datos, setDatos] = useState({
    curp: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombre: "",
    correo: "",
    telefonoCasa: "",
    telefonoCelular: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:3000/insertar/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      setDatos({
        curp: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombre: "",
        correo: "",
        telefonoCasa: "",
        telefonoCelular: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className=" container mx-auto my-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Ingresa tu CURP
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.curp}
          onChange={(e) => setDatos({ ...datos, curp: e.target.value })}
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Apellido Paterno
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.apellidoPaterno}
          onChange={(e) =>
            setDatos({ ...datos, apellidoPaterno: e.target.value })
          }
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Apellido Materno
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.apellidoMaterno}
          onChange={(e) =>
            setDatos({ ...datos, apellidoMaterno: e.target.value })
          }
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.nombre}
          onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Correo Electronico
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.correo}
          onChange={(e) => setDatos({ ...datos, correo: e.target.value })}
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Telefono de casa
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.telefonoCasa}
          onChange={(e) => setDatos({ ...datos, telefonoCasa: e.target.value })}
        />

        <label className="text-indigo-500 font-bold block" htmlFor="curp">
          Telefono celular
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="border border-indigo-500 p-1 rounded my-1"
          value={datos.telefonoCelular}
          onChange={(e) =>
            setDatos({ ...datos, telefonoCelular: e.target.value })
          }
        />
        <button type="submit">ok</button>
      </form>
    </>
  );
}

export default App;
