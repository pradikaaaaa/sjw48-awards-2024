const Banner = () => {
    return (
        <div className="relative flex items-center justify-center h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-8 rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <img
                src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" // URL gambar latar belakang
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* Banner Content */}
            <div className="relative z-10 mt-40">
                <h1 className="text-4xl font-bold mb-4">
                    THE CHANGE IS NOW
                </h1>
            </div>
        </div>
    )
}

export default Banner