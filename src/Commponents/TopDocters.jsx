import React ,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDocters = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
            <p className="sm:w-1/2 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
            <div className="w-full grid grid-cols-auto gap-4 px-3 sm:px-0">
                {
                    doctors.slice(0, 10).map((item, index) => (
                        <div onClick={() => { navigate(`/appoinment/${ item._id }`);  scrollTo(0,0)}} className="border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300" key={index}>
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
            </div>
            <button onClick={() => { navigate('/doctors');scrollTo(0,0) }} className="bg-blue-50 text-gray-500 px-12 py-3 rounded-full mt-10">more</button>
        </div>
    )
};
export default TopDocters;