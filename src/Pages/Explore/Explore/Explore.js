import { useEffect, useState } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';


export default function Example() {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://baby-island.herokuapp.com/all')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {toys.map((toy) => (
                        <ExploreCard
                            key={toy._id}
                            product={toy}
                        ></ExploreCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
