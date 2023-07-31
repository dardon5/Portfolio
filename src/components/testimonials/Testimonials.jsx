import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Diego Spranger",
      title: "CTO @Swift",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Working with you is an absolute pleasure. Your strong work ethic makes you a standout contributor to our team. ",
    },
    {
      id: 2,
      name: "Ernesto Gutierrez",
      title: "CEO @SESA de C.V.",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Your dedication to your craft is truly inspiring. You consistently bring an infectious enthusiasm to our software development projects, and your passion shines through in the way you tackle challenges with creativity.",
      featured: true,
    },
    {
      id: 3,
      name: "Baptiste Pousset",
      title: "E&Q Engineer @TPC",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Alejandro is that one developer everyone loves to have on their team, his passion for coding is contagious! You can see the excitement in his eyes as he dives into projects, and his commitment to delivering top-notch work never fails to inspire!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <div className="title-container">
        <h1 className="background-title">TESTIMONIALS</h1>
        <h1 className="main-title">Who I've Helped</h1>
      </div>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h2>{d.name}</h2>
              <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
