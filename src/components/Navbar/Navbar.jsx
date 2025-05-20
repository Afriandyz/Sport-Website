const Navbar = () => {

    const navList = [
        {
            name: 'Home',
        },
        {
            name: 'Category',
        },
        {
            name: 'Trending News',
        },
        {
            name: 'Recent News',
        },
        {
            name: 'Club Ranking',
        },
        {
            name: 'Sports Archive',
        },
    ]

  return (
    <nav className="bg-white p-3 items-center justify-evenly hidden lg:flex z-10">
      <div className="font-birthstone text-4xl">Sport News</div>
      <div>
        <ul>
            {navList.map((item, index) => {
                return (
                    <li key={index} className="inline-block mx-4 text-md font-light">
                        <a href="#" className="text-gray-700 hover:text-gray-900">{item.name}</a>
                    </li>
                )
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
