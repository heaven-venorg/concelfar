import "./style/style.css";

const Celtofah = () => {
  function convert() {
    const celcius = document.getElementById("celcius").value;
    const convert = (celcius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerHTML = `<p>${celcius}°C = ${convert}°F</p>`;
  }
  return (
    <section id="convert">
      <h1 className="tag-title">
        Konversi <span className="spancon">Celcius</span> to{" "}
        <span className="spancon">Fahrenheit</span>
      </h1>
      <div className="form">
        <input
          type="number"
          id="celcius"
          className="input"
          placeholder="Celcius Value"
        />
        <button onClick={convert}>Convert</button>
        <div id="result"></div>
      </div>
    </section>
  );
};

export default Celtofah;
