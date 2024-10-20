import react, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Docters = () => {
    const navigate = useNavigate();
    const { speciality } = useParams();
    const { doctors } = useContext(AppContext);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [filter, setFilter] = useState(false);
    
    const applyFilter = () => {
        if (speciality) {
            setFilteredDoctors(doctors.filter(f => f.speciality === speciality))
        } else {
            setFilteredDoctors(doctors);
        }
    }
     const specialtyItems = [
        'General physician',
        'Gynecologist',
        'Dermatologist',
        'Pediatricians',
        'Neurologist',
        'Gastroenterologist',
    ];
    useEffect(() => {
        applyFilter();
    }, [speciality, doctors])
    return (
        <main>
            <p className='text-gray-600 '>Browse through the doctors specialist.</p>
            <section className='flex flex-col sm:flex-row  items-start gap-5'>'
                <button onClick={()=>setFilter(pre=>!pre)} className={`py-2 px-3 hover:translate-y-[-6px] duration-500 shadow-2xl hover:shadow-gray-800 border rounded text-sm  transition-all sm:hidden  ${filter?'bg-primary text-white':''}`}>Filtter</button>
                <aside className={`flex flex-col gap-4 text-gray-600 text-sm ${filter?'flex':'hidden sm:flex'}`}>
            {specialtyItems.map((item) => (
                <p
                    key={item}
                    onClick={() => speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)}
                    className={`w-[94vw] sm:w-auto pl-3 duration-300 hover:bg-indigo-300 hover:translate-y-[-6px] py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === item ? "bg-indigo-100 text-black" : ""}`}
                >
                    {item}
                </p>
            ))}
        </aside>
                <aside className='w-full grid grid-cols-auto gap-3 gap-y-6'>
                    {
                        filteredDoctors.map(
                            (item, index) => (
                                <div onClick={() => navigate(`/appoinment/${ item._id }`)} className="border border-blue-500 rounded-xl hover:bg-gray-500 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300" key={index}>
                                    <img className="bg-blue-50 " src={item.image} alt={item.image} />
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 text-center text-green-500">
                                            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                            <p>Available</p>
                                        </div>
                                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.speciality}</p>
                                    </div>
                                </div>
                            ))
                    }
                </aside>
            </section>
        </main>
    );
};

export default Docters;