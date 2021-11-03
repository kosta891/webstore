export const formatPrice = (number) => {
  const newNubmer = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);

  return newNubmer;
};

export const getUniqueValues = () => {};
