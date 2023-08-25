import React from 'react'
import eye from "../Images/eye.png"
import user from "../Images/user.png"
import naira from "../Images/naira.png"
import upwork from "../Images/upwork.png"
import hand from "../Images/hand.png"
import calendar from "../Images/calendar.png"
import Vector from "../Images/Vector.png"
import Vector1 from "../Images/Vector1.png"
import Vector2 from "../Images/Vector2.png"
import Frame1 from "../Images/Frame1.png"
import window from "../Images/window.png"
import wallet from "../Images/wallet.png"
import use from "../Images/user.png"
import setting from "../Images/setting.png"
import call from "../Images/call.png"
import book from "../Images/book.png"
import azi from "../Images/azi.png"





const Dashboard = () => {
  return (
    <div className='w-[300px] md:w-screen h-full relative px-6 md:px-[25%]'>
        

        <div className="w-[300px] md:w-full self-stretch flex flex-col items-start justify-start gap-[15px] md:gap-[48px]">

          <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">


            <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
              <div className="flex flex-row items-start justify-start">
                <b className="relative text-[48px]">Welcome Abasiama</b>
              </div>
              <div className="relative text-base text-[24px] font-medium text-black">
                Pay and manage your employee in minutes
              </div>
            </div>


            <div className="flex flex-row items-start justify-start gap-[48px] text-white">
              <div className="flex flex-col items-start justify-start gap-[48px]">
                <div className="flex-1 rounded-3xl bg-green-900 shadow-inner w-[300px] md:w-[770px] overflow-hidden flex flex-col py-[31px] md:px-8 items-start justify-center relative gap-[10px] border-[1px] border-solid border-gray-500">

                  <div className="self-stretch flex flex-row items-end justify-between z-[0]">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="flex flex-row items-start justify-start">
                        <div className="relative text-[18px] font-md">
                          Wallet Balance
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px] text-13xl text-white">
                        <div className="flex flex-row items-start justify-start">
                          <b className="relative text-[40px]">
                            N12,560,078.00
                          </b>
                        </div>
                        <div className="rounded-sm flex flex-col py-2 px-1 items-center justify-center">
                          <img
                            className="relative w-[40px] h-[25px] overflow-hidden shrink-0"
                            alt=""
                            src={eye}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-green-300 shadow-inner flex flex-row py-3 px-7 items-center justify-center text-sm text-new-styles-primary-eazi-green">
                      <div className="relative tracking-[0.1px] leading-[20px] font-medium">
                        Fund Wallet
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_77px)] left-[calc(50%_-_385px)] w-[1227.6px] h-[543.67px] z-[1]"
                    alt=""
                    src="/frame-48096047.svg"
                  />
                </div>


                <div className="self-stretch rounded-3xl flex flex-row items-center justify-start gap-[32px] text-center text-sm text-zinc-500">
                  <div className="flex-1 rounded-3xl bg-white shadow-inner flex flex-col py-4 px-6 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-300">
                    <img
                      className="relative rounded-xl w-12 h-12 bg-red-50 p-[10]"
                      alt=""
                      src={user}
                    />
                    <div className="self-stretch relative tracking-[0.25px] leading-[16px] font-medium">
                      Add Employee
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xl bg-white shadow-inner flex flex-col py-4 px-6 items-center justify-start gap-[16px] border-[1px] border-solid border-gray-300">
                    <img
                      className="relative rounded-xl w-12 h-12"
                      alt=""
                      src={naira}
                    />
                    <div className="self-stretch relative tracking-[0.25px] leading-[16px] font-medium">
                      Pay Salaries
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xl bg-white shadow-inner flex flex-col py-4 px-6 items-center justify-start gap-[16px] border-[1px] border-solid border-zinc-300">
                    <img
                      className="relative rounded-xl w-12 h-12"
                      alt=""
                      src={upwork}
                    />
                    <div className="self-stretch relative tracking-[0.25px] leading-[16px] font-medium">
                      Pay Compliances
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xl bg-white shadow-transparent flex flex-col py-4 px-6 items-center justify-start gap-[16px] border-[1px] border-solid border-zinc-300">
                    <img
                      className="relative rounded-xl w-12 h-12"
                      alt=""
                      src={hand}
                    />
                    <div className="self-stretch relative tracking-[0.25px] leading-[16px] font-medium">
                      Quick Loan
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch rounded-3xl bg-white shadow-zinc-300 box-border w-[190px] overflow-hidden shrink-0 flex flex-col pt-0 px-4 pb-4 items-center justify-between text-center text-new-styles-text-body-dark border-[1px] border-solid border-zinc-300">
              
              <div className="rounded-2xl w-[188px] flex flex-col items-center justify-start">
                  <div className="self-stretch rounded-t-2xl rounded-b-none bg-green-300 shadow-transparent flex flex-row py-2 px-9 items-center justify-center">
                    <b className="relative leading-[24px]">Next Payroll</b>
                  </div>
                  <div className="self-stretch h-[89px] flex flex-col py-4 px-6 box-border items-center justify-center gap-[8px] text-left text-xs">
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src={calendar}
                      />
                      <div className="relative text-[20px] text-zinc-500">Friday</div>
                    </div>
                    <b className="relative text-lg text-zinc-500 font-semibold">
                      09/11/2022
                    </b>
                    <div className="relative text-[16px] tracking-[-0.02em] leading-[14px] text-zinc-500 font-medium text-dimgray hidden w-[124px]">
                      Septermber 20,2022
                    </div>
                    <b className="relative text-base hidden text-old-styles-secodary-color">
                      N100,000.00
                    </b>
                  </div>
                </div>

                <div className="relative box-border w-[189px] h-px border-t-[1px] border-solid border-gray-500" />
                <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-left">
                  <div className="relative leading-[24px] font-medium text-zinc-400">
                    Total Employee
                  </div>
                  <b className="relative text-4xl leading-[40px] text-black font-bold">
                    64
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-3xs text-new-styles-text-body-normal">
                    <div className="self-stretch bg-black flex flex-row items-start justify-start">
                      <div className="flex-1 relative bg-green-950 h-2" />
                      <div className="flex-1 relative bg-red-500 h-2" />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-zinc-400">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] mt-[10px]">
                        <b className="relative leading-[12px]">Male</b>
                        <b className="relative leading-[12px]">32</b>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] mt-[10px]">
                        <b className="relative leading-[12px]">Female</b>
                        <b className="relative leading-[12px]">32</b>
                      </div>
                      <div className="hidden flex-col items-start justify-start">
                        <b className="relative">Others</b>
                        <b className="relative">10</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
          <div className="rounded-3xl box-border w-[1006px] flex flex-col items-center justify-center text-base text-black border-[1px] border-solid border-inner">
            <div className="self-stretch rounded-2xl bg-white shadow-transparent flex flex-col p-12 items-center justify-center relative gap-[9px]">

              <div className="self-stretch h-[77px] flex flex-row items-start justify-between z-[0]">
                <div className="flex flex-col items-start justify-center gap-[4px]">
                  <div className="relative leading-[24px] font-medium">
                    Inflow
                  </div>
                  <b className="relative text-4xl leading-[36px] text-green-800">
                    N1,567,552
                  </b>
                </div>
                <div className="flex flex-col items-start justify-center gap-[4px]">
                  <div className="relative leading-[24px] font-medium">
                    Outflow
                  </div>
                  <b className="relative text-4xl leading-[36px] text-red-500">
                    N1,567,552
                  </b>
                </div>
                <div className="flex flex-row items-center justify-start gap-[48px] text-sm text-gray">
                  <div className="rounded-lg bg-old-styles-white-color hidden flex-row py-1 px-2 items-center justify-center gap-[10px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/multimedia--equalizer1.svg"
                    />
                    <div className="relative leading-[14px]">Sort By</div>
                    <div className="relative tracking-[-0.02em] leading-[14px] font-medium text-old-styles-primary-color">
                      Month
                    </div>
                  </div>
                  <div className="bg-old-styles-white-color flex flex-row py-1 pr-2 pl-6 items-center justify-start gap-[10px]">
                    <div className="relative tracking-[0.1px] leading-[20px] font-medium text-green-800">
                      Inflow/Outflow
                    </div>
                    <img
                      className="relative w-[15px] h-[10px] "
                      alt=""
                      src={Vector}
                    />
                  </div>
                </div>
              </div>

              <div className="self-stretch h-[295px] flex flex-col py-0 px-12 box-border items-start justify-center gap-[9px] z-[1] text-xs text-new-styles-text-body-normal">
                <div className="w-[734px] flex flex-row items-center justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-center gap-[32px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                        N200m
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                        N100m
                      </div>
                    </div>
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      N50m
                    </div>
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      N20m
                    </div>
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      N0
                    </div>
                  </div>

                  <div className="relative w-[686px] h-[223px] text-white">
                    <div className="absolute top-[-0.5px] left-[-0.5px] bg-zinc-500 box-border w-px h-56 border-r-[1px] border-solid border" />
                    <div className="absolute top-[222.5px] left-[-0.5px] bg-new-styles-text-body-normal box-border w-[676px] h-px border-t-[1px] border-solid border-new-styles-grays-outline" />
                    <div className="absolute top-[168.5px] left-[-0.5px] box-border w-[676px] h-px border-t-[1px] border-solid border-new-styles-grays-gray" />
                    <div className="absolute top-[121.5px] left-[-0.5px] box-border w-[676px] h-px border-t-[1px] border-solid bo" />
                    <div className="absolute top-[74.5px] left-[-0.5px] box-border w-[676px] h-px border-t-[1px] border-solid border-new-styles-grays-gray" />
                    <div className="absolute top-[27.5px] left-[-0.5px] box-border w-[676px] h-px border-t-[1px] border-solid border-new-styles-grays-gray" />


                    <div className="absolute top-[18px] left-[0.5px] w-[506px] h-[177.52px]">
                      <img
                       className="absolute top-[32.43px] left-[-1.2px] w-[521.7px] h-[144.76px]"
                        alt=""
                        src={Vector1}
                      />
                      <img
                       className="absolute top-[32.43px] left-[-1.2px] w-[521.7px] h-[144.76px]"
                        alt=""
                        src={Vector2}
                      />
                          <div className="absolute left-[237px] top-[-15px] flex flex-col items-center justify-start gap-[1px]">
                        <div className="relative w-[54px] h-[34px]">
                        <div className="relative bg-gray-700 text-center text-[13px] w-[71px] h-[34px] rounded-md pt-[5px]">N89m</div>
                         
                        </div>
                        <div className="relative rounded-[50%] bg-red-600 w-3 h-3" />
                      </div>
                    
                      <div className="absolute top-[-24px] left-[335px] w-[71px] flex flex-col items-center justify-start gap-[1px]">
                        <div className="self-stretch relative h-[34px]">

                         <div className="relative bg-gray-500 text-center text-[13px] w-[71px] h-[34px] rounded-md pt-[5px]">N100.57m</div>
                        </div>
                        <div className="relative rounded-[50%] bg-green-700 w-3 h-3" />
                      </div>

                    </div>
                  </div>
                </div>

                <div className="w-[734px] flex flex-row py-0 pr-0 pl-12 box-border items-center justify-start gap-[34px]">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      Jan
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      Feb
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      Mar
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      Apr
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      May
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                      Jun
                    </div>
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Jul
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Aug
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Sept
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Oct
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Nov
                  </div>
                  <div className="relative tracking-[0.4px] leading-[16px] uppercase font-medium [-webkit-text-stroke:1px_#e7e8e7]">
                    Dec
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[406px] left-[886px] bg-new-styles-primary-eazi-green w-[72px] flex flex-row py-2.5 px-4 box-border items-start justify-start z-[2] text-old-styles-white-color">
                <b className="relative leading-[24px]">2022</b>
              </div>
            </div>
          </div>

            


        <div className="w-[1006px] h-[894px] flex flex-col items-start justify-start gap-[24px] text-13xl">
          <div className="relative leading-[40px] font-medium">
            Recent Activities
          </div>
          <div className="self-stretch h-12 flex flex-row items-center justify-start gap-[16px] text-sm text-eazipay-typo-neutral-lighten-2">
            <div className="flex-1 rounded-2xl bg-old-styles-white-color overflow-hidden flex flex-row py-0 pr-0 pl-8 items-center justify-between border-[1px] border-solid border-new-styles-text-body-light">
              <div className="relative tracking-[0.25px] leading-[16px]">
                Search employee
              </div>
              <div className="rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-new-styles-primary-mint w-[102px] flex flex-row py-3 px-8 box-border items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/user-interface--magnifier1.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-old-styles-white-color hidden flex-row py-2.5 px-4 items-center justify-start gap-[16px] text-old-styles-light-text-color border-[1px] border-solid border-new-styles-text-body-normal">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="relative tracking-[-0.02em] leading-[14px] font-medium">
                  Year 2022
                </div>
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="/iconsbasicarrowdown-2.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[14px] font-medium text-darkslategray hidden">
                All
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-old-styles-white-color flex flex-row py-2.5 px-4 items-center justify-start gap-[16px] text-new-styles-text-body-normal border-[1px] border-solid border-new-styles-text-body-light">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/multimedia--equalizer2.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[14px] font-medium">
                  Filter
                </div>
              </div>
              <div className="relative tracking-[-0.02em] leading-[14px] font-medium text-darkslategray hidden">
                All
              </div>
            </div>
            <div className="rounded-3xl bg-new-styles-primary-eazi-green hidden flex-row py-3 px-7 items-center justify-center text-base text-old-styles-white-color">
              <div className="relative leading-[24px] font-medium">
                Send Payslip(s)
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-[20px] bg-whitesmoke h-[752px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-6 box-border items-center justify-between text-xs text-new-styles-text-body-normal">
            <div className="h-[716px] overflow-y-auto flex flex-col items-start justify-start gap-[12px]">
              <div className="w-[952.94px] flex flex-row pt-6 px-0 pb-2 box-border items-center justify-start text-sm text-darkslategray">
                <div className="h-[26px] flex flex-row py-4 px-0 box-border items-center justify-center text-lg text-new-styles-text-body-dark">
                  <div className="relative leading-[24px] font-medium">
                    Wednesday, November 09, 2022
                  </div>
                </div>
                <div className="w-[72px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">TIME</b>
                </div>
                <div className="w-60 h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="flex-1 relative leading-[16px]">DESCRIPTION</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">CREDIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">DEBIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">BALANCE</b>
                </div>
              </div>
              <div className="rounded-2xl bg-old-styles-white-color shadow-[0px_9px_18px_rgba(170,_170,_170,_0.15)] box-border w-[1033px] flex flex-col py-2 px-12 items-start justify-start gap-[8px] border-[1px] border-solid border-new-styles-grays-outline">
                <div className="relative leading-[16px]">PAYROLL</div>
                <div className="flex flex-row items-start justify-start gap-[100px]">
                  <div className="h-[62px] flex flex-col items-start justify-end text-old-styles-light-text-color">
                    <div className="relative hidden">USER</div>
                    <div className="h-12 flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[10px] text-base text-old-styles-white-color">
                      <div className="rounded-81xl bg-old-styles-part-paid w-10 h-10 flex flex-col py-2.5 px-[7px] box-border items-center justify-center">
                        <div className="relative font-medium">BM</div>
                      </div>
                      <div className="relative leading-[24px] font-medium text-new-styles-text-body-dark">
                        Badmus Kemis
                      </div>
                    </div>
                  </div>
                  <div className="w-[238px] flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">ACTIVITY</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        Paid November 2022 salary
                      </div>
                    </div>
                  </div>
                  <div className="w-[125px] flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">EMPLOYEE</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        52
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">TIME</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        16:15
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-old-styles-white-color shadow-[0px_9px_18px_rgba(170,_170,_170,_0.15)] box-border w-[1033px] flex flex-col py-2 px-12 items-start justify-start gap-[8px] border-[1px] border-solid border-new-styles-grays-outline">
                <div className="relative leading-[16px]">
                  EMPLOYEE MANAGEMENT
                </div>
                <div className="flex flex-row items-start justify-start gap-[100px]">
                  <div className="h-[62px] flex flex-col items-start justify-end text-old-styles-light-text-color">
                    <div className="relative hidden">USER</div>
                    <div className="h-12 flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[10px] text-base text-old-styles-white-color font-roboto">
                      <div className="rounded-81xl w-10 h-10 flex flex-col py-2.5 px-[7px] box-border items-center justify-center bg-[url(/public/frame-861@3x.png)] bg-cover bg-no-repeat bg-[top]">
                        <div className="relative font-medium hidden">KA</div>
                      </div>
                      <div className="relative leading-[24px] font-medium font-old-body-small-medium text-new-styles-text-body-dark">
                        Kalu Abasiama
                      </div>
                    </div>
                  </div>
                  <div className="w-[238px] flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">ACTIVITY</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        Added new employee
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">EMPLOYEE</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        04
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[952.94px] flex flex-row pt-8 px-0 pb-2 box-border items-center justify-start text-sm text-darkslategray">
                <div className="h-[26px] flex flex-row py-4 px-0 box-border items-center justify-center text-lg text-new-styles-text-body-dark">
                  <div className="relative leading-[24px] font-medium">
                    Friday, November 04, 2022
                  </div>
                </div>
                <div className="w-[72px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">TIME</b>
                </div>
                <div className="w-60 h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="flex-1 relative leading-[16px]">DESCRIPTION</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">CREDIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">DEBIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">BALANCE</b>
                </div>
              </div>
              <div className="rounded-2xl bg-old-styles-white-color shadow-[0px_9px_18px_rgba(170,_170,_170,_0.15)] box-border w-[1033px] flex flex-col py-2 px-12 items-start justify-start gap-[8px] border-[1px] border-solid border-new-styles-grays-outline">
                <div className="relative leading-[16px]">BONUS</div>
                <div className="flex flex-row items-start justify-start gap-[100px] text-old-styles-light-text-color">
                  <div className="w-[174px] h-[62px] flex flex-col items-start justify-end">
                    <div className="relative hidden">USER</div>
                    <div className="h-12 flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[10px] text-base text-old-styles-white-color font-roboto">
                      <div className="rounded-81xl bg-old-styles-part-paid w-10 h-10 flex flex-col py-2.5 px-[7px] box-border items-center justify-center">
                        <div className="relative font-medium">BM</div>
                      </div>
                      <div className="relative leading-[24px] font-medium font-old-body-small-medium text-new-styles-text-body-dark">
                        Badmus Kemis
                      </div>
                    </div>
                  </div>
                  <div className="w-[238px] flex flex-col items-start justify-start text-new-styles-text-body-normal">
                    <div className="relative leading-[16px]">ACTIVITY</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        Added new bonus
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start font-roboto">
                    <div className="relative">BONUS NAME</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark font-old-body-small-medium">
                      <div className="relative leading-[24px] font-medium">
                        XMAS Bonus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-old-styles-white-color shadow-[0px_9px_18px_rgba(170,_170,_170,_0.15)] box-border w-[1033px] flex flex-col py-2 px-12 items-start justify-start gap-[8px] border-[1px] border-solid border-new-styles-grays-outline">
                <div className="relative leading-[16px]">WALLET</div>
                <div className="flex flex-row items-start justify-start gap-[100px]">
                  <div className="w-[174px] h-[62px] flex flex-col items-start justify-end text-old-styles-light-text-color">
                    <div className="relative hidden">USER</div>
                    <div className="h-12 flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[10px] text-base text-old-styles-white-color font-roboto">
                      <div className="rounded-81xl bg-old-styles-part-paid w-10 h-10 flex flex-col py-2.5 px-[7px] box-border items-center justify-center">
                        <div className="relative font-medium">BM</div>
                      </div>
                      <div className="relative leading-[24px] font-medium font-old-body-small-medium text-new-styles-text-body-dark">
                        Badmus Kemis
                      </div>
                    </div>
                  </div>
                  <div className="w-[238px] flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">ACTIVITY</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        Paid November 2022, salary
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">AMOUNT</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-secondary-strawberry">
                      <div className="relative leading-[24px] font-medium">
                        N11,1678,900.00
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-col items-start justify-start text-old-styles-light-text-color font-roboto">
                    <div className="relative">BALANCE</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-darkslategray">
                      <div className="relative font-medium">N12,786,987.98</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px]">TIME</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-new-styles-text-body-dark">
                      <div className="relative leading-[24px] font-medium">
                        15:31
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[952.94px] flex flex-row pt-8 px-0 pb-2 box-border items-center justify-start text-sm text-darkslategray">
                <div className="h-[26px] flex flex-row py-4 px-0 box-border items-center justify-center text-lg text-new-styles-text-body-dark">
                  <div className="relative leading-[24px] font-medium">
                    Monday, October 30, 2022
                  </div>
                </div>
                <div className="w-[72px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">TIME</b>
                </div>
                <div className="w-60 h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="flex-1 relative leading-[16px]">DESCRIPTION</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">CREDIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">DEBIT</b>
                </div>
                <div className="w-[140px] h-[26px] hidden flex-row p-4 box-border items-center justify-start">
                  <b className="relative leading-[16px]">BALANCE</b>
                </div>
              </div>
              <div className="rounded-2xl bg-old-styles-white-color shadow-[0px_9px_18px_rgba(170,_170,_170,_0.15)] box-border w-[1033px] flex flex-col py-2 px-12 items-start justify-start gap-[8px] text-old-styles-light-text-color border-[1px] border-solid border-new-styles-grays-outline">
                <div className="relative">PAYROLL</div>
                <div className="flex flex-row items-start justify-start gap-[100px]">
                  <div className="h-[62px] flex flex-col items-start justify-end">
                    <div className="relative hidden">USER</div>
                    <div className="h-12 flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[10px] text-base text-old-styles-white-color">
                      <div className="rounded-81xl bg-old-styles-part-paid w-10 h-10 flex flex-col py-2.5 px-[7px] box-border items-center justify-center">
                        <div className="relative font-medium">BM</div>
                      </div>
                      <div className="relative font-medium text-darkslategray">
                        Badmus Kemis
                      </div>
                    </div>
                  </div>
                  <div className="w-[238px] flex flex-col items-start justify-start">
                    <div className="relative">ACTIVITY</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-darkslategray">
                      <div className="relative font-medium">
                        Paid XMAS bonus
                      </div>
                    </div>
                  </div>
                  <div className="w-[125px] flex flex-col items-start justify-start">
                    <div className="relative">EMPLOYEE</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-darkslategray">
                      <div className="relative font-medium">52</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative">TIME</div>
                    <div className="h-12 flex flex-row py-2.5 px-0 box-border items-center justify-start text-base text-darkslategray">
                      <div className="relative font-medium">10:15</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-new-styles-grays-gray shadow-[1px_0px_1px_#bec4c8] w-4 h-[613px] flex flex-col py-1 px-0 box-border items-center justify-between">
              <div className="w-3 flex flex-col items-center justify-start gap-[8px]">
                {/* <img
                  className="relative w-[6.93px] h-1.5"
                  alt=""
                  src="/polygon-21.svg"
                /> */}
                <div className="self-stretch relative rounded-lg bg-new-styles-text-body-normal h-[268px]" />
              </div>
              <img className="relative w-2 h-2" alt="" src="/polygon-31.svg" />
            </div>
          </div>
        </div>

 
        </div>

        

      <div className="hidden md:block absolute top-[0px] left-[0px] bg-white w-[272px] h-[1024px] overflow-hidden text-new-styles-text-body-dark">
        <img
          className="absolute top-[0px] left-[0px] w-[318.28px] h-[150.7px]"
          alt=""
          src={azi}
        />
        <div className="absolute top-[172px] left-[0px] w-[272px] h-[852px] overflow-hidden">
          <div className="absolute top-[16px] left-[0px] flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start">
              <div className="relative bg-new-styles-primary-mint-light box-border w-[272px] h-14 overflow-hidden shrink-0 text-new-styles-primary-eazi-green border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[19.99px] h-5"
                    alt=""
                    src={window}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Dashboard
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-new-styles-primary-eazi-green" />
                {/* <img
                  className="absolute h-[37.5%] w-[8.82%] top-[31.25%] right-[5.88%] bottom-[31.25%] left-[85.29%] max-w-full overflow-hidden max-h-full opacity-[0]"
                  alt=""
                  src={wallet}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[20.4px] h-[20.4px]"
                    alt=""
                    src={wallet}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Wallet
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[37.5%] w-[8.82%] top-[31.25%] right-[5.88%] bottom-[31.25%] left-[85.29%] max-w-full overflow-hidden max-h-full opacity-[0]"
                  alt=""
                  src={user}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src={call}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Employee Management
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[32.14%] right-[6.43%] bottom-[25%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={setting}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[17.01px] h-[19.71px] overflow-hidden shrink-0"
                    alt=""
                    src={book}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Payroll
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[28.57%] right-[6.43%] bottom-[28.57%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={wallet}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    src={setting}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Compliance
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[28.57%] right-[6.43%] bottom-[28.57%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={call}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-[21.32px] overflow-hidden shrink-0"
                    alt=""
                    src={user}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Quick Loan
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[28.57%] right-[6.43%] bottom-[28.57%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={setting}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color w-[272px] h-14 overflow-hidden shrink-0">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src={wallet}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Book Keeping
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[28.57%] right-[6.43%] bottom-[28.57%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={wallet}
                /> */}
              </div>
            </div>
            <div className="relative box-border w-[236.62px] h-px border-t-[1px] border-solid border-new-styles-grays-outline" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative bg-old-styles-white-color box-border w-[272px] h-14 overflow-hidden shrink-0 border-b-[0.8px] border-solid border-new-styles-grays-outline">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src={call}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Support
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[37.5%] w-[8.82%] top-[31.25%] right-[5.88%] bottom-[31.25%] left-[85.29%] max-w-full overflow-hidden max-h-full opacity-[0]"
                  alt=""
                  src={setting}
                /> */}
              </div>
              <div className="relative bg-old-styles-white-color w-[272px] h-14 overflow-hidden shrink-0">
                <div className="absolute top-[16px] left-[20.38px] flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src={setting}
                  />
                  <div className="relative leading-[24px] font-medium">
                    Settings
                  </div>
                </div>
                <div className="absolute h-full w-[1.47%] top-[0%] right-[98.53%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-gainsboro opacity-[0]" />
                {/* <img
                  className="absolute h-[42.86%] w-[7.72%] top-[28.57%] right-[6.43%] bottom-[28.57%] left-[85.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/arrow--chevron-right1.svg"
                /> */}
              </div>
            </div>
          </div>
          <img
            className="absolute top-[836px] left-[0px] w-[272px] h-4 opacity-[0]"
            alt=""
            src="/arrow--chevron-right.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[272px] h-4 opacity-[0]"
            alt=""
            src="/arrow--chevron-right.svg"
          />
        </div>
      </div>

    </div>
  )
}

export default Dashboard