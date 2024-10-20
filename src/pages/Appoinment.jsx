import React, { useContext, useEffect, useState } from "react";  
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctrs from "../Commponents/RelatedDoctrs";

const Appointment = () => {
  const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const [doctorInfo, setDoctorInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
    const [selectedSlotTime, setSelectedSlotTime] = useState("");
    const [slotBookings, setSlotBookings] = useState({});

    useEffect(() => {
        const docInfo = doctors.find(doc => doc._id === docId);
        if (docInfo) setDoctorInfo(docInfo);
    }, [docId, doctors]);

    useEffect(() => {
        if (doctorInfo) {
            generateAvailableSlots();
        }
    }, [doctorInfo]);

    const generateAvailableSlots = () => {
        const today = new Date();
        const slots = [];

        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            if (i === 0) {
                currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0);
            } else {
                currentDate.setHours(10, 0);
            }

            const timeSlots = [];
            while (currentDate < endTime) {
                const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                    bookings: 0 // Initialize bookings count
                });
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            slots.push(timeSlots);
        }

        setDocSlots(slots);
        console.log("Generated slots:", slots); // Debugging: Check generated slots
    };

    const handleSlotClick = (index) => {
        setSelectedSlotIndex(index);
    };

    const handleSlotBook = (slotIndex, slotTime) => {
        const selectedSlot = docSlots[slotIndex].find(slot => slot.time === slotTime);
        if (selectedSlot && selectedSlot.bookings < 5) {
            const bookingKey = `${slotIndex}-${slotTime}`;
            setSlotBookings(prev => ({
                ...prev,
                [bookingKey]: (prev[bookingKey] || 0) + 1
            }));
            selectedSlot.bookings += 1; // Update bookings directly
            setDocSlots([...docSlots]); // Trigger re-render
        }
    };

    return (
        doctorInfo && (
            <main>
                {/* Doctor Info Section */}
                <section className="flex flex-col sm:flex-row gap-5">
                    <div>
                        <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={doctorInfo.image} alt={doctorInfo.name} />
                    </div>
                    <div className="flex-1 border rounded-lg border-gray-400 p-8 py-7 bg-white mx-2">
                        <p className="flex items-center gap-4 text-2xl font-medium text-gray-900">
                            {doctorInfo.name}
                            <img src={assets.verified_icon} alt="Verified" />
                        </p>
                        <aside className="flex gap-2 items-center text-sm mt-1 text-gray-600">
                            <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
                            <button className="py-0.5 px-2 border rounded-full">{doctorInfo.experience} Years</button>
                        </aside>
                        <section className="mt-3">
                            <p className="flex items-center gap-1 text-sm font-medium text-gray-900">About <img src={assets.info_icon} alt="Info" /></p>
                            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{doctorInfo.about}</p>
                        </section>
                        <div>
                            <p className="text-gray-500 font-medium mt-4">
                                Appointment Fee: <span className="text-gray-600">{currencySymbol}{doctorInfo.fees}</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Booking Slot Section */}
                <section className="sm:ml-72 sm:pl-9 mt-4 font-medium text-gray-700">
                    <p>Booking Slots</p>
                    <aside className="flex gap-3 items-center overflow-x-scroll mt-4">
                        {docSlots.length > 0 && docSlots.map((slots, index) => (
                            <div
                                key={index}
                                onClick={() => handleSlotClick(index)}
                                className={`text-center cursor-pointer rounded-full py-6 min-w-16 ${ selectedSlotIndex === index ? 'bg-primary text-white' : 'border border-gray-400' }`}
                            >
                                <p>{slots[0] && daysOfWeek[slots[0].datetime.getDay()]}</p>
                                <p>{slots[0] && slots[0].datetime.getDate()}</p>
                            </div>
                        ))}
                    </aside>

                    <aside className="flex items-center gap-3 w-full mt-4 overflow-x-scroll">
                        {docSlots[selectedSlotIndex]?.map((item, index) => {
                            const isBooked = slotBookings[`${ selectedSlotIndex }-${ item.time }`] >= 5; // Check if the slot has reached its booking limit

                            return (
                                <p
                                    key={item.time}
                                    onClick={() => {
                                        if (isBooked) {
                                            // Find the next available slot
                                            const nextAvailableSlot = docSlots[selectedSlotIndex].slice(index + 1).find(slot => slotBookings[`${ selectedSlotIndex }-${ slot.time }`] < 5);
                                            if (nextAvailableSlot) {
                                                setSelectedSlotTime(nextAvailableSlot.time);
                                                handleSlotBook(selectedSlotIndex, nextAvailableSlot.time);
                                            }
                                        } else {
                                            setSelectedSlotTime(item.time);
                                            handleSlotBook(selectedSlotIndex, item.time);
                                        }
                                    }}
                                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${ item.time === selectedSlotTime ? 'bg-primary text-white' : isBooked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-gray-600 border border-gray-300'
                                        }`}
                                >
                                    {item.time.toLowerCase()}
                                </p>
                            );
                        })}
                    </aside>


                    <button className="bg-primary text-sm text-white font-light rounded-full px-14 py-3 my-6">
                        Book an Appointment
                    </button>
                </section>

                {/* listing related docters */}
                <RelatedDoctrs docId={docId} speciality={doctorInfo.speciality} />
            </main>
        )
    );
};

export default Appointment;
