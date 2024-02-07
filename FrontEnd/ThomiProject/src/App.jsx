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
      <div className="grid place-content-center">
        <div className="container mx-auto flex gap-12 bg-indigo-900 my-40 rounded-xl">
          <div className="">
            <h1 className="text-gray-300 text-7xl text-center my-56 font-bold p-6">
              Preregistro
            </h1>
          </div>
          <form className=" mt-24 pr-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex justify-between items-center gap-2 pr-2">
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Ingresa tu CURP
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-indigo-500 p-1 rounded my-1"
                  value={datos.curp}
                  onChange={(e) => setDatos({ ...datos, curp: e.target.value })}
                />
              </div>
              <a
                className="text-gray-300 font-bold border text-sm w-48 border-b-2 p-1 mt-6 hover:bg-black hover:text-white"
                href="https://www.gob.mx/curp/"
              >
                Si no tienes CURP consultala aqui
              </a>
            </div>
            <div className="flex gap-2">
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-indigo-500 p-1 rounded my-1"
                  value={datos.apellidoPaterno}
                  onChange={(e) =>
                    setDatos({ ...datos, apellidoPaterno: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-indigo-500 p-1 rounded my-1"
                  value={datos.apellidoMaterno}
                  onChange={(e) =>
                    setDatos({ ...datos, apellidoMaterno: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-indigo-500 p-1 rounded my-1"
                  value={datos.nombre}
                  onChange={(e) =>
                    setDatos({ ...datos, nombre: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Telefono de casa
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-indigo-500 p-1 rounded my-1"
                  value={datos.telefonoCasa}
                  onChange={(e) =>
                    setDatos({ ...datos, telefonoCasa: e.target.value })
                  }
                />
              </div>
            </div>

            <label className="text-gray-300 font-bold block " htmlFor="curp">
              Correo Electronico
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-indigo-500 p-1 rounded my-1 w-full"
              value={datos.correo}
              onChange={(e) => setDatos({ ...datos, correo: e.target.value })}
            />
            <div className="flex gap-2">
              <div>
                <label className="text-gray-300 font-bold block" htmlFor="curp">
                  Telefono celular
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder=""
                    className="border border-indigo-500 p-1 rounded my-1"
                    value={datos.telefonoCelular}
                    onChange={(e) =>
                      setDatos({ ...datos, telefonoCelular: e.target.value })
                    }
                  />
                  <button
                    className="bg-gray-500 px-1 rounded-xl  text-gray-200 font-bold hover:bg-gray-600 w-48"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
