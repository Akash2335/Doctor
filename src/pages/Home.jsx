import react from 'react';
import Header from '../Commponents/Header';
import Speciality from '../Commponents/Speciality';
import TopDocters from '../Commponents/TopDocters';
import Banner from '../Commponents/Banner';

const Home = () => {
    return (
        <>
            <Header />
            <Speciality />
            <TopDocters />
            <Banner/>
        </>  
    );
}
export default Home;