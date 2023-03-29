import './styles.css';

import { ToastContainer } from 'react-toastify'; // повідомлення
import 'react-toastify/dist/ReactToastify.css'; // стилі повідомлень

import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import {
  Context,
  useCustomDataContext,
  useCustomPageContext,
} from 'Context/Context';

// * Рефакторінг в Хуки
export const App = () => {
  const [request, setRequest] = useState('');
  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  const { setPage } = useCustomPageContext;
  const { setData } = useCustomDataContext;

  // Отримання даних запиту з форми
  const onSubmit = requestValue => {
    setRequest(requestValue);

    // Скидання даних при новому запиті:
    setData([]);
    setPage(1);
  };

  return (
    <Context>
      <>
        {/* Форма пошуку: */}
        <Searchbar onSubmit={onSubmit} />

        {/* Галерея зображень */}
        <ImageGallery request={request}></ImageGallery>

        {/* Контейнер для повідомлень: */}
        <ToastContainer newestOnTop={true} autoClose={4000} />
      </>
    </Context>
  );
};

// export class App extends Component {
//   state = {
//     request: '',
//   };

//   // Отримання даних запиту з форми
//   onSubmit = requestValue => {
//     this.setState({ request: requestValue });
//   };

//   render() {
//     return (
//       <>
//         {/* Форма пошуку: */}
//         <Searchbar onSubmit={this.onSubmit} />

//         {/* Галерея зображень */}
//         <ImageGallery request={this.state.request}></ImageGallery>

//         {/* Контейнер для повідомлень: */}
//         <ToastContainer newestOnTop={true} autoClose={4000} />
//       </>
//     );
//   }
// }
