
const SpinnerBorder = ({mensaje}) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-info" role="status">
      </div>
        <span className="">{mensaje}</span>
    </div>
  )
};
export default SpinnerBorder;
