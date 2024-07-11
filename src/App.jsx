import googlelogo from "./assets/images/google-logo.png";

function App() {
  return (
    <>
      <div className="flex justify-end p-3 space-x-5 text-sm items-center">
        <a className="hover:underline" href="#">
          Gmail
        </a>
        <a className="hover:underline" href="#">
          Images
        </a>
        <div className="p-2 hover:bg-slate-200 hover:rounded-full">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2C5.10457 2 6 2.89543 6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2ZM12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6C21.1046 6 22 5.10457 22 4ZM4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10ZM6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20ZM12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18ZM22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20Z"
              fill="#000000"
            />
          </svg>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-2xl font-medium  hover:shadow-lg">
          Sign in
        </button>
      </div>

      <div className="flex justify-center mt-5">
        <img className="w-1/2 md:w-1/5 h-20 " src={googlelogo} alt="" />
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex justify-around border border-gray-300 p-2 items-center gap-4 rounded-full  hover:drop-shadow w-full md:w-1/2 mx-5">
          <svg
            className="h-5 w-1/5 fill-gray-400"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          <div className="w-full">
            <input
              id="searchBox"
              type="text"
              className="outline-0 bg-inherit"
            />
          </div>
          <svg
            className="h-8 w-8"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc04"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
          <svg
            className="h-8 w-8"
            focusable="false"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="none" height="192" width="192"></rect>
            <g>
              <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
              <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
              <path
                fill="#ea4335"
                d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
              ></path>
              <path
                fill="#fbbc04"
                d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
              ></path>
              <path
                fill="#4285f4"
                d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <div id="resultList" className="flex justify-center">
        <div className="w-full md:w-1/2 mx-5 shadow">
          <div className="p-3">
            <span className="text-gray-500">Trending Searches</span>
          </div>
          <ul className="">
            <li className="flex gap-4 p-2 items-center hover:bg-gray-100">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow_right_up [#291]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6882.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="arrow_right_up-[#291]"
                        points="56 6722 56 6724 60.653 6724 54.354 6730.298 51.821 6727.765 44 6735.586 45.414 6737 51.821 6730.593 52.94 6731.713 52.937 6731.716 54.351 6733.13 62 6725.481 62 6730 64 6730 64 6722"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <span>kulhad pizza couple video viral video</span>
            </li>
            <li className="flex gap-4 p-2 items-center hover:bg-gray-100">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow_right_up [#291]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6882.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="arrow_right_up-[#291]"
                        points="56 6722 56 6724 60.653 6724 54.354 6730.298 51.821 6727.765 44 6735.586 45.414 6737 51.821 6730.593 52.94 6731.713 52.937 6731.716 54.351 6733.13 62 6725.481 62 6730 64 6730 64 6722"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <span>delhi airport terminal 1</span>
            </li>
            <li className="flex gap-4 p-2 items-center hover:bg-gray-100">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow_right_up [#291]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6882.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="arrow_right_up-[#291]"
                        points="56 6722 56 6724 60.653 6724 54.354 6730.298 51.821 6727.765 44 6735.586 45.414 6737 51.821 6730.593 52.94 6731.713 52.937 6731.716 54.351 6733.13 62 6725.481 62 6730 64 6730 64 6722"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <span>is terminal 1 and 1d same</span>
            </li>
            <li className="flex gap-4 p-2 items-center hover:bg-gray-100">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow_right_up [#291]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6882.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="arrow_right_up-[#291]"
                        points="56 6722 56 6724 60.653 6724 54.354 6730.298 51.821 6727.765 44 6735.586 45.414 6737 51.821 6730.593 52.94 6731.713 52.937 6731.716 54.351 6733.13 62 6725.481 62 6730 64 6730 64 6722"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <span>spicejet delhi terminal 1d</span>
            </li>
            <li className="flex gap-4 p-2 items-center hover:bg-gray-100">
              <svg
                className="h-5 w-5 fill-gray-400"
                viewBox="0 -2.5 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow_right_up [#291]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-100.000000, -6882.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="arrow_right_up-[#291]"
                        points="56 6722 56 6724 60.653 6724 54.354 6730.298 51.821 6727.765 44 6735.586 45.414 6737 51.821 6730.593 52.94 6731.713 52.937 6731.716 54.351 6733.13 62 6725.481 62 6730 64 6730 64 6722"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <span>spicejet delhi airport contact number</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-3">
        <button className="bg-gray-100 p-2 hover:outline outline-gray-300 outline-1 rounded-md text-sm hover:shadow-lg">
          Google Search
        </button>
        <button className="bg-gray-100 p-2 hover:outline outline-gray-300 outline-1 rounded-md text-sm hover:shadow-lg">
          I'm Feeling Lucky
        </button>
      </div>

      <div className="flex justify-center  gap-3 text-sm mx-3 mt-10 ">
        <span className="w-40 md:w-28">Google offered in:</span>
        <div className="text-blue-800 flex flex-wrap gap-2">
          <a className="hover:underline" href="#">
            हिन्दी
          </a>
          <a className="hover:underline" href="#">
            বাংলা
          </a>
          <a className="hover:underline" href="#">
            తెలుగు
          </a>
          <a className="hover:underline" href="#">
            मराठी
          </a>
          <a className="hover:underline" href="#">
            தமிழ்
          </a>
          <a className="hover:underline" href="#">
            ગુજરાતી
          </a>
          <a className="hover:underline" href="#">
            ಕನ್ನಡ
          </a>
          <a className="hover:underline" href="#">
            ಕನ್ನಡ
          </a>
          <a className="hover:underline" href="#">
            ಕನ್ನಡ
          </a>
          <a className="hover:underline" href="#">
            ਪੰਜਾਬੀ
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 bg-gray-200 w-full p-3 text-gray-900 text-sm">
        <div className="p-2 border-b border-gray-400">
          <span>India</span>
        </div>
        <div className="p-2 flex flex-col md:flex-row md:justify-between">
          <div className="p-3 flex justify-center gap-5">
            <span>About</span>
            <span>Advertising</span>
            <span>Business</span>
            <span>How Search works</span>
          </div>
          <div className="p-3 flex justify-center gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Settings</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
