import bgCard from "../../../assets/textures/bg-texture.png";
function Card({ item }) {
  return (
    <>
      <div
        key={item.id}
        className="border-2 border-primary/20 rounded-xl overflow-hidden"
      >
        <img src={item.img} alt="" className="w-full" />
        <div className="p-5" style={{ backgroundImage: `url(${bgCard})` }}>
          <p className="text-white font-bold font-Anton">{item.title}</p>
          <p className="text-white/50 text-[14px] font-Raleway">
            {item.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
