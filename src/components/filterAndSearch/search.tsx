interface Props {
  label?: string;
  placeholder: string;
  id: string;
}

export default function Search({ label, placeholder, id }: Props) {
  return (
    <div className="w-full">
      <input
        id={id}
        placeholder={placeholder}
        className=" border border-gray-300 rounded-lg p-2 w-full max-w-96"
      />
    </div>
  );
}
