import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="font-sans m-0 p-0 box-border bg-[#f8f1d1]">


      <header className="bg-transparent absolute w-full z-50 py-4 px-5 md:px-12">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/home">
              <img src="/WhiteLogo.png" className="w-28 md:w-36" alt="Logo" />
            </Link>
          </div>
          <div>
            <Link
              to="/sign-in"
              className="no-underline text-white text-sm md:text-lg font-bold py-2 px-4 md:px-5 bg-teal-900 rounded"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <section
  className="relative bg-cover bg-center h-screen text-white"
  style={{ backgroundImage: "url('/Landingpage.jpg')" }}
>
  <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70"></div>
  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
    <h1 className="text-2xl md:text-4xl mb-2">
      Empowering Taxpayers, Transforming Rural Development
    </h1>
    <p className="text-sm md:text-lg my-5">
      The blockchain-based localized tax redistribution system for transparency and equity.
    </p>
  </div>
  <div className="relative h-screen flex items-center justify-center">
    <Link
      to="/sign-in"
      className="py-2 px-4 md:px-5 bg-teal-900 text-white border-none rounded cursor-pointer"
    >
      Get Started
    </Link>
  </div>
  <div className="absolute bottom-0 w-full text-center py-5">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white px-4 mb-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl mb-1">63%</h2>
        <p className="text-sm md:text-lg">
          Bangladesh's population paying indirect taxes
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl mb-1">5%</h2>
        <p className="text-sm md:text-lg">Engaged in direct tax contributions</p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl mb-1">10M+</h2>
        <p className="text-sm md:text-lg">
          Bangladeshi expatriates sending remittances
        </p>
      </div>
    </div>
  </div>


  
</section>

<div className="relative">
  <svg
    className="absolute bottom-0 w-full h-48"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0  2680 320"
  >
    <path
      fill="#f8f1d1"
      d="M0,160 C240,80 480,240 720,160 C960,90 1200,240 1440,160 C1680,80 1920,240 2160,160 L2160,320 L0,320 Z"
    ></path>
  </svg>
</div>


  
<div className="relative shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto mt-16 px-4 mb-16">
    
  <div className="relative flex flex-col md:flex-row items-center z-10 space-y-6 md:space-y-0">
    <div className="w-full md:w-1/2 p-4">
      <img
        className="rounded-lg w-full object-cover"
        src="nbr.png.png"
        alt="City"
      />
    </div>
 <div className="w-full md:w-1/2 p-4 md:p-20">
  <h2 className="text-2xl md:text-4xl font-bold text-teal-800 mb-6">
    WHO WE ARE?
  </h2>
  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
    TaxChain Innovators is a visionary initiative aimed at transforming public
    finance in Bangladesh through blockchain technology. By empowering taxpayers
    to direct their taxes toward meaningful rural development projects, we foster
    transparency, accountability, and trust in the taxation system.
  </p>
  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
    With an innovative approach, we address the challenges of inequitable resource
    distribution, lack of taxpayer engagement, and corruption in tax usage. Our
    platform, <strong>“স্বচ্ছকর”</strong>, integrates advanced blockchain solutions to
    provide real-time transparency, milestone-based fund disbursement, and
    citizen-driven governance.
  </p>
  <a
  href="#"
  className="inline-flex items-center justify-center px-6 py-2 text-teal-900 font-semibold border-2 border-teal-900 rounded-full hover:bg-teal-900 hover:text-white transition duration-300"
>
  READ MORE
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
</a>

</div>

  </div>
</div>



