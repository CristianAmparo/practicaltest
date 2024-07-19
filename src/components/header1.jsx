import './App.css';


function App() {
  return (
    <div className="font-sans  text-gray-900">
      
      <header className="bg-white shadow w-full">
        <div className="mx-auto px-4 py-6 flex justify-between items-center">
          <img src="images/logo.png" alt="" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-[#FF6F61]">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#FF6F61]">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#FF6F61]">Feature</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#FF6F61]">Service</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#FF6F61]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-pink-100 py-20">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Beauty and success starts here.</h1>
            <p className="text-gray-700 mb-6">Together creating heaven on earth dominion to upon won't darkness rule behold it created good saw after she'd unto their bring</p>
            <a href="#" className="bg-[#FF6F61] text-white py-2 px-4 rounded">Reserve Now</a>
            <a href="#" className="ml-4 text-[#FF6F61] hover:underline">Watch our story</a>
          </div>
          
        </div>
        <div className="fixed top-0 right-0 w-1/4 ">
            <img src="images/spa.png" alt="Spa Image" className="w-full rounded-lg shadow-lg" />
          </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="massage.jpg" alt="Massage Therapy" className="w-full mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mb-2">Massage Therapy</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <img src="beauty-care.jpg" alt="Beauty Care" className="w-full mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mb-2">Beauty Care</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <img src="reflexology.jpg" alt="Executive Reflexology" className="w-full mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mb-2">Executive Reflexology</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center">
              <img src="another-procedure.jpg" alt="Another Procedure" className="w-full mb-4 rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mb-2">Another Procedure</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-xl font-semibold italic text-gray-900 mb-4">
            "First I beast be fruitful upon you tree all. Won't can't likeness and you're have whales creature seed to two grass life blessed you midst shall you winged under from their there be."
          </blockquote>
          <cite className="text-[#FF6F61] font-bold">- Jack Marsh, Executive</cite>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Experienced Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="team-member-1.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Joseph Austin</h3>
              <p className="text-gray-700">Thai Massage</p>
            </div>
            <div className="text-center">
              <img src="team-member-2.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">David Hannan</h3>
              <p className="text-gray-700">Thai Massage</p>
            </div>
            <div className="text-center">
              <img src="team-member-3.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Cheryl Harris</h3>
              <p className="text-gray-700">Thai Massage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-10">Make an Appointment</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="border p-4 rounded" />
                <input type="email" placeholder="Email Address" className="border p-4 rounded" />
                <input type="text" placeholder="Select Services" className="border p-4 rounded" />
                <input type="text" placeholder="Phone Number" className="border p-4 rounded" />
                <input type="date" className="border p-4 rounded" />
                <textarea placeholder="Your Notes" className="border p-4 rounded"></textarea>
              </div>
              <div className="text-center mt-6">
                <button type="submit" className="bg-[#FF6F61] text-white py-2 px-4 rounded">Make an Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700">&copy; 2024 BeautySpa. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-[#FF6F61]">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-[#FF6F61]">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-[#FF6F61]">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
