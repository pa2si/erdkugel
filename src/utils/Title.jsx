const Title = ({ text }) => {
  return (
    <div className="title font-main-bold">
      <h3>{text}</h3>
      <div className="title__underline"></div>
    </div>
  );
};
export default Title;
