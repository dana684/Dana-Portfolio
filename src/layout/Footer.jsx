const Footer = () => {
    const year = new Date().getFullYear();
    return (

        <footer className="py-8 px-6 dark-bg border-t border-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
                <p className="text-gray-300 mb-4 md:mb-0">© {year} Dana Jamool. All rights reserved.<i className="fas fa-heart text-[#FF8533] mx-1"></i></p>
            </div>
        </footer>

    )
}
export default Footer