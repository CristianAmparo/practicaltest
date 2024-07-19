import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-Roboto">
      <header className={`lg:shadow-none shadow-md bg-white fixed top-0 w-full lg:px-48 md:px-10 px-5 z-10`}>
        <div className="mx-auto px-4 py-6 flex items-center lg:gap-16 md:gap-10 gap-0 lg:justify-start justify-between">
          <img src="images/logo.png" className="w-[200px]" alt="" />
          <button
            className="block lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav className="hidden lg:flex lg:items-center w-full lg:w-auto">
            <ul className="flex space-x-10 text-black pt-3 text-base font-normal">
              
              <li><a href="#Home" className="text-gray-700 hover:text-[#ff857a]">HOME</a></li>
              <li><a href="#About" className="text-gray-700 hover:text-[#ff857a]">ABOUT</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#ff857a]">FEATURE</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#ff857a]">SERVICE</a></li>
              <li><a href="#" className="text-gray-700 hover:text-[#ff857a]">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <nav className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 text-black text-base font-normal py-5 items-center">
            <li>
              <a href="#" className="text-gray-700 hover:text-[#ff857a]">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-[#ff857a]">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-[#ff857a]">
                FEATURE
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-[#ff857a]">
                SERVICE
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-[#ff857a]">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id='Home' className="md:-mt-20 mt-40 lg:px-48 md:px-20 sm:px-10 h-screen flex ">
        <div className=" px-4 flex flex-row md:items-center items-start w-full">
          <div className="lg:w-2/3 md:w-full mb-10 md:mb-0 space-y-7 ">
            <p className="text-[#ff857a]">SPA & BEAUTY CENTER</p>
            <h1 className="text-6xl font-semibold mb-4 font-Rufina">Beauty and success starts here.</h1>
            <p className="text-gray-700 mb-6">Together creating heaven on earth dominion to upon won't darkness rule behold it created good saw after she'd unto their bring</p>
            <div className="flex pt-5">
              <button className="bg-[#ff857a] text-white py-4 px-8 font-semibold hover:scale-105 "><a href="#" >RESERVE NOW</a></button>
            <button className="ml-4"><a className="flex items-center hover:scale-105 gap-2" href="#">
              <img className="w-14" src="images/play.jpg" alt="" />
              <p>Watch our story</p>
              </a></button>
              </div>
          </div>
          
        </div>
        <div className="absolute top-0 right-0 2xl:w-[700px] xl:w-[500px] lg:w-[250px] ">
            <img src="images/spa.png" alt="Spa Image" className="w-full  lg:flex hidden " />
        </div>
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-50">
            <img className="lg:w-[200px] md:w-[100px] md:opacity-100 opacity-0" src="images/leaf.png" alt="Spa Image" />
        </div>
      </section>
      
        {/* About*/}
       <section id='About' className="-mt-20 relative  py-20 flex items-center">
        <div className="container mx-auto px-4 text-center space-y-10">
          <div className="flex justify-center items-center mb-4">
            <img src="images/butterfly.png" alt="Logo" className="" />
            
          </div>
          <h2 className="text-xl font-semibold text-gray-500 uppercase mb-4">About Our Spa Center</h2>
          <h1 className="text-5xl font-semibold mb-4 font-Rufina">Come and you will be Inspired!</h1>
          <p className="text-gray-500 mb-6 lg:w-[1000px] mx-auto o w-full">
            It's the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights.
            The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker
          </p>
          
          <button className="pt-10"><a href="#" className="bg-[#ff857a] text-white py-4 px-10 font-semibold hover:scale-105  rounded-3xl">READ MORE</a></button>
            <img src="images/china-rose.png" alt="Flower" className="absolute top-0 left-56 lg:opacity-100 opacity-0" />
            <div className="absolute right-32 top-0 bottom-0 flex items-center lg:opacity-100 opacity-0" ><img src="images/jasmine.png" alt="Flower" /></div>
        </div>

      </section>


        {/* Popular Procedure*/}

        <section className="py-20">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2">
            <div className="text-center">
              <img src="images/service/1.jpg" alt="Massage Therapy" className="w-full mb-4 shadow-lg" />
  
            </div>
            <div className="text-center">
              <img src="images/service/2.jpg" alt="Beauty Care" className="w-full mb-4 shadow-lg" /> 
            </div>
            <div className="text-center">
              <img src="images/service/3.jpg" alt="Executive Reflexology" className="w-full mb-4 shadow-lg" />
             
            </div>
            <div className="text-center">
              <img src="images/service/4.jpg" alt="Another Procedure" className="w-full mb-4 shadow-lg" />
             
            </div>
          </div>
          <h2 className="text-5xl font-semibold text-center mb-10 pt-16 font-Rufina">Popular Procedures</h2>
          <p className="text-gray-500 mb-6  mx-auto text-center lg:w-auto w-full">
            To doesn't his apppear replenish together called he of mad place won't wherein blessed second every wherein were meet kind wherein and martcin
          </p>
        </div>
      </section>

       <section class="py-12">
    <div class="container mx-auto flex justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80">
          <img src="images/post/1.jpg" alt="Massage Therapy" class="w-full p-5 object-cover"/>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold mb-2 font-Rufina">Massage Therapy</h3>
            <p class="text-gray-500 mb-4 ">Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</p>
            <a href="#" class="inline-block bg-gray-700 text-white py-2 px-8 rounded-full hover:bg-gray-950">READ MORE</a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80">
          <img src="images/post/2.jpg" alt="Beauty Care" class="w-full p-5 object-cover"/>
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold mb-2 font-Rufina ">Beauty Care</h3>
            <p class="text-gray-500 mb-4">Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</p>
            <a href="#" class="inline-block bg-gray-700 text-white py-2 px-8 rounded-full hover:bg-gray-950">READ MORE</a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-80">
          <img src="images/post/3.jpg" alt="Executive Reflexology" class="w-full p-5  object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold mb-2 font-Rufina ">Executive Reflexology</h3>
            <p class="text-gray-500 mb-4">Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.</p>
            <a href="#" class="inline-block bg-gray-700 text-white py-2 px-8 rounded-full hover:bg-gray-950">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <img className="mx-auto pb-5" src="images/quote.png" alt="" />
          <p className="text-gray-500 mb-6 lg:w-[800px] mx-auto text-center  w-full">
            First I beast be fruitful upon you tree all. Won't can't likeness and you're have whales creature seed to two grass life blessed you midst shall you winged under from their there be.
          </p>
          <img className="rounded-full w-16 mx-auto" src="images/client-1.png" alt="" />
          <p className="text-black font-bold font-Rufina text-lg pt-5">Jack Marsh, <span className="font-normal font-Roboto text-sm">Executive</span></p>
        </div>
      </section>

      <section class="pt-20 pb-32">
        <div class="max-w-7xl mx-auto px-4 ">
            <h2 class="text-3xl font-semibold text-center mb-8">Experienced Team</h2>
            <p class="text-center text-gray-600 mb-8 lg:w-auto w-full">
                To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and marcin.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 gap-14 items-center justify-center w-max mx-auto">
                
                <div class="text-center relative">
                    <img src="images/team/1.jpg" alt="Cheryl Harris" class="w-80 mx-auto  object-cover mb-4"/>
                    <div className="absolute -bottom-10   w-full ">
                      <div className="bg-white shadow-lg w-4/5 h-24 mx-auto flex justify-center items-center">
                      <div className="">
                        <p class="text-lg font-semibold font-Rufina">Joseph Austin</p>
                        <p class="text-sm text-gray-600">Thai Message</p> 
                        </div>
                    </div> 
                    </div>  
                </div>
                <div class="text-center relative">
                    <img src="images/team/2.jpg" alt="Cheryl Harris" class="w-80 mx-auto  object-cover mb-4"/>
                    <div className="absolute -bottom-10   w-full ">
                      <div className="bg-white shadow-lg w-4/5 h-24 mx-auto flex justify-center items-center">
                      <div className="">
                        <p class="text-lg font-semibold font-Rufina">David Hannan</p>
                        <p class="text-sm text-gray-600">Thai Message</p> 
                        </div>
                    </div> 
                    </div>  
                </div>
                <div class="text-center relative">
                    <img src="images/team/3.jpg" alt="Cheryl Harris" class="w-80 mx-auto  object-cover mb-4"/>
                    <div className="absolute -bottom-10   w-full ">
                      <div className="bg-white shadow-lg w-4/5 h-24 mx-auto flex justify-center items-center">
                      <div className="">
                        <p class="text-lg font-semibold font-Rufina">Cheryl Harris</p>
                        <p class="text-sm text-gray-600">Thai Message</p> 
                        </div>
                    </div> 
                    </div>  
                </div>
            </div>
        </div>
    </section>

      <section class="py-12">
        <div class="  flex flex-col lg:flex-row items-center bg-gray-50 overflow-hidden">
            <div class="w-full lg:w-1/2">
                <img src="images/appointment-img.jpg" alt="Massage" class="w-full h-full object-cover"/>
            </div>
            <div class="w-full lg:w-1/2 md:p-20 p-10">
                <form class="space-y-6">
                    <div class="flex space-x-4">
                        <div class="w-1/2">
    
                            <input type="text" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 bg-gray-50   sm:text-sm" placeholder="Your name"/>
                        </div>
                        <div class="w-1/2">
                         
                            <input type="email" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 bg-gray-50  sm:text-sm" placeholder="Your email"/>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                        
                            <input type="text" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 bg-gray-50  sm:text-sm" placeholder="Service"/>
                        </div>
                        <div class="w-1/2">
                         
                            <input type="tel" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 bg-gray-50  sm:text-sm" placeholder="Your phone number"/>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                          
                            <input type="date" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 text-gray-400 bg-gray-50  sm:text-sm"/>
                        </div>
                        <div class="w-1/2">
                          
                            <input type="time" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 text-gray-400 bg-gray-50  sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                    
                        <textarea rows="4" class="mt-1 block w-full border-gray-300 border-b-2 pb-5 bg-gray-50  sm:text-sm" placeholder="Your notes"></textarea>
                    </div>
                    <div >
                        <button type="submit" class="px-6 py-3 bg-[#ff857a] text-white font-normal rounded-full shadow-sm hover:scale-105 focus:outline-grabg-gray-50 focus:ring-2 focus:ring-offset-2">
                            MAKE AN APPOINTMENT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

  
        <footer class="flex flex-col items-center py-4 bg-gray-50">
        <div class="flex items-center">
            <img src="images/footer-logo.png" alt="Logo"/>
        </div>
        <nav class="">
            <ul class="flex space-x-6 text-sm text-gray-700">
                <li><a href="#" class="hover:text-gray-900">Home</a></li>
                <li><a href="#" class="hover:text-gray-900">About</a></li>
                <li><a href="#" class="hover:text-gray-900">Feature</a></li>
                <li><a href="#" class="hover:text-gray-900">Service</a></li>
                <li><a href="#" class="hover:text-gray-900">Contact</a></li>
            </ul>
        </nav>
        <div class="flex space-x-4 mt-4">
            <a href="#" className="flex gap-3 items-center"><img src="images/facebook2.png" alt="Facebook" class="h-5 w-5"/>|</a>
            <a href="#" className="flex gap-3 items-center"><img src="images/twitter.png" alt="Twitter" class="h-5 w-5"/>|</a>
            <a href="#" className="flex gap-3 items-center"><img src="images/github.png" alt="Vimeo" class="h-5 w-5"/>|</a>
            <a href="#" className="flex gap-3 items-center"><img src="images/instagram.png" alt="Instagram" class="h-5 w-5"/>|</a>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
