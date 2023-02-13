import React, { useState } from "react";

const Footer: React.FC = () => {
  const [MouseUp, setMouseup] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 text-gray-50 bg-slate-900">
        {/* 大LOGO 5个社交媒体 */}
        <div>
          <div className="py-5" id="logo">
            <svg
              className="mx-auto md:ml-0"
              width="149"
              height="36"
              viewBox="0 0 149 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.000518799 0V36H148.011V0H0.000518799ZM146.022 34.0111H1.99191V1.99393H146.022V34.0111Z"
                fill="white"
              />
              <path
                d="M21.6823 21.5327C21.6823 19.6632 20.6282 18.411 18.5453 17.8065C20.2573 17.2019 21.2327 15.8837 21.2327 14.1615C21.2327 13.0287 20.7984 12.0584 19.9779 11.3522C19.0432 10.547 17.6817 10.1406 15.9316 10.1406H10.1404V11.8348H11.6009V24.1718H10.1404V25.866H16.2161C19.536 25.8635 21.6823 24.1642 21.6823 21.5327ZM13.4805 11.8094H15.8808C18.0831 11.8094 19.348 12.7264 19.348 14.3266C19.348 16.064 18.0246 17.0597 15.7157 17.0597H13.4805V11.8094ZM13.4805 18.6371H15.7615C18.3269 18.6371 19.7976 19.6582 19.7976 21.4413C19.7976 23.1406 18.4412 24.1972 16.2593 24.1972H13.4805V18.6371Z"
                fill="white"
              />
              <path
                d="M60.7811 24.1718H59.3257V13.5925L64.5709 23.6232L64.5887 23.6613H65.1449L70.4333 13.5925L70.4384 24.1718H68.9728V25.866H73.8446V24.1718H72.3459V11.8348H73.8547V10.1406H70.5222L64.8909 20.6513L59.2901 10.1787L59.2724 10.1406H55.9068V11.8348H57.4156V24.1718H55.9068V25.866H60.7811V24.1718Z"
                fill="white"
              />
              <path
                d="M81.6324 24.1718H80.0576V20.2043C80.5173 20.2271 81.3708 20.2474 82.1963 20.2474C85.8032 20.2474 88.0435 18.2789 88.0435 15.1115C88.0435 12.1854 85.6482 10.1406 82.2192 10.1406H76.687V11.8348H78.15V24.1718H76.687V25.866H81.6299V24.1718H81.6324ZM80.055 11.8348H82.242C84.5712 11.8348 86.1359 13.1607 86.1359 15.1343C86.1359 17.2578 84.6627 18.5786 82.2903 18.5786C81.1193 18.5786 80.3395 18.5482 80.055 18.5355V11.8348Z"
                fill="white"
              />
              <path
                d="M91.9169 11.7637H95.699V24.1718H94.1268V25.866H99.1789V24.1718H97.6041V11.7637H101.386V13.7475H103.2V10.1406H90.1059V13.7475H91.9169V11.7637Z"
                fill="white"
              />
              <path
                d="M45.9651 26.1473C50.4635 26.1473 54.111 22.4998 54.111 18.0014C54.111 13.503 50.4635 9.85547 45.9651 9.85547C41.4667 9.85547 37.8192 13.503 37.8192 18.0014C37.8192 22.4998 41.4667 26.1473 45.9651 26.1473ZM45.9651 11.7605C49.412 11.7605 52.206 14.5545 52.206 18.0014C52.206 21.4482 49.412 24.2423 45.9651 24.2423C42.5183 24.2423 39.7242 21.4482 39.7242 18.0014C39.7242 14.5545 42.5183 11.7605 45.9651 11.7605Z"
                fill="white"
              />
              <path
                d="M112.641 26.1473C117.14 26.1473 120.787 22.4998 120.787 18.0014C120.787 13.503 117.14 9.85547 112.641 9.85547C108.143 9.85547 104.495 13.503 104.495 18.0014C104.495 22.4998 108.143 26.1473 112.641 26.1473ZM112.641 11.7605C116.088 11.7605 118.882 14.5545 118.882 18.0014C118.882 21.4482 116.088 24.2423 112.641 24.2423C109.194 24.2423 106.4 21.4482 106.4 18.0014C106.4 14.5545 109.197 11.7605 112.641 11.7605Z"
                fill="white"
              />
              <path
                d="M28.9265 24.1704H27.4202V19.4917C27.8114 19.5095 29.1805 19.5349 29.1805 19.5349C30.0517 19.5349 30.7833 19.6517 31.1871 20.3934L33.3309 24.6683C33.844 25.7021 33.8821 25.8596 35.1089 25.8596H36.506V24.1679H35.9116C35.3757 24.1679 35.02 23.8809 34.7965 23.4084L32.8991 19.606C32.6807 19.1818 32.3682 18.9684 32.2641 18.9049C34.1361 18.148 35.241 16.6138 35.241 14.7291C35.241 11.9401 32.9931 10.1367 29.5132 10.1367H24.0547V11.8309H25.5152V24.1679H24.0547V25.8621H28.9265V24.1704ZM27.4202 11.8309H29.4167C31.906 11.8309 33.3335 12.9054 33.3335 14.7774C33.3335 16.6824 31.7688 17.8661 29.2491 17.8661C28.5023 17.8661 27.8495 17.8432 27.4177 17.8203V11.8309H27.4202Z"
                fill="white"
              />
              <path
                d="M125.893 13.4782L135.298 25.8686H136.416V11.8323H137.874V10.1406H132.974V11.8323H134.605V21.8883L125.715 10.166L125.694 10.1406H122.593V11.8323H124.059V24.1718H122.593V25.8635H127.396V24.1718H125.893V13.4782Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="pt-6 pb-9 text-center" id="media_icon">
            <ul className="flex gap-7 items-center justify-around md:justify-start">
              <li className="inline-block">
                <a href="/" id="ins">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0005 2.25399C13.8486 2.25399 14.186 2.26483 15.3107 2.31615C16.3507 2.36361 16.9155 2.53738 17.2914 2.68342C17.7893 2.87692 18.1446 3.1081 18.5179 3.48134C18.8911 3.85458 19.1223 4.20995 19.3158 4.7078C19.4618 5.08371 19.6356 5.6485 19.6831 6.68845C19.7344 7.81325 19.7452 8.15058 19.7452 10.9987C19.7452 13.8469 19.7344 14.1842 19.6831 15.3089C19.6356 16.3489 19.4618 16.9137 19.3158 17.2896C19.1223 17.7875 18.8911 18.1429 18.5179 18.5161C18.1446 18.8893 17.7893 19.1205 17.2914 19.314C16.9155 19.4601 16.3507 19.6338 15.3107 19.6813C14.1861 19.7326 13.8488 19.7434 11.0005 19.7434C8.1522 19.7434 7.81487 19.7326 6.69028 19.6813C5.65029 19.6338 5.0855 19.4601 4.70963 19.314C4.21174 19.1205 3.85637 18.8893 3.48313 18.5161C3.10989 18.1429 2.87871 17.7875 2.68525 17.2896C2.53917 16.9137 2.3654 16.3489 2.31794 15.309C2.26662 14.1842 2.25578 13.8469 2.25578 10.9987C2.25578 8.15058 2.26662 7.81325 2.31794 6.68849C2.3654 5.6485 2.53917 5.08371 2.68525 4.7078C2.87871 4.20995 3.10989 3.85458 3.48313 3.48134C3.85637 3.1081 4.21174 2.87692 4.70963 2.68342C5.0855 2.53738 5.65029 2.36361 6.69024 2.31615C7.81504 2.26483 8.15237 2.25399 11.0005 2.25399ZM11.0005 0.332031C8.10359 0.332031 7.74039 0.34431 6.60268 0.396221C5.46729 0.448047 4.69194 0.628336 4.01341 0.892039C3.31199 1.16463 2.71713 1.52936 2.12414 2.12235C1.53115 2.71534 1.16642 3.3102 0.893827 4.01163C0.630125 4.69015 0.449835 5.4655 0.39801 6.60089C0.346099 7.73856 0.333862 8.10181 0.333862 10.9987C0.333862 13.8956 0.346099 14.2589 0.39801 15.3966C0.449835 16.5319 0.630125 17.3073 0.893827 17.9858C1.16642 18.6872 1.53115 19.2821 2.12414 19.8751C2.71713 20.4681 3.31199 20.8328 4.01341 21.1054C4.69194 21.3691 5.46729 21.5494 6.60268 21.6012C7.74039 21.6531 8.10359 21.6654 11.0005 21.6654C13.8974 21.6654 14.2607 21.6531 15.3983 21.6012C16.5337 21.5494 17.3091 21.3691 17.9876 21.1054C18.689 20.8328 19.2839 20.4681 19.8769 19.8751C20.4699 19.2821 20.8346 18.6872 21.1072 17.9858C21.3709 17.3073 21.5512 16.5319 21.603 15.3966C21.6549 14.2589 21.6672 13.8956 21.6672 10.9987C21.6672 8.10181 21.6549 7.73856 21.603 6.60089C21.5512 5.4655 21.3709 4.69015 21.1072 4.01163C20.8346 3.3102 20.4699 2.71534 19.8769 2.12235C19.2839 1.52936 18.689 1.16463 17.9876 0.892039C17.3091 0.628336 16.5337 0.448047 15.3983 0.396221C14.2607 0.34431 13.8974 0.332031 11.0005 0.332031ZM11.0005 5.52122C7.97538 5.52122 5.52301 7.9736 5.52301 10.9987C5.52301 14.0238 7.97538 16.4762 11.0005 16.4762C14.0256 16.4762 16.478 14.0238 16.478 10.9987C16.478 7.9736 14.0256 5.52122 11.0005 5.52122ZM11.0005 14.5543C9.03684 14.5543 7.44493 12.9624 7.44493 10.9987C7.44493 9.03505 9.03684 7.44314 11.0005 7.44314C12.9642 7.44314 14.5561 9.03505 14.5561 10.9987C14.5561 12.9624 12.9642 14.5543 11.0005 14.5543ZM17.9744 5.30482C17.9744 6.01175 17.4013 6.58484 16.6944 6.58484C15.9875 6.58484 15.4144 6.01175 15.4144 5.30482C15.4144 4.59789 15.9875 4.02484 16.6944 4.02484C17.4013 4.02484 17.9744 4.59789 17.9744 5.30482Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </a>
              </li>
              <li className="inline-block">
                <a href="/" id="facebook">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9529 11.0631C21.9529 5.13477 17.179 0.332031 11.2862 0.332031C5.39349 0.332031 0.619568 5.13477 0.619568 11.0631C0.619568 16.4191 4.5212 20.8593 9.61749 21.6654V14.1632H6.90579V11.0631H9.61749V8.69748C9.61749 6.00757 11.2104 4.5243 13.6471 4.5243C14.8133 4.5243 16.0365 4.73415 16.0365 4.73415V7.3716H14.6901C13.3674 7.3716 12.9502 8.1967 12.9502 9.04565V11.0583H15.9085L15.4344 14.1584H12.9502V21.6558C18.0513 20.8546 21.9529 16.4191 21.9529 11.0631Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </a>
              </li>
              <li className="inline-block">
                <a href="/" id="twitter">
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7954 0C13.323 0.0374505 11.375 2.17272 11.375 4.64512V5.24449C6.95463 4.45782 4.78192 3.25907 2.38442 0.749219C0.960921 3.52131 2.53426 5.84387 4.25744 7.11756C3.09614 7.11756 2.12218 6.96772 1.37296 6.29344C1.29806 6.25599 1.22312 6.29344 1.26057 6.36838C1.89739 8.69094 4.07011 10.3767 5.75584 10.8637C4.21995 10.8637 3.2085 11.0884 2.12214 10.4141C2.04724 10.3767 1.97229 10.4141 2.00974 10.489C2.83386 12.7741 4.48215 13.4859 6.87965 13.4859C5.6809 14.385 4.07011 15.284 1.03578 15.3589C0.923387 15.3589 0.848486 15.5088 0.960879 15.5837C2.08469 16.5202 4.85682 17.232 8.75272 17.232C15.1585 17.232 20.3656 11.5379 20.3656 4.49527V4.12069C21.377 3.7461 21.9389 2.84703 22.2386 1.94797C22.2386 1.91052 22.2011 1.87307 22.1636 1.87307L20.0284 2.62229C19.9909 2.62229 19.9535 2.54739 19.9909 2.5099C20.8901 1.79813 21.5643 0.899063 21.864 0.0374505C21.864 0.0374505 21.8266 0 21.7891 0C20.7776 0.412081 19.8037 0.82412 19.0545 1.04891C18.9421 1.08636 18.7922 1.08636 18.6799 1.01146C18.1929 0.749219 16.7319 0 15.7954 0Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </a>
              </li>
              <li className="inline-block">
                <a href="/" id="youtube">
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3075 1.36936C21.4893 0.39674 19.9787 0 17.0938 0H6.62139C3.67041 0 2.1342 0.422332 1.31908 1.45783C0.524353 2.46745 0.524353 3.95504 0.524353 6.01391V9.93809C0.524353 13.9268 1.46729 15.9519 6.62139 15.9519H17.0938C19.5956 15.9519 20.982 15.6018 21.8788 14.7435C22.7986 13.8633 23.191 12.4262 23.191 9.93809V6.01391C23.191 3.84266 23.1295 2.34629 22.3075 1.36936ZM15.0764 8.51777L10.321 11.0031C10.2146 11.0587 10.0984 11.0863 9.98228 11.0863C9.85081 11.0863 9.71964 11.0509 9.60345 10.9805C9.38468 10.848 9.25109 10.6109 9.25109 10.3551V5.4003C9.25109 5.14497 9.38431 4.90807 9.60265 4.77543C9.82105 4.64279 10.0927 4.63373 10.3193 4.75145L15.0747 7.2208C15.3167 7.34641 15.4686 7.59619 15.469 7.8687C15.4693 8.14143 15.318 8.39157 15.0764 8.51777Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </a>
              </li>
              <li className="inline-block">
                <a href="/" id="Linkedin">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.46603 6.41016H1.451C1.27281 6.41016 1.12842 6.55461 1.12842 6.73274V19.6313C1.12842 19.8095 1.27281 19.9539 1.451 19.9539H5.46603C5.64423 19.9539 5.78861 19.8095 5.78861 19.6313V6.73274C5.78861 6.55461 5.64423 6.41016 5.46603 6.41016Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M3.45948 0C1.99857 0 0.810059 1.18723 0.810059 2.64652C0.810059 4.10645 1.99857 5.29413 3.45948 5.29413C4.91922 5.29413 6.10677 4.10639 6.10677 2.64652C6.10683 1.18723 4.91922 0 3.45948 0Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M15.6776 6.09375C14.065 6.09375 12.873 6.78698 12.1499 7.57465V6.73691C12.1499 6.55878 12.0055 6.41433 11.8273 6.41433H7.98225C7.80406 6.41433 7.65967 6.55878 7.65967 6.73691V19.6355C7.65967 19.8137 7.80406 19.9581 7.98225 19.9581H11.9885C12.1667 19.9581 12.3111 19.8137 12.3111 19.6355V13.2537C12.3111 11.1032 12.8952 10.2654 14.3943 10.2654C16.027 10.2654 16.1567 11.6085 16.1567 13.3643V19.6356C16.1567 19.8137 16.3011 19.9581 16.4793 19.9581H20.487C20.6652 19.9581 20.8096 19.8137 20.8096 19.6356V12.5605C20.8096 9.36272 20.1999 6.09375 15.6776 6.09375Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 各种链接 */}
        <div className="grid grid-cols-3 space-x-3">
          <div className="mx-auto">
            <dl className="space-y-2">
              <dt className="text-2xl font-semibold">Support</dt>
              <dd>
                <a href="/">Contact us</a>
              </dd>
              <dd>
                <a href="/">Find a Store</a>
              </dd>
              <dd>
                <a href="/">Delivery</a>
              </dd>
              <dd>
                <a href="/">Returns</a>
              </dd>
              <dd>
                <a href="/">Register your bike</a>
              </dd>
              <dd>
                <a href="/">Zendesk FAQ's</a>
              </dd>
              <dd>
                <a href="/">Klarna FAQs</a>
              </dd>
              <dd>
                <a href="/">Cyclescheme</a>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="space-y-2">
              <dt className="text-2xl font-semibold">Company</dt>
              <dd>
                <a href="/">Who we are</a>
              </dd>
              <dd>
                <a href="/">Our story</a>
              </dd>
              <dd>
                <a href="/">Work at Brompton</a>
              </dd>
              <dd>
                <a href="/">Factory tours</a>
              </dd>
              <dd>
                <a href="/">Customer reviews</a>
              </dd>
            </dl>
          </div>

          <div>
            <dl className="space-y-2">
              <dt className="text-2xl font-semibold">Retailers</dt>
              <dd>
                <a href="/">Login to trade portal</a>
              </dd>
              <dd>
                <a href="/">Become a Brompton Retailer</a>
              </dd>
              <br />
              <dt className="text-2xl font-semibold">Hire a Brompton</dt>
              <dd>
                <a href="/">Brompton Bike Hire</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* 版权声明 */}
      {/* 列表，移动端折叠 */}
      <div className="text-xs px-1 py-2 text-gray-400 bg-zinc-900">
        <div>
          {/* 折叠小菜单 terms of use */}
          <ul className={`md:flex space-x-2 mb-3 md:mb-0`}>
            <li
              className="ml-2 md:ml-0"
              onMouseUp={() => {
                setMouseup(!MouseUp);
              }}
            >
              {" "}
              <a href="https://www.brompton.com/legal/terms-of-use">
                Terms Of Use
              </a>
              {MouseUp ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="inline-block md:hidden w-6 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="inline-block md:hidden w-6 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </li>
            {MouseUp ? (
              <>
                <li className="">
                  <a href="https://www.brompton.com/legal/cookies">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/initial-disclosure-document">
                    Initial Disclosure Agreement
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/sitemaps/brompton.xml">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/gdpr-job-applicant">
                    GDPR Job Applicant
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/complaints-procedure">
                    Complaints Procedure
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/modern-slavery-statement">
                    Modern Slavery Statement
                  </a>
                </li>
              </>
            ) : (
              <div className="hidden space-x-2 md:flex">
                <li className="">
                  <a href="https://www.brompton.com/legal/cookies">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/initial-disclosure-document">
                    Initial Disclosure Agreement
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/sitemaps/brompton.xml">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/gdpr-job-applicant">
                    GDPR Job Applicant
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/complaints-procedure">
                    Complaints Procedure
                  </a>
                </li>
                <li>
                  <a href="https://www.brompton.com/legal/modern-slavery-statement">
                    Modern Slavery Statement
                  </a>
                </li>
              </div>
            )}
          </ul>
        </div>
        {/* 废话 */}
        <div className="px-2 md:px-0">
          <p>
            The site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">
              <u>Privacy Policy</u>
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms">
              <u>Terms of Service</u>
            </a>{" "}
            apply.
          </p>
          <br />
          Brompton Bicycle Limited, trading as Brompton and Brompton Junction
          London, is authorised and regulated by the Financial Conduct Authority
          (FCA FRN 668718) and acts as a credit intermediary and not a lender,
          offering credit products provided exclusively by Klarna Bank AB
          (publ). Please note that Pay in 3 instalments and Pay in 30 days
          agreements are not regulated by the FCA. Finance is only available to
          permanent UK residents aged 18+, subject to status, T&amp;Cs apply,{" "}
          <a href="https://www.klarna.com/uk/terms-and-conditions/">
            <u>Klarna Terms and Conditions</u>
          </a>
          . If you would like to know how we handle complaints, please ask for a
          copy of our complaints handling process. You can also find information
          about referring a complaint to the Financial Ombudsman Service (FOS)
          at{" "}
          <a href="https://www.financial-ombudsman.org.uk/">
            <u>financial-ombudsman.org.uk</u>
          </a>
          .<span>© 2023 Brompton Bicycle Ltd</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
