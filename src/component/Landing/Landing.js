import "./style/style.css";

const Landing = () => {
  return (
    <section className="section" id="home">
      <div className="wrap-content">
        <h1 className="text-head">
          <span className="spancon">CON</span>CELFAR
        </h1>
        <p className="text-body">
          Convert Celcius And Fahrenheit Powered by.Venorg
        </p>
        <div className="nav-android">
          <a href="/celtofah" className="menu-and">
            Celcius - Fahrenheit
          </a>
          <p className="hr-and">|</p>
          <a href="/fahtocel" className="menu-and">
            Fahrenheit - Celcius
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
