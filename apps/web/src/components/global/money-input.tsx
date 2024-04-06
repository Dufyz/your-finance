import { useState } from "react";
import { Input } from "../ui/input";


export default function InputMoney() {
    const [value, setValue] = useState('');

const handleChange = (event: any) => {
  let inputValue = event.target.value;

  inputValue = inputValue.replace(/\D/g, '');

  if (inputValue) {
    inputValue = (parseInt(inputValue) / 100).toFixed(2);
    inputValue = inputValue.replace('.', ',');
    inputValue = `$ ${inputValue}`;
  }

  setValue(inputValue);
};


    return (
        <Input
        id="value"
        placeholder="$ 00,00"
        type="text"
        value={value}
        onChange={handleChange}
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    )
}