const CabeceraTabla = ({ cabecera }) => {
  return (
    <thead className="border-b text-xs bg-slate-800 dark:border-neutral-700">
      <tr>
        {cabecera?.map((titulo) => (
          <th className="px-2 py-3">{titulo}</th>
        ))}
      </tr>
    </thead>
  );
};
export default CabeceraTabla;
