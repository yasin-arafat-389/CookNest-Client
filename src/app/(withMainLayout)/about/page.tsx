import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CookNest || About us",
  description:
    "At CookNest, we believe that cooking is more than just preparing food, it is an experience, a way to connect, and an expression of creativity.",
};

const AboutUs = () => {
  return (
    <div>
      <div className="font-inter bg-[#F5EDED] pb-16">
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <img
                  alt="About Us"
                  className="max-lg:mx-auto rounded-xl"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    About <span className="text-secondary">CookNest</span>
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    At CookNest, we believe that cooking is more than just
                    preparing food — it is an experience, a way to connect, and
                    an expression of creativity. Our mission is to bring
                    together a community of passionate cooks, food lovers, and
                    curious learners to explore and share delicious recipes from
                    around the world. Whether you are a seasoned chef or just
                    starting in the kitchen, CookNest is your go-to platform for
                    inspiration, tips, and culinary adventures. Let’s cook,
                    create, and share together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                  <img
                    alt=""
                    className="block lg:hidden mb-9 mx-auto h-full rounded-xl"
                    src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                  />
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                    Our <span className="text-secondary">Mission</span>
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    Our mission at CookNest is to inspire and empower people to
                    explore their culinary creativity. We aim to make cooking
                    accessible and enjoyable for everyone by providing a
                    platform that fosters learning, sharing, and discovering new
                    flavors. Through innovation and community, we strive to
                    bring the joy of cooking to kitchens around the world.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <img
                  alt="About Us tailwind page"
                  className="hidden lg:block h-full rounded-xl"
                  src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 text-center">
                Our Dynamic <span className="text-secondary">Team</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    alt="Antonio"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    src="https://img.freepik.com/free-photo/portrait-happy-manager-holding-leather-case_1262-5329.jpg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Antonio Roberto{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    alt="Patricia"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    src="https://www.shutterstock.com/image-photo/happy-african-american-businessman-entrepreneur-600nw-1477336751.jpg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Patricia Angely{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
              </div>
              <div className="group group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    alt="Jerom"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    src="https://us.123rf.com/450wm/peopleimages12/peopleimages122303/peopleimages12230315661/200058789-i-havent-gotten-this-far-on-my-own-cropped-portrait-of-a-handsome-young-businessman-standing-with.jpg?ver=6"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Jerom Bell{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Chairman
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
                <div className="relative mb-6">
                  <img
                    alt="Yasmine"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    src="https://img.freepik.com/premium-photo/business-man-arms-crossed-work-portrait-with-career-confidence-smile-studio-happy-expert-male-professional-with-corporate-job-pride-employee-with-white-background-worker_590464-219229.jpg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Yasmine Tano{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  CEO
                </span>
              </div>
              <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    alt="Martin "
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    src="https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Martin Darbys
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Product Manager
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-16 text-center">
            Our <span className="text-secondary">History</span>
          </h2>

          <div className="flex flex-col justify-center">
            <div className="py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2" />

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          CookNest began with a vision to create a space where
                          food enthusiasts could easily share and discover
                          recipes from around the globe.
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-blue-500 text-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          As word spread, our community quickly expanded. Chefs,
                          home cooks, and food lovers alike began sharing their
                          culinary creations, making CookNest a vibrant hub of
                          recipe discovery and kitchen creativity.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          To enhance the experience, we launched premium
                          membership options, offering exclusive access to
                          advanced cooking tutorials, personalized meal plans,
                          and an ad-free browsing experience, making it easier
                          than ever to enjoy cooking.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          With users from across the globe, CookNest became a
                          truly international platform. We translated our
                          website into multiple languages and introduced
                          features catering to diverse culinary traditions,
                          bringing the world’s kitchens closer together.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" />
                  </div>
                </div>

                <div className="mt-6 sm:mt-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          Today, CookNest continues to innovate with new
                          features such as AI-powered recipe suggestions, live
                          cooking classes, and partnerships with renowned chefs.
                          Our journey is ongoing, and we’re excited about what
                          the future holds for our growing community.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
