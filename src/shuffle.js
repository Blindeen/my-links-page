const shuffle = array => {
  let random_index, tmp;
  for (let i = 0; i < array.length; i++) {
    random_index = Math.floor(Math.random() * (i + 1));
    tmp = array[i];
    array[i] = array[random_index];
    array[random_index] = tmp;
  }

  return array;
};

export default shuffle;