<section className="py-12 bg-teal-900  border-t-2 border-teal-900  px-10">
  <div className="text-center mb-12 mt-4 ">
    <h2 className="text-3xl font-bold text-[#f8f1d1]">OUR SERVICES</h2>
    <p className="text-gray-400 mt-2">
      Explore how our platform empowers you to make an impact through transparency and trust.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-10 px-4 ">
    {/* Service 1 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl">
      <img
        src="clipart2830924.png"
        alt="Explore Projects"
        className="w-16 h-16 rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-teal-900">Explore Projects</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Discover vetted rural development projects and choose where your contributions go.
        </p>
      </div>
    </div>

    {/* Service 2 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl">
      <img
        src="https://cdn-icons-png.freepik.com/512/6153/6153836.png"
        alt="Pay Tax"
        className="w-16 h-16 rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-teal-900">Pay Tax</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Use our secure and user-friendly platform to pay taxes directly and easily.
        </p>
      </div>
    </div>

    {/* Service 3 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl">
      <img
        src="contribution.png"
        alt="View My Contributions"
        className="w-16 h-16 rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-teal-900">View Your Contributions</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Track your contributions in real-time and see the impact you're making.
        </p>
      </div>
    </div>

    {/* Service 4 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl mb-12">
      <img
        src="https://www.pngplay.com/wp-content/uploads/6/Community-Logo-Background-PNG-Image.png"
        alt="Community Stories"
        className="w-24 h-16 rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-teal-900">Community Stories</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Read inspiring stories of how contributions are transforming communities.
        </p>
      </div>
    </div>

    {/* Service 5 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl mb-12">
      <img
        src="pngegg.png"
        alt="Rewards Earned"
        className="w-16 h-16 rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-teal-900">Earn Rewards</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Earn and redeem rewards for your contributions and active participation.
        </p>
      </div>
    </div>

    {/* Service 6 */}
    <div className="flex items-start bg-[#f3e6c8] rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-85 hover:shadow-2xl mb-12">
  <img
    src="https://cdn-icons-png.flaticon.com/512/17859/17859313.png"
    alt="New Project Proposals"
    className="w-16 h-16 rounded-md"
  />
  <div className="ml-4">
    <h3 className="text-xl font-semibold text-teal-900">Vote for New Projects</h3>
    <p className="text-gray-700 mt-2 text-sm">
      Submit and support new project ideas to create meaningful change.
    </p>
  </div>
</div>

  </div>
</section>

