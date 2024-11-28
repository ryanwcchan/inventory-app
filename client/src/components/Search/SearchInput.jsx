import RedButton from "../Buttons/RedButton";

export default function SearchInput({
  placeholder,
  value,
  onClearSearch,
  onChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2"
      />
      <div className="flex gap-4 place-self-center sm:place-self-end">
        <RedButton func={onClearSearch}>Clear</RedButton>
      </div>
    </div>
  );
}
