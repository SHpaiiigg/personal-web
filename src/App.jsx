function App() {
  return (
    <div className="w-full flex flex-col gap-y-[50px] truncate">
      <div className="px-[100px] mt-[100px] flex justify-between text-xl text-[#ffffff]">
        <div className="flex items-center gap-[10px]">
          <img
            src="image/SH.png"
            alt="logo"
            className="h-16 rounded-full"
          />
          <h1>SILLAPACHAI</h1>
        </div>
        <div className="w-1/2 lg:flex hidden lg:gap-10 items-center">
          <button>Home</button>
          <button>My Profile</button>
          <button>Contact</button>
          <button>Portfolio</button>
        </div>
        <div className="lg:hidden flex ">
          <button className="relative">
            <img src="image/menu.svg" alt="" />
            <div className="absolute px-[20px] -translate-x-full w-[254px] h-[437px] rounded-[50px] justify-between py-[40px] text-[#042851] flex flex-col bg-white/40">
              <button className="h-1/5 bg-[#D9D9D9] rounded-[50px]">Home</button>
              <button className="h-1/5 bg-[#D9D9D9] rounded-[50px]">My Profile</button>
              <button className="h-1/5 bg-[#D9D9D9] rounded-[50px]">Contact</button>
              <button className="h-1/5 bg-[#D9D9D9] rounded-[50px]">Portfolio</button>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col lg:px-[100px] lg:gap-[200px] gap-[50px] w-full">
        <img
          src="image/me.jpg"
          alt="profile"
          className="w-min-[250px] w-max-[250px] h-[300px] rounded-[50px]"
        />

        <div className="text-[#ffffff] w-1/2">
          <h2 className="text-wrap w-full text-[40px] font-bold">
            Welcome to My Portfolio
          </h2>
          <p className="text-wrap w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </div>
      <div className="w-full h-[640px] bg-[#042851]"></div>
    </div>
  );
}

export default App;
