import style from "./Card.module.css";
function Card(props) {
  const { name, link, onclick, state } = props;
  const styles = () => {
    if (state === "active") {
      return style.active;
    }
    if (state === "unactive") {
      return style.div;
    }
  };
  return (
    <div
      onClick={onclick}
      className={styles()}
      style={{
        backgroundImage: `url(${link})`
      }}
    >
      <h3 className={style.h3}> {name}</h3>
    </div>
  );
}
export default Card;
