import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=36261885-ace95c32b2b407d9c65e4399b&image_type=photo&orientation=horizontal&per_page=12';

export const getPictures = async (query, page) => {
  const { response } = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=36261885-ace95c32b2b407d9c65e4399b&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response;
};

// export const getPictures = query => {
//   return fetch(BASE_URL)
//     .then(response => response.json())
//     .then(console.log());
// };
// GetPictures();
