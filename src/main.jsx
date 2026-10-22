import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-[80px] w-full max-w-[1280px] items-center justify-between px-[32px]">
        <div className="flex h-[40px] w-[204px] items-center gap-[8px]">
          <img src="/Logo.svg" alt="Logo" className="h-[100px] w-[50px] pt-3" />

          <span className="text-[20px] font-bold text-[#222222] items-center">
            Gourmet Bistro
          </span>
        </div>

        <div className="flex items-center gap-[32px] text-[14px] text-gray-500">
          <span>Home</span>
          <span>Menu</span>
          <span>Our Story</span>
          <span>Gallery</span>
        </div>

        <div className="flex h-[40px] items-center justify-center rounded-[33554400px] bg-[#FF6B35] px-[24px] text-[14px] text-white">
          Book a Table
        </div>
      </nav>
    </header>
    <main>
      <section class="h-[700px] bg-[url('/Main.svg')] ... bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 flex h-full items-center">
          <div className="ml-[330px] w-[520px] text-white">
            <p className="mb-4 text-xs font-bold tracking-[3px] text-orange-500">
              THE ART OF DINING
            </p>

            <h1 className="text-[48px] font-extrabold leading-[1.15]">
              Elevated culinary
              <br />
              <span className="text-orange-500">experiences</span> for
              <br />
              every palate.
            </h1>

            <p className="mt-5 w-[420px] text-sm leading-6 text-gray-300">
              Discover a symphony of flavors crafted with locally sourced
              ingredients and exceptional passion.
            </p>

            <div className="mt-7 flex gap-3">
              <div className="rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold">
                View Menu
              </div>

              <div className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold">
                Book a Table
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="/1.png" alt="Profile 1" className="h-8 w-8" />
                <img src="/2.png" alt="Profile 1" className="h-8 w-8" />
                <img src="/3.png" alt="Profile 1" className="h-8 w-8" />
              </div>

              <p className="text-xs text-gray-200">
                <span className="font-bold text-white">4.9 </span> from over
                2,000+ happy diners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="mx-auto flex w-[1200px] items-center gap-16">
          <div id="left" className="w-1/2">
            <img
              src="/Container.svg"
              alt="Chef"
              className="w-full max-w-[520px]"
            />
          </div>

          <div id="right" className="w-1/2">
            <h2 className="text-[42px] font-extrabold leading-[1.15] text-[#222]">
              Crafting stories on
              <br />
              every plate since <span className="text-[#ff6b35]">2008.</span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-gray-500">
              Gourmet Bistro was born from a simple vision: to create a space
              where culinary excellence meets genuine hospitality. Our journey
              began in a small kitchen with big dreams, focusing on the purity
              of ingredients and the joy of shared meals.
            </p>

            <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-gray-500">
              Today, we continue that legacy, blending traditional techniques
              with modern innovation to bring you a menu that celebrates the
              best of the season.
            </p>

            <div className="mt-8 flex gap-14">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <img src="/Leaf.jpg" alt="" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#222]">
                    Fresh Harvest
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Daily sourced organic
                    <br />
                    ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                   <img src="/Leaf2.jpg" alt="Expert Chefs"/>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#222]">
                    Expert Chefs
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Award-winning culinary team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="mx-auto h-[120px] w-[1200px] bg-white"></footer>
  </>,
);
