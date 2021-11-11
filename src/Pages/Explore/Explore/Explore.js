import ExploreCard from '../ExploreCard/ExploreCard';

const products = [
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://image.freepik.com/free-photo/plastic-eccano-set_1398-422.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    {
        _id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        description: "You can't buy your future, but you can do it. Money is nothing, you'r everything.",
        color: 'Black',
    },
    // More products...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <ExploreCard
                            key={product._id}
                            product={product}
                        ></ExploreCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
