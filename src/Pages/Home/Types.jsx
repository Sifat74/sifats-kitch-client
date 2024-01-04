import { useEffect, useState } from 'react';
import '../Home/style.css'
const Types = () => {
    const [foodTypes, setFoodTypes] = useState([]);
    useEffect(() => {
        fetch('types.json')
            .then(res => res.json())
            .then(data => setFoodTypes(data))
    }, [])
    return (
        <div className="mt-24 w-[320px] md:w-[640px] lg:w-[960px] mx-auto">
            <div>
                <h3 className="text-center text-[#F01543]">Choose you favorite</h3>
                <h2 className='text-[#000C28] text-center font-semibold text-4xl'>Types of Food</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                {
                    foodTypes.map(foodType =>
                        <div key={foodType.id}>
                            <div className="card w-80 bg-base-100 shadow-xl">
                                <figure><img src={foodType.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div className="card-actions justify-between items-center">
                                        <h2 className="card-title capitalize text-[#000C28]">{foodType.name}</h2>
                                        <button className="btn bg-[#F01543] hover:bg-[#000C28] text-white">Items</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Types;