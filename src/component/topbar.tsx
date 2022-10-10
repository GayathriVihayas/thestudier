const Topbar = () => {
    return (
        <header className="text-gray-600 z-50 absolute top-0 w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-2xl font-bold md:ml-3">Edugauge</span>
                </a>
                <div className="flex items-center justify-between">
                    <nav className="md:ml-auto flex flex-wrap items-center text-lg font-medium justify-center mr-0 md:mr-5">
                        <a className="mr-3 md:mr-8 text-gray-800 cursor-pointer hover:text-gray-900">Home</a>
                        <a className="mr-3 md:mr-8 text-gray-800 cursor-pointer hover:text-gray-900">Courses</a>
                        <a className="mr-3 md:mr-8 text-gray-800 cursor-pointer hover:text-gray-900">Placement</a>
                    </nav>
                    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded-sm text-white text-base md:mt-0 bg-primary">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
  );
}

export default Topbar;