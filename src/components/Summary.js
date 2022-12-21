const Summary = ({ value }) => {
  return <div className="summary">$ {parseInt(value) || 0}</div>;
};

export default Summary;
