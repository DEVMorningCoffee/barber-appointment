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
          <li><a href="gallery.html" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Gallery</a></li>
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
  </main>
    </div>
   
  )
}

export default function Home() {
  return (
    <Header></Header>
  )
}
