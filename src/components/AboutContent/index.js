import Icon from "../Icon";
function About() {
  const icons = [
    {
      imgPath: "instagram.png",
      link: "https://instagram.com/jitenghadigaonkar?utm_source=qr&igsh=eTlidzdjM3d4cGQw",
    },
    {
      imgPath: "whatsapp.png",
      link: "https://wa.me/+918689850536?text=Hello",
    },
  ];
  return (
    <div className="my-2">
      <div className="flex-row">
        {icons.map((icon) => (
          <Icon
            key={icon._id}
            _id={icon._id}
            href={icon.link}
            src={icon.imgPath}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
