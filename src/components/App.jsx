import React from 'react';
import HeaderElem from './header/header';
import Navigation from './navigation/navigation';
import PriceList from './priceList/priceList';
import MainPage from './main/main';
import ReservationForm from './reservationForm/reservationForm';
import Footer from './footer/footer';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <HeaderElem />
      <MainPage />
      <PriceList />
      <ReservationForm />
      <Footer />
    </div>
  );
};
