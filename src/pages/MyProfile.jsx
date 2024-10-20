import react, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: 'Akas Bharati',
        image: assets.profile_pic,
        email: 'akashbharati2335@gami.com',
        phone: '9834335376',
        address: {
            line1: "kupwad sangli",
            line2: " sukhawadi",
        },
        gender: 'Male',
        dob: '1998-06-09'
    });
    const [isEdit, setEdit] = useState(false);
    return (
        <div className='max-w-lg flex flex-col gap-4 text-sm'>
            <img src={userData.image} className='w-36 rounded shadow-gray-700 shadow-2xl'  alt="" />
            {
                isEdit ?
                    <input type="text" className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' onChange={(e) => setUserData(pre => ({ ...pre, name: e.target.value }))} value={userData.name} />
                    : <p className='font-medium text-3xl text-neutral-700 mt-4'>{userData.name}</p>
            }
            <hr className='bg-zinc-300 h-[1px] border-none'/>
            <div>
                <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                       <p className='font-medium '>Email id:</p>
                <p className='text-blue-500'>{userData.email}</p>
                <p className='font-medium'>Phone</p>
                {
                    isEdit ? <input type="text" className='bg-gray-100 max-w-52' onChange={(e) => setUserData(pre => ({ ...pre, phone: e.target.value }))} value={userData.phone} /> :
                        <p className='text-blue-400' id={userData.phone}>{userData.phone}</p>
                }
                <p className='font-medium'>Address</p>
                {
                    isEdit ? <p> <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={(e) => setUserData(pre => ({ ...pre, address: { ...pre.address, line1: e.target.value } }))} /> <br /> <input type="text" value={userData.address.line2} className='bg-gray-50' onChange={(e) => setUserData(pre => ({ ...pre, address: { ...pre.address, line2: e.target.value } }))} /></p> : <p className='text-gray-500'>{userData.address.line1} <br />{userData.address.line2}</p>
                }
             </div>
            </div>
            <div>
                <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Gender</p>
                    {
                        isEdit ? <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData(pre=>({...pre,gender:e.target.value}))} value={userData.gender}>
                            <option value="Male" key="M">Male</option>
                            <option value="Femaile" key="F">Femaile</option>
                        </select> : <p className='text-gray-400'>{ userData.gender}</p>
                    }
                    <p className='font-medium'>Birthday</p>
                    {
                        isEdit ? <input className='max-w-fit bg-gray-400' type="date" value={userData.dob} onChange={(e) => setUserData(pre => ({ ...pre, dob: e.target.value }))} /> :
                            <p className='text-gray-400'>{userData.dob}</p>
                    }
                </div>
            </div>
            <div className='mt-10'>{
                isEdit ? <button className='py-2 px-8 rounded-full border border-primary hover:bg-primary hover:text-white transition-all' onClick={() => setEdit(false)}>Save Information</button> :
                    <button className='px-8 py-2 border border-primary rounded-full hover:bg-primary hover:text-white transition-all ' onClick={() => setEdit(true)}>Edit</button>
            }</div>
        </div>
    )
};
export default MyProfile;