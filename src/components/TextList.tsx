export interface TextType {
  syllable: string;
  hiragana: string;
}

type Props = {
  list: TextType[];
};

const TextList = ({ list }: Props) => {
  return (
    <div className={`bg-black/50 rounded-md ${list.length > 0 ? "p-4" : ""}`}>
      <ul className="result-list max-h-[250px]">
        {list.map((item) => (
          <li>
            <div className="text-white/75">
              <p className="">{item.hiragana}</p>
              <p className="text-sm italic">{item.syllable}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
