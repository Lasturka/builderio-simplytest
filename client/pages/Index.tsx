export default function Index() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="bg-dance-purple relative min-h-screen flex">
        <div className="container mx-auto px-20 max-lg:px-5 flex">
          {/* Left Column */}
          <div className="w-1/4 max-lg:w-full flex flex-col justify-end pb-20 max-lg:pb-10">
            <div className="text-white font-metrophobic text-xl max-lg:text-lg leading-6 mb-7">
              West Coast Swing, tanec plný svobody a zábavy!
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/24356297263cbf6362f572a90339ddd19a858aea?placeholderIfAbsent=true"
              alt="Dance logo"
              className="w-36 h-10 object-contain rounded-md"
            />
          </div>

          {/* Right Column */}
          <div className="w-3/4 max-lg:hidden relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/214b437a5734003b86011d2ee1b90aafa7f94177?placeholderIfAbsent=true"
              alt="Dancing couple"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dance Badge */}
            <div className="absolute top-0 left-0 w-full h-15 bg-gradient-to-r from-dance-yellow/80 to-dance-yellow/30 rounded-[30px] flex items-center justify-center shadow-lg max-w-xs mx-auto mt-0">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-lg:w-8 max-lg:h-8"
              >
                <path
                  d="M20 5C15 5 12 8 12 12C12 16 15 19 20 19C25 19 28 16 28 12C28 8 25 5 20 5Z"
                  fill="#773FA8"
                />
                <path
                  d="M15 20L10 35L14 35L18 25L22 35L26 35L21 20H15Z"
                  fill="#773FA8"
                />
                <path
                  d="M25 22L30 37L34 37L29 22H25Z"
                  fill="rgba(119, 63, 168, 0.7)"
                />
                <circle cx="32" cy="18" r="3" fill="rgba(119, 63, 168, 0.7)" />
              </svg>
              <div className="ml-2 text-sm max-lg:text-xs font-semibold text-dance-purple font-rammetto">
                DANCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Background Image */}
      <section className="relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/da44b25417329568d47f19fdd5d0f204dc2e2e34?placeholderIfAbsent=true"
          alt="People dancing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-black/30 py-40 px-20 max-lg:px-5 max-lg:py-20">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl font-rammetto leading-tight mb-11">
              West Coast Swing
            </h1>
            <div className="text-base font-metrophobic leading-5 space-y-4">
              <p>
                Jsme taneční studio specializované na West Coast Swing –
                moderní, improvizační tanec plný energie a kreativity.
              </p>
              <p>
                Od září spouštíme nové kurzy: jeden pro začátečníky, jeden pro
                mírně pokročilé a jeden pro pokročilé. Každý týden pořádáme
                taneční party, kde si můžeš procvičit kroky v přátelské
                atmosféře. Občas přidáme speciální workshopy s hosty.
              </p>
              <p>Přijď a staň se součástí naší komunity!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-dance-teal py-28 px-20 max-lg:px-5 max-lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/125f1cc96f56dab3a1d190b0142be249894e8a09?placeholderIfAbsent=true"
                alt="Dance instructor"
                className="w-full object-contain"
              />
            </div>
            <div className="text-white max-lg:mt-10">
              <h2 className="text-3xl font-rammetto mb-8">Naše kurzy</h2>
              <div className="text-base font-metrophobic leading-5 space-y-4 mb-14">
                <p>
                  Jsme taneční studio specializované na West Coast Swing –
                  moderní, improvizační tanec plný energie a kreativity.
                </p>
                <p>
                  Od září spouštíme nové kurzy: jeden pro začátečníky, jeden pro
                  mírně pokročilé a jeden pro pokročilé. Každý týden pořádáme
                  taneční party, kde si můžeš procvičit kroky v přátelské
                  atmosféře. Občas přidáme speciální workshopy s hosty.
                </p>
                <p>Přijď a staň se součástí naší komunity!</p>
              </div>
              <button className="bg-dance-yellow text-black text-base font-metrophobic py-3 px-11 rounded-md shadow-lg hover:shadow-xl transition-shadow">
                Rozvrh
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-12 max-lg:gap-8 text-white text-center">
            <div className="flex flex-col items-center max-lg:mt-10">
              <div className="w-8 h-8 bg-dance-yellow rounded-full mb-7"></div>
              <h3 className="text-lg font-rammetto leading-6 mb-3">
                Nepotřebuješ partnera
              </h3>
              <p className="text-base font-metrophobic leading-5">
                Na kurzech se spřídáme. Naučíš se tak tancovat s kýmkoli a ještě
                si najdeš kamarády.
              </p>
            </div>

            <div className="flex flex-col items-center max-lg:mt-10">
              <div className="w-8 h-8 bg-dance-yellow rounded-full mb-7"></div>
              <h3 className="text-lg font-rammetto leading-6 mb-3">
                Kurzy pro nováčky i ostřílené tanečníky
              </h3>
              <p className="text-base font-metrophobic leading-5">
                Nabízíme kurzy od úplných začátečníků až po pokročilé. Mimo
                pravidelné kurzy pořádáme i workshopy.
              </p>
            </div>

            <div className="flex flex-col items-center max-lg:mt-10">
              <div className="w-8 h-8 bg-dance-yellow rounded-full mb-7"></div>
              <h3 className="text-lg font-rammetto leading-6 mb-3">
                Přátelská atmosféra
              </h3>
              <p className="text-base font-metrophobic leading-5">
                Naše ambice je, abysme si vždycky všichni užili naše vzájemně
                strávené chvíle.
              </p>
            </div>

            <div className="flex flex-col items-center max-lg:mt-10">
              <div className="w-8 h-8 bg-dance-yellow rounded-full mb-7"></div>
              <h3 className="text-lg font-rammetto leading-6 mb-3">
                Studio v centru Prahy
              </h3>
              <p className="text-base font-metrophobic leading-5">
                Potkávat se spolu budeme na Náměstí Kinských 6, Malá strana.
                Vyučujeme ve studui s kamenou podlahou a zdcadli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parties and Workshops Section */}
      <section className="py-16 px-20 max-lg:px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-rammetto text-dance-purple-alt mb-80 max-lg:mb-20">
            Party a Workshopy
          </h2>
          <p className="text-xl font-rammetto text-dance-purple-alt mb-4">
            Sledujte nás na sítích a nic vám neunikne!
          </p>
          <div className="flex justify-center gap-5">
            <div className="w-8 h-8 bg-dance-yellow rounded-full"></div>
            <div className="w-8 h-8 bg-dance-yellow rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-dance-purple py-20 px-14 max-lg:px-5">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-rammetto text-white mb-12 ml-20 max-lg:ml-0">
            O nás
          </h2>
          <div className="text-white text-base font-metrophobic leading-5 mb-18 ml-20 max-lg:ml-0 max-w-4xl space-y-4">
            <p>
              Jsme taneční studio specializované na West Coast Swing – moderní,
              improvizační tanec plný energie a kreativity.
            </p>
            <p>
              Milujeme West Coast Swing pro jeho hravost a nekonečnou
              kreativitu. Naší vizí je tuto radost sdílet a posouvat dál. Chceme
              aktivně rozšiřovat pražskou komunitu tanečníků. Učit tenhle tanec
              nás nesmírně baví a komunita tanečníků, která se kolem nás
              rozrůstá je pro nás jako dárek, ze kterého máme radost každou
              lekci.
            </p>
            <p>Jsme přátelští, jsme fér a jsme skromní.</p>
            <p>Přijďte si s námi zatancovat :)</p>
          </div>

          {/* Photo Gallery */}
          <div className="flex gap-2 mb-7 justify-center flex-wrap">
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/31071cef7bfc0d061e285ef890dbd0e393e45698?placeholderIfAbsent=true"
              alt="Dance photo 1"
              className="w-46 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/d03f5a89875425bed4ea6b18e5a6d45a6980b005?placeholderIfAbsent=true"
              alt="Dance photo 2"
              className="w-41 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/0567075dfdcb362e586a7574eacb74fee882960a?placeholderIfAbsent=true"
              alt="Dance photo 3"
              className="w-43 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/3fa250e960d9087b28cd7fac3c1be9da9cd07fc1?placeholderIfAbsent=true"
              alt="Dance photo 4"
              className="w-49 object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/eea8c38f9d954003453cfce77c73854e10a57ec3?placeholderIfAbsent=true"
              alt="Dance photo 5"
              className="w-56 object-contain"
            />
          </div>

          {/* Instructor Section */}
          <div className="grid md:grid-cols-2 gap-0">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/bd63a0fd482c4768d051c19ed406221520170875?placeholderIfAbsent=true"
                alt="Instructors"
                className="w-full object-contain"
              />
            </div>
            <div className="text-white pl-0 pt-40 max-lg:pt-10">
              <h3 className="text-3xl font-rammetto mb-12">Kdo u nás učí</h3>
              <div className="text-xl font-metrophobic leading-6 mb-12">
                <p>Kurzy vás provedou Jirka a Miri.</p>
                <p>
                  Jirka ...... Miri .......... Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                  dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  Lorem ipsum dolor sit amet v
                </p>
              </div>
              <button className="bg-dance-yellow text-black text-base font-metrophobic py-3 px-11 rounded-md shadow-lg hover:shadow-xl transition-shadow">
                Rozvrh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-19 max-lg:px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-rammetto text-dance-purple-alt mb-16 ml-19 max-lg:ml-0">
            Recenze od našich studentů
          </h2>
          <div className="flex gap-5 items-start justify-between flex-wrap max-lg:gap-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/4deb423d8caf4387bba8cca38a07cb7b973c0720?placeholderIfAbsent=true"
              alt="Quote"
              className="w-5 flex-shrink-0"
            />
            <div className="text-black text-base font-metrophobic leading-5 max-w-xs">
              <p>Maličké studio s velmi přátelskou atmosférou.</p>
              <p
                className="font-medium text-xl mt-2"
                style={{ fontFamily: "Reenie Beanie" }}
              >
                Josef, IT
              </p>
            </div>
            <div className="text-black text-base font-metrophobic leading-5 max-w-xs">
              <p>
                Nejdřív mi to přišlo jednoduché, ale s každou hodinou se to
                trochu komplikuje. Moc mě to baví a taky se mi líbí, že jsem
                mohla začít bez partnera a na lekcích se střídáme
              </p>
              <p
                className="font-medium text-2xl mt-2"
                style={{ fontFamily: "Reenie Beanie" }}
              >
                Vilemína, Pekařka
              </p>
            </div>
            <div className="text-black text-base font-metrophobic leading-5 max-w-xs">
              <p>Maličké studio s velmi přátelskou atmosférou.</p>
              <p
                className="font-medium text-xl mt-2"
                style={{ fontFamily: "Reenie Beanie" }}
              >
                Josef, IT
              </p>
            </div>
            <div className="text-black text-base font-metrophobic leading-5 max-w-xs">
              <p>
                Nejdřív mi to přišlo jednoduché, but s každou hodinou se to
                trochu komplikuje. Moc mě to baví a taky se mi líbí, že jsem
                mohla začít bez partnera a na lekcích se střídáme
              </p>
              <p
                className="font-medium text-2xl mt-2"
                style={{ fontFamily: "Reenie Beanie" }}
              >
                Vilemína, Pekařka
              </p>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/f900ec791de100dd894a79e0f8980c2736de8f5d?placeholderIfAbsent=true"
              alt="Quote"
              className="w-5 flex-shrink-0 mt-2"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dance-pink py-20 px-17 max-lg:px-5 text-white">
        <div className="container mx-auto max-w-lg">
          <div className="flex items-start gap-20 max-lg:gap-10 max-lg:flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-rammetto mb-21 max-lg:mb-10">
                Kontakt
              </h2>
              <p className="text-base font-metrophobic leading-5">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className="max-lg:mt-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/9bddeee38234497b88269b80e5be6392/34bd533350f315e019caa731643828e59679d9f2?placeholderIfAbsent=true"
                alt="Contact image"
                className="w-34 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
