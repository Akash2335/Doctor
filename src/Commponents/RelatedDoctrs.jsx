import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


const RelatedDoctrs = ({docId,speciality}) => {
    const { doctors } = useContext(AppContext);
    const [relatedocs, setRelatedDocs] = useState([]);
    const navigate=useNavigate()
    
    useEffect(() => {
        if (doctors.length>0 && speciality) {
            const doctrsdata = doctors.filter(docs => docs.speciality === speciality && docId != docs._id);
            setRelatedDocs(doctrsdata);
        }
    },[doctors,speciality,docId])
    return (
       <div className="flex flex-col items-center justify-center justify-items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Related Docters</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 sm:px-0">
                {
                    relatedocs.length && relatedocs.slice(0,5).map((item, index) => (
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
        </div>
    )
}
export default RelatedDoctrs;