import React, { useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { Outlet, Route, Routes } from 'react-router-dom';
import {
  AddFormModalContextProvider,
  MessageModalContextProvider,
  SearchContextProvider,
} from './context';

// export const App = () => {
//   const [search, setSearch] = useState('');
//   return (
//     <SearchContext.Provider value={{ search, setSearch }}>
//       <div className="wrapper">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Map />} />
//           <Route path="/add" element={<AddForm />} />
//         </Routes>
//       </div>
//     </SearchContext.Provider>
//   );
// };

export const App = () => {
  return (
    <>
      <MessageModalContextProvider>
        <SearchContextProvider>
          <AddFormModalContextProvider>
            <div className="wrapper">
              <Header />
              <div id="detail">
                <Outlet />
              </div>
              <Map />
            </div>
          </AddFormModalContextProvider>
        </SearchContextProvider>
      </MessageModalContextProvider>
    </>
  );
};
