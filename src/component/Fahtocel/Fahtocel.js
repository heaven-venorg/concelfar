import "./style/style.css";

const Fahtocel = () => {
  function convert() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const convert = ((fahrenheit - 32) * 5) / 9;
    const result = convert.toFixed(2);
    document.getElementById(
      "result"
    ).innerHTML = `<p>${fahrenheit}°C = ${result}°F</p>`;
  }
  return (
    <section id="convert">
      <h1 className="tag-title">
        Konversi <span className="spancon">Fahrenheit</span> to{" "}
        <span className="spancon">Celcius</span>
      </h1>
      <div className="form">
        <input
          type="number"
          id="fahrenheit"
          className="input"
          placeholder="Fahrenheit Value"
        />
        <button onClick={convert}>Convert</button>
        <div id="result"></div>
      </div>
    </section>
  );
};

export default Fahtocel;
