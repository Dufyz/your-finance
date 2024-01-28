const DisplayName = (name: string) => {
  if (!name) return;

  const nameWords = name.split(" ");
  const firstName = nameWords[0];
  const lastName = nameWords[nameWords.length - 1];
  const displayName = `${firstName} ${lastName}`;

  return displayName;
};

export default DisplayName;
