import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative z-0 flex items-center justify-center h-96 text-white bg-white text-center p-8 overflow-hidden">
            {/* Background Image */}
            <Image 
                fill={true}
                src="/images/banner/banner.jpeg" // URL gambar latar belakang
                alt="Background"
                className="absolute inset-0 w-full h-full"
            />

            {/* Banner Content */}
            {/* <div className="relative z-10 mt-96">
                <h1 className="text-4xl font-bold mb-4 text-black">
                    THE CHANGE IS NOW
                </h1>
            </div> */}
        </div>
    )
}

export default Banner