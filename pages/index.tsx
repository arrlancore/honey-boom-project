import Head from "next/head";
import Image from "next/image";

const caption = {
  title: "WeWork",
  description: "Find the best work!",
  signIn: "Sign In",

  jobDesc: "Job Description",
  location: "Location",
  search: "Search",
  fulltimeOnly: "Full Time Only",
};

export default function Home() {
  return (
    <div className="relative bg-white">
      <Head>
        <title>{caption.title} - {caption.description}</title>
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <header>
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  alt="logo"
                  width={47}
                  height={40}
                />
                <h1 className="text-md ml-2">
                  <b>{caption.title}</b>
                </h1>
              </a>
            </div>

            <div className="items-center justify-end">
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                {caption.signIn}
              </a>
            </div>
          </div>
        </header>

        <main>
        {/* search form */}
        <section id="form" className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4 min-w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                {caption.jobDesc}
              </label>
              <input
                className="shadow rounded-md appearance-none border h-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder={`such as "ruby" or "java"`}
              />
            </div>

            <div className="mb-4 min-w-[300px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                {caption.location}
              </label>
              <input
                className="shadow rounded-md appearance-none border h-[50px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="city name, zip code, or other.."
              />
            </div>

            <div className="flex items-center justify-between md:justify-start">
              <div className="flex items-center mb-4">
                <input
                  id="fulltime"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="fulltime"
                  className="ml-2 text-sm font-medium text-gray-700 "
                >
                  {caption.fulltimeOnly}
                </label>
              </div>

              <button
                className="ml-8 min-w-[120px] h-[50px] inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900"
              >
                <div className="base-loader base-loader-light" />
                {caption.search}
              </button>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="flex flex-col p-4">
          <h1>CONTENT</h1>
        </section>
        </main>
      </div>
    </div>
  )
}
