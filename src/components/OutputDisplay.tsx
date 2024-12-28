type Props = {
  hiraganaText: string;
};

const OutputDisplay = ({ hiraganaText }: Props) => {
  return (
    <div className="mb-6 font-bold tracking-wider z-20">{hiraganaText}</div>
  );
};

export default OutputDisplay;
