const Header = () => {
  return (
    <div>
    <header className="bg-white p-8 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="site-title">
        <h1 className="text-blue-700 text-2xl font-light">John's Barbershop</h1>
        <p className="subtitle text-blue-500 text-sm capitalize">Getting your hair ready</p>
      </div>
      <nav className="space-x-4">
        <ul className="flex items-center gap-10 font-bold">
        <li><a href="index.html" className="current-page text-green-200 transition duration-300 ease-in-out">Home</a></li>
          <li><a href="#gallery" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Gallery</a></li>
          <li><a href="team.html" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Team</a></li>
          <li><a href="about.html" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">About</a></li>
          <li><a href="contact.html" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <div id="home" className="relative h-85vh bg-cover bg-center flex items-center">
      <div className="overlay absolute inset-0 flex items-center justify-center">
        <div className="landing-text text-white text-center opacity-100">
          <h3 className="font-bold pb-6 text-xl">Getting your hair ready</h3>
          <h1 className="text-6xl font-bold mb-6">John's Barbershop</h1>
          <hr className="w-20 h-1 bg-white mx-auto mb-6"/>
          <a href="contact.html" className="btn-hire bg-blue-700 text-white px-8 py-4 rounded-md">Appointment</a>
        </div>
      </div>
    </div>
    <div className="gallery-header text-center py-8" id="gallery">
      <h1 className="font-bold text-4xl text-blue-700 md:text-2xl lg:text-3xl">Some of your most awesome haircuts!</h1>
      <p className="font-semibold text-gray-800">Hope you come back soon</p>
    </div>

    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/4 p-2">
        <img src="/1.jpg" alt="" className="w-full"/>
        <img src="/2.jpg" alt="" className="w-full"/>
        <img src="/3.jpg" alt="" className="w-full"/>
        <img src="/4.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/5.jpg" alt="" className="w-full"/>
        <img src="/6.jpg" alt="" className="w-full"/>
        <img src="/7.jpg" alt="" className="w-full"/>
        <img src="/8.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/9.jpg" alt="" className="w-full"/>
        <img src="/10.jpg" alt="" className="w-full"/>
        <img src="/11.jpg" alt="" className="w-full"/>
        <img src="/12.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/13.jpg" alt="" className="w-full"/>
        <img src="/14.jpg" alt="" className="w-full"/>
        <img src="/16.jpg" alt="" className="w-full"/>
        <img src="/18.jpg" alt="" className="w-full"/>
      </div>
    </div>
  </main>
    </div>
   
  )
}

export default function Home() {
  return (
    <Header></Header>
  )
}
