interface Props {
  label: string;
  id: string;
}

export default function Filter({ label, id }: Props) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="font-semibold text-gray-700">
        {label}
      </label>
      <br />
      <select
        id={id}
        className=" border border-gray-300 rounded-lg p-2 w-full max-w-96"
      >
        <option value={"all"}>All</option>
      </select>
    </div>
  );
}
