const CuerpoTablaDatos = (props) => {
  const { datos, clase } = { ...props };
  return (
    <>
      {datos?.map((dato, index) =>
        index === 0 ? (
          <td className={`px-2 py-3 ${clase}`}>{dato}</td>
        ) : (
          <td className={`px-2 py-3`}>{dato}</td>
        )
      )}
    </>
  );
};

export default CuerpoTablaDatos;
