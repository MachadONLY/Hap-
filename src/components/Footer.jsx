import "../scss/Footer.scss";

export default function Rodape() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-address">
            <p>Av. Paulista, 1106 - 4º andar - São Paulo - SP</p>
          </div>
          <div className="footer-topic">
            <p>Global Solution - Engenharia de Software</p>
          </div>
          <div className="footer-team">
            <p>Gabriel Teixeira Machado - RM551570</p>
            <p>João Lucas Yudi Redi Handa - RM98458</p>
          </div>
          <div className="footer-class">
            <p>ESPG</p>
          </div>
        </div>
      </footer>
    </>
  );
}