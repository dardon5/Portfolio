import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Diego Spranger",
      title: "CTO @Swift",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Ernesto Gutierrez",
      title: "CEO & President @SESA de C.V.",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Baptiste Pousset",
      title: "E&Q Engineer @TPC",
      img: "assets/person.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
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
