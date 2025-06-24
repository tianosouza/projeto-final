import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

const normalize = (text) =>
  text
    ?.toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") || "";


export function FilterGroup ({
  title,
  inputType,
  options = [],
  selectedValues,
  onChange,
}) {
  
  const checkedValues =
    inputType === "checkbox"
      ? Array.isArray(selectedValues)
        ? selectedValues
        : []
      : selectedValues ?? "";

  
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="py-2">
      <h4 className="mt-0 mb-3">{title}</h4>
      {options.map((option) => {
        
        const isChecked =
          inputType === "checkbox"
            ? checkedValues.includes(option.value)
            : normalize(checkedValues) === normalize(option.value);

        return (
          
          <label
            key={option.value}
            className="flex align-items-center cursor-pointer mb-2"
          >
            {inputType === "checkbox" ? (
              <Checkbox
                inputId={option.value}
                value={option.value}
                onChange={() => handleChange(option.value)}
                checked={isChecked}
                className="mr-2"
              />
            ) : (
              <RadioButton
                inputId={option.value}
                name={title}
                value={option.value}
                onChange={() => handleChange(option.value)}
                checked={isChecked}
                className="mr-2"
              />
            )}
            <span>{option.name}</span>
          </label>
        );
      })}
    </div>
  );
};