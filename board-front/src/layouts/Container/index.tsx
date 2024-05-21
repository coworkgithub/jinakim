import { Outlet, useLocation } from 'react-router-dom'
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import { AUTH_PATH } from 'constant';

//componet : Container 레이아웃 
export default function Container() {

//state: 현재 페이지 path name 상태
const {pathname} = useLocation();




//redner : Container 레이아웃 렌더링
  return (
    <>
        {pathname}
        <Header />

        <Outlet /> 
        {pathname !== AUTH_PATH()&& <Footer />}
        
    </>
  )
}