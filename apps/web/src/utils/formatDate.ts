const formatDate = (date: string) => {
  if (!date) return "";

  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString();

  return formattedDate;
};

export default formatDate;
