import Dashboard from './pages/dashboard';
import Hotel from './pages/bookHotel';
import Tour from './pages/bookTourPlace';
import Travel from './pages/bookTravel';
import HotelPay from './pages/hotelPayment';
import TourPay from './pages/tourPayment';
import TravelAvail from './pages/availableTravel';
import BusPay from './pages/busPayment';
import TrainPay from './pages/trainPayment';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/tour' element={<Tour/>}></Route>
          <Route path='/hotel' element={<Hotel/>}></Route>
          <Route path='/travel' element={<Travel/>}></Route>
          <Route path='/hotel/payment/:hotelName' element={<HotelPay/>}></Route>
          <Route path='/tour/payment/:place' element={<TourPay/>}></Route>
          <Route path='/travel/available' element={<TravelAvail/>}></Route>
          <Route path='/travel/bus' element={<BusPay/>}></Route>
          <Route path='/travel/train' element={<TrainPay/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
