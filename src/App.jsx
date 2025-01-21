import Buscador  from "./components/Buscador";
import GridGifs  from "./components/GridGifs";
import { useSearchGifs } from "./hooks/useSearchGifs";

function App() {
  //estado

  const { valorInput, onChangeInput, handleOnSubmit, gifs, cargando } =
    useSearchGifs();

  //JSX
  return (
    <>
      <div>
        <Buscador
          valorInput={valorInput}
          onChangeInput={onChangeInput}
          handleOnSubmit={handleOnSubmit}
        />
        {cargando ? (
          <div className="loader">
          <div className="spinner"></div>
        </div>
        ) : (
          <GridGifs gifs={gifs} />
        )}
      </div>
    </>
  );
}

export default App;
