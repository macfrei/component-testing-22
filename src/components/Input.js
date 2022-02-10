import styled from 'styled-components';

export default function Input({
  labelText,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <InputStyled
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const InputStyled = styled.input`
  border: 2px solid #bbb;
`;
