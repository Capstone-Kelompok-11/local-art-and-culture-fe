import React from "react";
import logoLokasani from "../../assets/img/logo.png";
import object1 from "../../assets/img/object1.png";
import object2 from "../../assets/img/object2.png";
import object3 from "../../assets/img/object3.png";
import object4 from "../../assets/img/object4.png";
import DownloadApp from "../../component/landingpage/DownloadApp";

const Landing = () => {
  return (
    <>
      <section>
        {/* navbar */}
        <body className="">
          <nav className="relative px-[100px] py-4  bg-blue-200 flex justify-between items-center bg-white">
            <a className="text-3xl font-bold leading-none" href="#">
              <img className=" w-[50px]" src={logoLokasani} />
            </a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-blue-600 p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>

            <div className="lg:flex lg:items-center lg:w-auto lg:space-x-6 justify-end">
              <ul className="lg:flex lg:items-center lg:space-x-[50px]">
                <li>
                  <a
                    className="text-xl text-black hover:text-gray-500 "
                    href="#"
                  >
                    Article
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl  text-black hover:text-gray-500"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-black hover:text-gray-500"
                    href="#"
                  >
                    Help
                  </a>
                </li>
                <a
                  className="hidden lg:inline-block py-2 px-10 bg-blue-800 hover:bg-blue-600 text-xl text-white font-bold rounded-xl transition duration-200"
                  href="#"
                >
                  Login
                </a>
              </ul>
            </div>
          </nav>
          <div className="navbar-menu relative z-50 hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"
                    ></path>
                  </svg>
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold  hover:bg-blue-900 "
                    href="#"
                  >
                    Login
                  </a>
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © 2021</span>
                </p>
              </div>
            </nav>
          </div>
        </body>

        <div className="h-[1000px] flex items-center text-center justify-center ">
          {/* Hero content */}
          <div className="pt-32 pb-10  md:pb-16">
            <div className="text-6xl font-bold text-center uppercase">
              Eksplorasi Seni Lokal <br />
              Secara Lebih Mendalam!
            </div>
            <div className="text-3xl pt-6">
              Kelola event dan promosikan produk seni lokalmu dengan mudah{" "}
              <br />
              dan efektif di Lokasani.
            </div>
            <div className="pt-40">
              <a
                className="hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
              >
                Product creator
              </a>
              <a
                className="ml-3 hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
              >
                Event creator
              </a>
            </div>
          </div>
        </div>

        {/* Why us */}
        <div className=" h-screen relative bg-blue-100">
          <div className="text-center">
            <div className="text-6xl pt-10 font-bold uppercase">
              Kenapa harus Lokasani?
            </div>
            <svg
              width="500"
              height="553"
              viewBox="0 0 500 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 z-0"
            >
              <path
                d="M80.2686 386.169C89.2203 366.733 54.4707 321.104 9.08317 305.056C-24.5171 293.178 -79.9385 290.774 -97.3385 323.643C-114.042 355.183 -111.357 378.889 -87.5898 406.865C-66.0119 432.261 -39.5763 444.113 -6.97448 429.739C4.09136 424.863 10.9289 419.928 16.4828 415.961C50.6954 391.515 74.0268 399.72 80.2603 386.169L80.2686 386.169Z"
                fill="#768DD5"
              />
              <path
                d="M-279.734 77.5365C-312.058 132.929 -220.639 141.753 -199.479 169.325C-186.576 186.142 -198.541 210.403 -197.914 229.532C-197.048 255.77 -176.087 277.108 -153.472 286.528C-112.326 303.666 -94.1948 275.341 -82.117 240.412C-73.0889 214.31 -55.1659 172.278 -65.3131 144.8C-82.2899 98.8143 -163.036 59.3685 -209.621 57.7149C-237.96 56.708 -269.658 51.0815 -279.744 77.537L-279.734 77.5365Z"
                fill="#F3B502"
              />
              <path
                d="M146.679 201.442C154.89 219.187 123.018 260.849 81.3882 275.501C50.5701 286.346 -0.262318 288.542 -16.2215 258.531C-31.542 229.733 -29.0797 208.089 -7.28006 182.545C12.5112 159.358 36.7578 148.536 66.6601 161.661C76.8097 166.112 83.081 170.618 88.1751 174.241C119.555 196.56 140.954 189.069 146.672 201.442L146.679 201.442Z"
                fill="#026C52"
              />
              <path
                d="M-29.8744 82.568C-23.8457 53.7418 22.9465 33.7403 44.162 55.3861C63.8594 72.6965 40.3233 128.575 13.4089 133.939C-10.6001 138.81 -39.9284 108.29 -29.8744 82.568ZM16.5756 72.2223C-2.08277 71.2924 -15.1231 104.158 12.6063 99.5582C19.3629 97.2489 25.9951 75.5415 16.5756 72.2223Z"
                fill="#768DD5"
              />
              <path
                d="M61.5329 121.537C57.6876 110.833 75.7573 98.1399 80.3404 95.4108C95.6902 86.2699 109.014 73.029 124.845 65.1592C137.469 58.8784 164.624 24.7325 178.554 39.8053C181.268 42.7401 183.256 51.3264 184.707 55.5573C187.464 63.5953 190.99 72.4682 192.791 80.9486C194.667 89.778 196.718 109.904 193.154 118.085C187.958 130.018 168.338 129.8 159.278 131.713C136.331 136.554 115.217 141.364 91.8262 141.433C83.7167 141.458 75.3509 144.642 68.3669 138.779C62.2457 133.644 63.2523 126.323 61.5392 121.544L61.5329 121.537Z"
                fill="#E8644B"
              />
              <path
                d="M315.614 399.333C324.923 407.953 313.57 429.804 310.438 434.861C299.949 451.798 293.573 471.753 281.955 487.68C272.693 500.385 263.381 548.141 241.847 540.382C237.653 538.871 231.271 531.394 227.66 527.952C220.799 521.413 212.747 514.443 206.605 506.974C200.209 499.199 187.832 480.331 187.152 470.401C186.158 455.92 205.684 446.051 213.665 439.501C233.881 422.914 252.301 407.3 275.41 395.21C283.421 391.017 290.062 383.566 299.987 385.78C308.684 387.716 311.452 395.48 315.605 399.33L315.614 399.333Z"
                fill="#E8644B"
              />
              <path
                d="M384.23 374.3C394.293 382.526 409.565 390.025 416.667 400.622C426.293 414.992 431.753 439.482 429.319 456.957C426.957 473.94 421.699 490.133 415.26 506.14C410.245 518.616 389.423 538.856 389.423 538.856L369.573 527.026C369.573 527.026 376.206 520.664 381.941 514.551C396.768 498.754 403.328 467.771 403.377 447.014C403.409 434.2 402.73 424.491 393.039 415.532C385.711 408.758 377.209 402.065 369.015 396.831C373.148 391.219 380.056 380.51 384.222 374.284L384.23 374.3Z"
                fill="#768DD5"
              />
              <path
                d="M111.066 410.598C124.591 419.445 139.305 428.057 140.996 447.153C143.075 470.652 126.201 496.449 102.516 498.336C79.7535 500.142 53.1323 478.909 51.1748 455.169C49.7188 437.452 57.371 416.025 73.7028 408.921C82.9325 404.905 101.958 404.639 111.066 410.598Z"
                fill="#F3B502"
              />
              <path
                d="M232.84 137.121C247.886 146.96 264.258 156.548 266.143 177.797C268.456 203.941 249.681 232.657 223.319 234.745C197.992 236.761 168.37 213.126 166.194 186.716C164.576 166.999 173.086 143.161 191.262 135.25C201.527 130.783 222.704 130.485 232.84 137.113L232.84 137.121Z"
                fill="#768DD5"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center mt-20 relative z-10">
            <div className="grid grid-cols-3 gap-20 ">
              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left absoulte left-0 "
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10 "
                >
                  <rect
                    y="0.5"
                    width="100"
                    height="100"
                    rx="50"
                    fill="#E8644B"
                  />
                  <path
                    d="M63.4024 24.1C65.4805 21.7 68.1146 20.5 71.3049 20.5C73.9683 20.5 76.1927 21.4659 78.0366 23.4268C79.8805 25.3878 80.8463 27.6122 80.9634 30.1585C80.9634 32.2073 79.9976 34.578 78.0366 37.3585C76.0756 40.139 74.1732 42.4512 72.2707 44.3537C70.3683 46.2268 67.4122 49.0073 63.4024 52.6951C59.3341 49.0073 56.3488 46.2268 54.4463 44.3537C52.5439 42.4805 50.6122 40.139 48.6805 37.3585C46.7488 34.578 45.8415 32.2073 45.8415 30.1585C45.8415 27.4951 46.778 25.2707 48.6805 23.4268C50.5829 21.5829 52.8659 20.6171 55.5293 20.5C58.661 20.5 61.2659 21.7 63.4024 24.1ZM80.9634 70.2561V73.1829L57.5488 80.5L37.061 74.822V79.0366H19.5V46.8415H42.8268L60.8561 53.5732C64.1341 54.8024 66.3293 57.9634 66.3293 61.4756H72.1829C77.0415 61.4756 80.9634 65.3976 80.9634 70.2561ZM31.2073 73.1829V52.6951H25.3537V73.1829H31.2073ZM74.8171 68.9976C74.3488 68.0317 73.3244 67.3293 72.1829 67.3293H56.5244C54.9439 67.3293 53.3927 67.0951 51.9 66.5976L44.9341 64.2854L46.778 58.7244L53.7439 61.0366C54.6219 61.3293 60.4756 61.4756 60.4756 61.4756C60.4756 60.3927 59.8024 59.4268 58.8073 59.0463L41.7732 52.6951H37.061V68.7927L57.461 74.3829L74.8171 68.9976Z"
                    fill="white"
                  />
                </svg>

                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dukungan Ekonomi Lokal
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Membeli produk lokal berarti memberikan dukungan dan membantu
                  meningkatkan pendapatan dan pertumbuhan ekonomi.
                </p>
              </a>

              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left "
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10 "
                >
                  <rect
                    y="0.5"
                    width="100"
                    height="100"
                    rx="50"
                    fill="#F3B502"
                  />
                  <path
                    d="M68.3333 50.5C67.0072 50.5 65.7355 49.9732 64.7978 49.0355C63.8601 48.0979 63.3333 46.8261 63.3333 45.5C63.3333 44.1739 63.8601 42.9021 64.7978 41.9645C65.7355 41.0268 67.0072 40.5 68.3333 40.5C69.6594 40.5 70.9312 41.0268 71.8689 41.9645C72.8065 42.9021 73.3333 44.1739 73.3333 45.5C73.3333 46.8261 72.8065 48.0979 71.8689 49.0355C70.9312 49.9732 69.6594 50.5 68.3333 50.5ZM58.3333 37.1667C57.0073 37.1667 55.7355 36.6399 54.7978 35.7022C53.8601 34.7645 53.3333 33.4927 53.3333 32.1667C53.3333 30.8406 53.8601 29.5688 54.7978 28.6311C55.7355 27.6934 57.0073 27.1667 58.3333 27.1667C59.6594 27.1667 60.9312 27.6934 61.8689 28.6311C62.8065 29.5688 63.3333 30.8406 63.3333 32.1667C63.3333 33.4927 62.8065 34.7645 61.8689 35.7022C60.9312 36.6399 59.6594 37.1667 58.3333 37.1667ZM41.6667 37.1667C40.3406 37.1667 39.0688 36.6399 38.1311 35.7022C37.1934 34.7645 36.6667 33.4927 36.6667 32.1667C36.6667 30.8406 37.1934 29.5688 38.1311 28.6311C39.0688 27.6934 40.3406 27.1667 41.6667 27.1667C42.9927 27.1667 44.2645 27.6934 45.2022 28.6311C46.1399 29.5688 46.6667 30.8406 46.6667 32.1667C46.6667 33.4927 46.1399 34.7645 45.2022 35.7022C44.2645 36.6399 42.9927 37.1667 41.6667 37.1667ZM31.6667 50.5C30.3406 50.5 29.0688 49.9732 28.1311 49.0355C27.1934 48.0979 26.6667 46.8261 26.6667 45.5C26.6667 44.1739 27.1934 42.9021 28.1311 41.9645C29.0688 41.0268 30.3406 40.5 31.6667 40.5C32.9927 40.5 34.2645 41.0268 35.2022 41.9645C36.1399 42.9021 36.6667 44.1739 36.6667 45.5C36.6667 46.8261 36.1399 48.0979 35.2022 49.0355C34.2645 49.9732 32.9927 50.5 31.6667 50.5ZM50 20.5C42.0435 20.5 34.4129 23.6607 28.7868 29.2868C23.1607 34.9129 20 42.5435 20 50.5C20 58.4565 23.1607 66.0871 28.7868 71.7132C34.4129 77.3393 42.0435 80.5 50 80.5C51.3261 80.5 52.5979 79.9732 53.5355 79.0355C54.4732 78.0978 55 76.8261 55 75.5C55 74.2 54.5 73.0333 53.7 72.1667C52.9333 71.2667 52.4333 70.1 52.4333 68.8333C52.4333 67.5072 52.9601 66.2355 53.8978 65.2978C54.8355 64.3601 56.1073 63.8333 57.4333 63.8333H63.3333C67.7536 63.8333 71.9928 62.0774 75.1184 58.9518C78.2441 55.8262 80 51.5869 80 47.1667C80 32.4333 66.5667 20.5 50 20.5Z"
                    fill="white"
                  />
                </svg>

                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Keunikan dan Keaslian
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Admin yang menggunakan produk lokal dapat menambahkan nilai
                  tambah ini pada layanan atau produk yang Admin tawarkan.
                </p>
              </a>

              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left"
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10"
                >
                  <rect
                    y="0.5"
                    width="100"
                    height="100"
                    rx="50"
                    fill="#026C52"
                  />
                  <path
                    d="M50.9348 83.5C30.8478 64.9348 20.5 55.5 20.5 44.2391C20.5 34.8043 27.8043 27.5 37.2391 27.5C42.413 27.5 47.587 29.9348 50.9348 33.8913C54.2826 29.9348 59.4565 27.5 64.6304 27.5C74.0652 27.5 81.3696 34.8043 81.3696 44.2391C81.3696 55.8043 71.0217 65.2391 50.9348 83.5Z"
                    fill="white"
                  />
                </svg>

                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kualitas dan Kreativias
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Kami percaya bahwa produk lokal yang Anda hasilkan adalah
                  produk terbaik Anda. Pasarkan karya terbaik Anda di Lokasani.
                </p>
              </a>
            </div>
          </div>
          <svg
            width="298"
            height="641"
            viewBox="0 0 298 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[300px] right-0 z-0"
          >
            <path
              d="M267.51 181.423C286.031 170.708 283.958 113.39 256.133 74.1045C235.534 45.0231 191.644 11.0967 158.474 27.9139C126.638 44.0476 115.159 64.9623 118.442 101.524C121.424 134.715 136.185 159.644 171.109 166.703C182.961 169.101 191.393 169.014 198.218 168.975C240.266 168.735 254.595 188.893 267.503 181.418L267.51 181.423Z"
              fill="#768DD5"
            />
            <path
              d="M308.452 249.91C294.576 244.172 276.728 267.212 272.855 273.086C259.858 292.759 241.592 309.506 230.234 329.884C221.175 346.139 174.497 379.817 193.509 399.127C197.212 402.886 208.406 406.04 213.89 408.212C224.318 412.342 235.796 417.547 246.862 420.452C258.383 423.471 284.787 427.422 295.789 423.236C311.836 417.126 312.758 391.245 315.837 379.418C323.633 349.464 331.273 321.923 332.805 291.093C333.337 280.399 338.055 269.569 330.748 259.992C324.356 251.605 314.645 252.481 308.452 249.917L308.452 249.91Z"
              fill="#F3B502"
            />
            <path
              d="M196.033 444.557C186.231 455.166 201.055 478.96 205.058 484.422C218.464 502.715 227.469 524.798 242.068 541.845C253.707 555.444 268.51 608.82 292.263 598.104C296.889 596.018 303.47 586.966 307.263 582.739C314.47 574.709 322.99 566.084 329.299 557.063C335.869 547.67 348.244 525.159 348.136 513.828C347.98 497.304 324.943 487.834 315.304 481.108C290.889 464.075 268.599 447.986 241.298 436.313C231.834 432.265 223.636 424.396 212.567 427.789C202.868 430.757 200.415 439.815 196.043 444.553L196.033 444.557Z"
              fill="#E8644B"
            />
            <path
              d="M5.01717 504.824C15.6406 515.123 26.1277 531.408 39.0433 538.047C56.5582 547.045 84.9703 550.002 104.412 544.953C123.306 540.051 140.927 531.978 158.182 522.593C171.631 515.283 191.785 489.079 191.785 489.079L175.799 468.185C175.799 468.185 169.475 476.522 163.317 483.81C147.4 502.653 113.226 514.142 89.7597 516.923C75.2737 518.643 64.205 519.15 52.8006 509.369C44.1777 501.971 35.492 493.236 28.4972 484.658C22.6933 490.069 11.4906 499.288 4.99784 504.817L5.01717 504.824Z"
              fill="#768DD5"
            />
            <path
              d="M170.134 201.83C153.005 213.031 134.366 223.946 132.221 248.137C129.587 277.9 150.961 310.591 180.972 312.969C209.805 315.264 243.528 288.356 246.006 258.29C247.847 235.844 238.16 208.707 217.467 199.701C205.781 194.615 181.672 194.275 170.134 201.821L170.134 201.83Z"
              fill="#026C52"
            />
            <path
              d="M103.424 368.418C157.185 318.715 164.737 229.067 136.198 221.585C117.302 216.628 83.1734 247.842 60.5196 268.562C32.764 293.946 -4.88196 326.527 0.523666 356.685C4.53874 379.086 23.1315 399.567 49.4505 396.675C75.2262 393.839 96.9223 374.44 103.433 368.418L103.424 368.418Z"
              fill="#E8644B"
            />
          </svg>
        </div>

        {/* page 3 */}
        <div className="h-screen relative bg-[#243775] ">
          <div className="text-6xl font-bold uppercase text-white px-20 pt-[100px] flex justify-between">
            <div className="flex gap-3">
              <p>Kembangkan </p>
              <p className="text-[#F3B502]">Produk Lokal </p>
              <p>Anda Sekarang</p>
            </div>
            <div className="font-medium text-[30px] justify-end items-center">
              <button className="bg-[#F3B502] p-5 rounded-[20px]">
                Register Now!
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 relative z-10 m-40">
            <div className="grid grid-cols-4 gap-6 ">
              <div>
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                  <img src={object1} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-5 pt-10">
                  Raih Ulasan Terbaik
                </p>
                <p className="text-[14px] font-regular text-white ml-5 pt-2">
                  Ketahui dengan mudah mengenai masukan-masukan yang didapatkan
                  untuk produk anda!
                </p>
              </div>

              <div>
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                  <img src={object2} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                  Lihat Daftar Pesananmu{" "}
                </p>
                <p className="text-[14px] font-regular text-white ml-2 pt-2">
                  Nikmati kemudahan melihat semua transaksi produk-mu secara
                  praktis dengan beberapa klik saja.
                </p>
              </div>

              <div>
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                  <img src={object3} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                  Tambah Produk di LokaSani
                </p>
                <p className="text-[14px] font-regular text-white ml-2 pt-2">
                  Menambah produk dengan mudah dan cepat! Sehingga dapat
                  meningkatkan katalog anda dengan efisien{" "}
                </p>
              </div>

              <div className="">
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[400px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#31499B] text-left absoulte left-0 ">
                  <img src={object4} className="h-[300px]" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-2 pt-10">
                  RInteraksi dengan Pembeli
                </p>
                <p className="text-[14px] font-regular text-white ml-2 ">
                  Tidak hanya untuk berjualan. Bangun hubungan interaksi yang
                  kuat dengan para pembeli!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen relative bg-white">
          <div className="text-6xl font-bold uppercase text-white px-20 pt-[100px] flex justify-between">
            <div className="flex gap-3">
              <p className="text-black">Kembangkan </p>
              <p className="text-[#F3B502]">Produk Lokal </p>
              <p className="text-black">Anda Sekarang</p>
            </div>
            <div className="font-medium text-[30px] justify-end items-center">
              <button className="bg-[#F3B502] p-5 rounded-[20px]">
                Register Now!
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-20 relative z-10 m-40">
            <div className="grid grid-cols-3 gap-20 ">
              <div>
                <a className="flex flex-col items-center justify-center max-w-[300px] h-[300px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                  <img src={object1} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-5 pt-10">
                  Raih Ulasan Terbaik
                </p>
                <p className="text-[14px] font-regular text-white ml-5 pt-2">
                  Ketahui dengan mudah mengenai masukan-masukan yang didapatkan
                  untuk produk anda!
                </p>
              </div>

              <div>
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[300px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                  <img src={object1} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-5 pt-10">
                  Raih Ulasan Terbaik
                </p>
                <p className="text-[14px] font-regular text-white ml-5 pt-2">
                  Ketahui dengan mudah mengenai masukan-masukan yang didapatkan
                  untuk produk anda!
                </p>
              </div>

              <div>
                <a className=" flex flex-col items-center justify-center max-w-[300px] h-[300px] px-5 py-[100px] border border-gray-200 rounded-[20px] shadow bg-[#768DD5] ">
                  <img src={object1} alt="" />
                </a>
                <p className="text-[24px] font-semibold text-white ml-5 pt-10">
                  Raih Ulasan Terbaik
                </p>
                <p className="text-[14px] font-regular text-white ml-5 pt-2">
                  Ketahui dengan mudah mengenai masukan-masukan yang didapatkan
                  untuk produk anda!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mt-20 relative z-10">
            <div className="grid grid-cols-3  ">
              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left absoulte left-0 "
              >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dukungan Ekonomi Lokal
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Membeli produk lokal berarti memberikan dukungan dan membantu
                  meningkatkan pendapatan dan pertumbuhan ekonomi.
                </p>
              </a>

              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left "
              >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Keunikan dan Keaslian
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Admin yang menggunakan produk lokal dapat menambahkan nilai
                  tambah ini pada layanan atau produk yang Admin tawarkan.
                </p>
              </a>

              <a
                href="#"
                className=" flex flex-col items-center justify-center max-w-[350px] h-[600px] px-20 py-[100px] border border-gray-200 rounded-[40px] shadow bg-blue-800 text-left"
              >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kualitas dan Kreativias
                </h2>
                <p className="text-white text-2xl py-10 ">
                  Kami percaya bahwa produk lokal yang Anda hasilkan adalah
                  produk terbaik Anda. Pasarkan karya terbaik Anda di Lokasani.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <DownloadApp />
    </>
  );
};

export default Landing;
