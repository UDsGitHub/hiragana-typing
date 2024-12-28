type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Input = ({ value, onChange }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 px-6 z-20">
      <input
        className="w-full h-16 outline-none bg-transparent"
        type="text"
        placeholder="Type right here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
