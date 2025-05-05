import Image from "next/image";
import { MapPin, Search, CircleUserRound } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const options = [
    "Buy Medicines",
    "Find Doctors",
    "Lab Tests",
    "Circle Membership",
    "Health Records",
    "Diabetes Reversal",
    "Buy InsuranceNew",
  ];

  return (
    <>
      <section>
        <div className="h-[60px] border-b-2 border-b-[#f1f1f1] flex justify-evenly items-center w-[70vw] mx-auto">
          <div className="flex">
            <div>
              <Image
                src="/assets/apollo247.svg"
                alt="apollo247"
                width={70}
                height={48}
                className="mr-6"
              />
            </div>
            <div className="location flex justify-center items-center">
              <MapPin />
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Select Location</span>
                <span className="font-bold">Select Address</span>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
              <Search size={19} color="#000000" />
            </div>
            <input
              type="text"
              placeholder="search Doctors , specialities , conditions etc"
              className="w-full pl-10 pr-4 py-2 bg-[#f1f1f1] border border-gray-400 rounded-md placeholder-gray-500"
            />
          </div>
          <div>
            <button className="flex px-2 py-[4px] rounded-md border-[#276965] border-2">
              <span className="text-[#276965] mr-2 font-semibold"> Login</span>
              <CircleUserRound color="#276965" />
            </button>
          </div>
        </div>
        <div className="w-full shadow-md">
          <div className="w-[60vw] h-[41px] mx-auto ">
            <ul className="flex justify-between ">
              {options.map((option) => (
                <Link href="www.apollopharmacy.in">
                  <li className="text-black text-sm font-semibold hover:text-[#106C89] hover:underline py-2">
                    {option}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
