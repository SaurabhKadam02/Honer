function Card({
  imglink = "https://placehold.co/200",
  name = "Card",
  description = "Enter discription",
  buttontext = "Click me!",
  action = () => console.log("Clicked"),
}) {
  return (
    <div className="card">
      <img src={imglink} alt="" />
      <br />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={action}>{buttontext}</button>

      <br />
      <br />
    </div>
  );
}
export default Card;
