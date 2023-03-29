import React, { useContext, useState } from 'react';

const DataContext = React.createContext();
const PageContext = React.createContext();

export const useCustomPageContext = () => {
  return useContext(PageContext);
};

export const useCustomDataContext = () => {
  return useContext(DataContext);
};

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  return (
    // В value можна передати як одне значення, так і об'єкт зі значенням і функцією

    // Передача лише значення (функцію доведеться прокидувати пропсами як зазвичай):
    // <DataContext.Provider value={data}>

    // Передача об'єктом:
    <DataContext.Provider value={{ data, setData }}>
      <PageContext.Provider value={{ page: page, setPage: setPage }}>
        {children}
      </PageContext.Provider>
    </DataContext.Provider>
  );
};
