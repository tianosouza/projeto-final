import { useState } from "react"; 
import { Dropdown } from 'primereact/dropdown';

export function SortBy ({ onSort })  {
  
  const options = [
    { name: 'mais relevantes', code: 'relevantes' },
    { name: 'menor preço', code: 'menor-preco' },
    { name: 'maior preço', code: 'maior-preco' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].code);

  const handleChange = (event) => {
    const value = event.value;
    setSelectedOption(value);
    onSort(value);
  };
 
  return (
    <Dropdown
      value={selectedOption}
      onChange={handleChange}
      options={options}
      optionLabel="name"     
      optionValue="code"     
      className="w-full xl:w-11rem border-none shadow-none"
    />
  );
};