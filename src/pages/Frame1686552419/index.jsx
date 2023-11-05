import React from "react";

import { Button, Img, Text } from "components";

const Frame1686552419Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Text
            className="md:ml-[0] ml-[100px] md:mt-0 my-[19px] sm:text-4xl md:text-[38px] text-[40px] text-orange-600"
            size="txtPoppinsBold40"
          >
            LOGO
          </Text>
          <div className="flex sm:flex-1 md:flex-col flex-row font-playfairdisplay gap-10 items-center justify-center md:ml-[0] ml-[530px] mr-[101px] md:mt-0 my-[34px] w-auto sm:w-full">
            <Button className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[87px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl">
              Home{" "}
            </Button>
            <Button className="bg-transparent cursor-pointer leading-[normal] min-w-[135px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl">
              Contact us
            </Button>
            <Button className="bg-transparent cursor-pointer leading-[normal] min-w-[66px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl">
              FAQ
            </Button>
            <Button className="bg-transparent cursor-pointer leading-[normal] min-w-[187px] text-2xl md:text-[22px] text-center text-orange-600 sm:text-xl">
              Join the waitlist
            </Button>
          </div>
        </header>
        <div className="md:px-5 relative w-[1440px] md:w-full">
          <Img
            className="h-[925px] m-auto object-cover w-[1440px] md:w-full"
            src="images/img_rectangle4332.png"
            alt="rectangle4332"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[132px] inset-x-[0] items-center justify-start mx-auto top-[15%] w-auto">
            <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
              <Text
                className="bg-clip-text bg-gradient  max-w-[778px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-transparent"
                size="txtPoppinsSemiBold48"
              >
                Unlock Streamless Videos and Earning Potentials
              </Text>
              <Text
                className="max-w-[1274px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtPoppinsLight28"
              >
                <>
                  EarnReach brings you a hassle-free way to boost your income.
                  Watch videos, complete tasks, and watch your earnings grow
                  effortlessly. With EarnReach, you&#39;re not just watching
                  videos; you&#39;re investing in your financial well-being
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
              <Button
                className="cursor-pointer font-inter font-semibold h-[89px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[325px]"
                shape="round"
                color="orange_600"
                size="sm"
                variant="fill"
              >
                Join the Waitlist
              </Button>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24"
              >
                Join the waitlist today and be the first to know when we launch!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame1686552419Page;