<section className="py-12 bg-transparent border-t-2 border-teal-900">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-teal-900">Our Coverage</h2>
    <p className="text-gray-600 mt-2">
      Highlighting the regions of Bangladesh served by our platform to ensure transparency and impact.
    </p>
  </div>
  <div className="flex justify-center">
    <div className="relative w-full max-w-lg ">
      {/* Bangladesh Map */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bangladesh_divisions_english.svg/738px-Bangladesh_divisions_english.svg.png"
        alt="Bangladesh Coverage Map"
        className="w-full h-auto"
      />
      {/* Example Coverage Overlay (can be customized further) */}
      <div className="absolute top-20 left-20 text-teal-900 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg ">
        <h3 className="text-lg font-semibold">Rangpur Region</h3>
        <p className="text-sm">Significant projects and tax contributions.</p>
      </div>
      <div className="absolute bottom-10 right-20 text-teal-900 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
        <h3 className="text-lg font-semibold">Chittagong Region</h3>
        <p className="text-sm">Focus on rural development projects.</p>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-teal-900 relative ">
 

  {/* Title */}
  <div className="text-center mb-16 relative z-10 ">
    <h2 className="text-4xl font-bold text-[#f8f1d1]">Your Stories</h2>
  </div>

  {/* Arrow Buttons */}
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#f8f1d1] text-teal-900 rounded-full p-3 hover:bg-white transition duration-300 shadow-lg"
    aria-label="Previous Blogs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#f8f1d1] text-teal-900 rounded-full p-3 hover:bg-white transition duration-300 shadow-lg"
    aria-label="Next Blogs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>

  {/* Blog Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10 ">
    {/* Blog Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src="https://econs-bangladesh.org/public/images/researches/20220616112040.jpg"
        alt="Blog Post 1"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          SEPTEMBER 01, 2023
        </p>
        <h3 className="text-xl font-bold text-teal-900 mb-2">
          গ্রামের গর্ব: সফল উদ্যোক্তাদের কাহিনী
        </h3>
        <p className="text-gray-600 mb-4">
          বাংলাদেশের প্রত্যন্ত অঞ্চলের একদল উদ্যোক্তা দেখিয়েছেন কিভাবে ছোট উদ্যোগ বড় পরিবর্তন আনতে পারে।
        </p>
        <a
          href="#"
          className="text-teal-800 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src="https://studyian.com/wp-content/uploads/2024/10/padma-bridge.jpg"
        alt="Blog Post 2"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          SEPTEMBER 01, 2023
        </p>
        <h3 className="text-xl font-bold text-teal-900 mb-2">
          পদ্মা সেতু: স্বপ্নের বাস্তবায়ন
        </h3>
        <p className="text-gray-600 mb-4">
          বাংলাদেশের অর্থনৈতিক উন্নয়নের ক্ষেত্রে পদ্মা সেতু এক নতুন মাইলফলক। এটি দক্ষিণাঞ্চলের মানুষের জীবনযাত্রার মান উন্নত করতে বড় ভূমিকা রাখছে।
        </p>
        <a
          href="#"
          className="text-teal-800 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src="https://www.bssnews.net/assets/news_photos/2024/11/13/image-223212-1731496686.jpg"
        alt="Blog Post 3"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          SEPTEMBER 01, 2023
        </p>
        <h3 className="text-xl font-bold text-teal-900 mb-2">
          দেশের প্রতি ভালোবাসা: প্রবাসী বাংলাদেশিদের গল্প
        </h3>
        <p className="text-gray-600 mb-4">
          বাংলাদেশের অর্থনীতি প্রবাসী বাংলাদেশিদের রেমিট্যান্সের ওপর অনেকাংশে নির্ভরশীল। তারা কেবল অর্থনৈতিকভাবেই নয়, সাংস্কৃতিক দিক থেকেও দেশের উন্নয়নে ভূমিকা রাখছেন।
        </p>
        <a
          href="#"
          className="text-teal-800 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="text-center mt-12 relative z-10 mb-10">
    <a
      href="#"
      className="inline-flex items-center px-6 py-3 bg-[#e8dcc1] text-teal-900 font-semibold rounded-full hover:bg-white transition duration-300"
    >
      SEE ALL BLOGS
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  </div>
</section>



      <section className="bg-gradient-to-b from-[#e8dcc1] via-[#f8f1d1] to-[#e6d8b8] text-teal-900 py-12 px-10">
  <div className="container mx-auto px-6">
    {/* Contact and Map Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md border border-gray-300 w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md border border-gray-300 w-full bg-gray-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company"
              className="p-3 rounded-md border border-gray-300 w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Telephone"
              className="p-3 rounded-md border border-gray-300 w-full bg-gray-100"
            />
          </div>
          <textarea
            placeholder="Message"
            className="p-3 rounded-md border border-gray-300 w-full h-32 bg-gray-100"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Head Office & Map */}
      <div>
        <h2 className="text-3xl font-bold mb-4">HEAD OFFICE</h2>
        <div className="space-y-4">
          <p>123 Main Street, Dhaka, Bangladesh</p>
          <p>Email: <a href="mailto:info@example.com" className="text-blue-300">info@example.com</a></p>
          <p>Call Us: <a href="tel:+880123456789" className="text-blue-300">+880 123-456-789</a></p>
          <p>WhatsApp: <a href="#" className="text-green-300">Message Us Now</a></p>
          <p>Hours: Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848299208845!2d90.39669121498134!3d23.75088549461286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5f8c0b8f47%3A0x8f6a56752a1b1a1b!2sDhaka%20City%20Corporation!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  
 
</section>
 <section className="bg-teal-900 text-white py-10 px-16">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      {/* Logo and About Section */}
      <div className="space-y-4 ">
        <img
          src="WhiteLogo.png"
          alt="Company Logo"
          className="w-36"
        />
        <p className="text-gray-300 leading-relaxed">
          Transforming transparency with innovative solutions and driving change through cutting-edge technology.
        </p>
        
      </div>

      <div>
        <h3 className="text-lg font-bold ml-16">Features</h3>
        <ul className="mt-2 space-y-2 ml-16 text-sm">
          <li> Tax Payment</li>
          <li>Explore Govt Projects</li>
          <li>Allocate Tax</li>
          <li>View Rewards</li>
          <li>Vote for New Projects</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold ml-12">Company</h3>
        <ul className="mt-2 space-y-2 text-sm ml-12">
          <li>
            <a href="#" className="hover:text-gray-500">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Careers</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Contact</a>
          </li>
        </ul>
      </div>

      {/* Legal Section */}
      <div>
        <h3 className="text-lg font-bold">Legal</h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-gray-500">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">Cookie Policy</a>
          </li>
        </ul>
      </div>


      
    </div>

    <div className="text-center mt-10 border-t-2">
      <p className="text-sm text-white mt-10">
        &copy; 2024 Soulace. All rights reserved.
      </p>
      <p className="text-sm text-white mt-2">
        Developed by: Ahmed Alfey Sani, Tauhid Taaha, Nafisa Nawal, Shefayat shams Adib, Tashfia Hasan
      </p>
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
  <a 
    href="https://facebook.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Facebook"
  >
    <img
      src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook.png"
      alt="Facebook"
      className="w-6 h-6 hover:opacity-75 transition"
    />
  </a>
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Twitter"
  >
    <img
      src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png"
      alt="Twitter"
      className="w-6 h-6 hover:opacity-75 transition"
    />
  </a>
  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Instagram"
  >
    <img
      src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png"
      alt="Instagram"
      className="w-6 h-6 hover:opacity-75 transition"
    />
  </a>
  <a 
    href="https://linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="LinkedIn"
  >
    <img
      src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
      alt="LinkedIn"
      className="w-6 h-6 hover:opacity-75 transition"
    />
  </a>
</div>

      <p className="text-sm text-white mt-4">
        <a href="#" className="hover:underline"> Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
      </p>
    </div>
  </div>
</section>



    </div>
  );
};

export default LandingPage;
