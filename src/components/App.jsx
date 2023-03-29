import React from 'react'; // проситть для React.createContext
import './styles.css';

import { ToastContainer } from 'react-toastify'; // повідомлення
import 'react-toastify/dist/ReactToastify.css'; // стилі повідомлень

import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const DataContext = React.createContext();
export const PageContext = React.createContext();

// * Рефакторінг в Хуки
export const App = () => {
  const [request, setRequest] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // Отримання даних запиту з форми
  const onSubmit = requestValue => {
    setRequest(requestValue);

    // Скидання даних при новому запиті:
    setData([]);
    setPage(1);
  };

  return (
    <PageContext.Provider value={page}>
      <DataContext.Provider value={data}>
        <>
          {/* Форма пошуку: */}
          <Searchbar onSubmit={onSubmit} />

          {/* Галерея зображень */}
          <ImageGallery
            request={request}
            setData={setData}
            setPage={setPage}
          ></ImageGallery>

          {/* Контейнер для повідомлень: */}
          <ToastContainer newestOnTop={true} autoClose={4000} />
        </>
      </DataContext.Provider>
    </PageContext.Provider>
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
