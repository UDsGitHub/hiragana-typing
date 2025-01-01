import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import OutputDisplay from "./components/OutputDisplay";
import { hiraganaCharacters } from "./data";

function App() {
  const [inputText, setInputText] = useState("");
  const [hiraganaText, setHiraganaText] = useState("");

  const processInputText = (inputValue: string) => {
    const length = inputValue.length;
    const regex = /[0-9\p{P}\p{S}]/u;
    const specialCharOrNumber = regex.test(inputValue[length - 1]);
    if (specialCharOrNumber) {
      return setHiraganaText((prev) => prev + inputValue[length - 1]);
    }

    let tempText = "";
    for (let i = 0; i <= length; i++) {
      const firstChar = inputValue[i];
      const secondChar = inputValue[i + 1] || "";
      const firstHir = hiraganaCharacters[inputValue[i]] || "";
      const firstSecondHir = hiraganaCharacters[firstChar + secondChar] || "";
      if (firstSecondHir) {
        tempText += firstSecondHir;
        i++;
      } else {
        tempText += firstHir;
      }
    }
    setHiraganaText(tempText);
  };

  const handleInputChange = (value: string) => {
    setInputText(value);
    processInputText(value);
  };

  return (
    <>
      <main className="h-full flex flex-col text-white font-sans text-2xl p-4">
        <h1 className="font-engagement text-center text-4xl font-semibold mb-[20vh]">Hiragana Typing</h1>
        <div className="max-w-4xl w-full mx-auto">
          <OutputDisplay hiraganaText={hiraganaText} />
          <Input value={inputText} onChange={handleInputChange} />
          <p className="tracking-wider text-sm italic mt-4 text-center text-white/50">
            Type in english syllables and see hiragana conversion above
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
