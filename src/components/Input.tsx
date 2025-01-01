type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Input = ({ value, onChange }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 px-2 md:px-3 z-20">
      <input
        className="w-full h-12 md:h-16 outline-none bg-transparent text-base md:text-2xl"
        type="text"
        placeholder="Type right here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
