export const Input = ({ registerName, required, validate}) => {
  return (
    <input
      {...register(
        { registerName },
        {
        ...
        }
      )}
    />
  );
};
