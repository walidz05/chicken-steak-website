function Heading({ children1, children2, textAlign = "" }) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        textAlign === "center"
          ? "text-center"
          : textAlign === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      <p className="font-pacifico font-light text-[16px] text-primary">
        {children1}
      </p>

      <h2 className="font-BebasNeue font-normal text-[30px] leading-[1.2] text-white uppercase">
        {children2}
      </h2>
    </div>
  );
}

export default Heading;
