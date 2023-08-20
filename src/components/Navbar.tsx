import "../sass/Navbar.scss";

export default function Navbar() {
  const navData = [
    {
      icon: "/assets/telephone.png",
      text: "1337 1337 1337",
    },
    {
      icon: "/assets/flag.png",
      text: "Try another Castle",
    },
  ];

  return (
    <nav className="navbar">
      {navData.map((data) => (
        <div key={data.text} className="navbar__items">
          <img className="navbar__icon" src={data.icon} alt={data.text} />
          <p className="navbar__text">{data.text}</p>
        </div>
      ))}
    </nav>
  );
}
