// eslint-disable-next-line react/prop-types
const DefaultInput = ({ name, onChange, value }) => {
  // eslint-disable-next-line
  console.log('aaaa');

  return (
    <input name={name} onChange={onChange} value={value} />
  );
};

export default DefaultInput;
