// import React, { useState } from "react";

// const MathAutocomplete: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [options, setOptions] = useState<string[]>([]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     setInputValue(value);

//     // List of mathematical operations
//     const mathOptions: { [key: string]: string } = {
//       "plus": "+",
//       "minus": "-",
//       "multiply": "*",
//       "divide": "/",
//       // Add more mathematical operations as needed
//     };

//     // List of number words
//     const numberWords: { [key: string]: string } = {
//       "zero": "0",
//       "one": "1",
//       "two": "2",
//       "three": "3",
//       "four": "4",
//       "five": "5",
//       "six": "6",
//       "seven": "7",
//       "eight": "8",
//       "nine": "9",
//       // Add more number words as needed
//     };

//     // Replace operation words with symbols and number words with digits
//     let replacedValue = value;
//     Object.keys(mathOptions).forEach(option => {
//       const symbol = mathOptions[option];
//       const regex = new RegExp(`\\b${option}\\b`, "gi"); // Word boundary regex
//       replacedValue = replacedValue.replace(regex, symbol);
//     });

//     Object.keys(numberWords).forEach(word => {
//       const digit = numberWords[word];
//       const regex = new RegExp(`\\b${word}\\b`, "gi"); // Word boundary regex
//       replacedValue = replacedValue.replace(regex, digit);
//     });

//     setInputValue(replacedValue);

//     // Filter options based on input value
//     const filteredOptions: string[] = [];
//     Object.keys(mathOptions).forEach(option => {
//       if (option.includes(value) || mathOptions[option].includes(value)) {
//         filteredOptions.push(mathOptions[option]);
//       }
//     });

//     setOptions(filteredOptions);
//   };

//   const handleSelectOption = (option: string) => {
//     setInputValue(inputValue + option);
//     setOptions([]);
//   };

//   const handleSubmit = () => {
//     try {
//       const result = eval(inputValue);
//       if (!isNaN(result)) {
//         setInputValue(result.toString());
//       } else {
//         alert("Invalid expression");
//       }
//     } catch (error) {
//       alert("Error evaluating expression");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type a math operation..."
//       />
//       {options.length > 0 && (
//         <ul>
//           {options.map(option => (
//             <li key={option} onClick={() => handleSelectOption(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default MathAutocomplete;

import React, { useState } from "react";

const MathAutocomplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    // List of mathematical operations
    const mathOptions: { [key: string]: string } = {
      "plus": "+",
      "minus": "-",
      "multiply": "*",
      "divide": "/",
      // Add more mathematical operations as needed
    };

    // List of number words
    const numberWords: { [key: string]: string } = {
      "zero": "0",
      "one": "1",
      "two": "2",
      "three": "3",
      "four": "4",
      "five": "5",
      "six": "6",
      "seven": "7",
      "eight": "8",
      "nine": "9",
      "ten": "10",
      "eleven": "11",
      "twelve": "12",
      "thirteen": "13",
      "fourteen": "14",
      "fifteen": "15",
      "sixteen": "16",
      "seventeen": "17",
      "eighteen": "18",
      "nineteen": "19",
      "twenty": "20",
      "thirty": "30",
      "forty": "40",
      "fifty": "50",
      "sixty": "60",
      "seventy": "70",
      "eighty": "80",
      "ninety": "90",
      "hundred": "100",
      "thousand": "1000",
      "million": "1000000",
      "billion": "1000000000",
      "trillion": "1000000000000",
      // Add more number words as needed
    };

    // Replace operation words with symbols and number words with digits
    let replacedValue = value;
    Object.keys(mathOptions).forEach(option => {
      const symbol = mathOptions[option];
      const regex = new RegExp(`\\b${option}\\b`, "gi"); // Word boundary regex
      replacedValue = replacedValue.replace(regex, symbol);
    });

    Object.keys(numberWords).forEach(word => {
      const digit = numberWords[word];
      const regex = new RegExp(`\\b${word}\\b`, "gi"); // Word boundary regex
      replacedValue = replacedValue.replace(regex, digit);
    });

    setInputValue(replacedValue);

    // Filter options based on input value
    const filteredOptions: string[] = [];
    Object.keys(mathOptions).forEach(option => {
      if (option.includes(value) || mathOptions[option].includes(value)) {
        filteredOptions.push(mathOptions[option]);
      }
    });

    setOptions(filteredOptions);
  };

  const handleSelectOption = (option: string) => {
    setInputValue(inputValue + option);
    setOptions([]);
  };

  const handleSubmit = () => {
    try {
      const result = eval(inputValue);
      if (!isNaN(result)) {
        setInputValue(result.toString());
      } else {
        alert("Invalid expression");
      }
    } catch (error) {
      alert("Error evaluating expression");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a math operation..."
      />
      {options.length > 0 && (
        <ul>
          {options.map(option => (
            <li key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MathAutocomplete;
