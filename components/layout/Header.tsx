import React, {useState} from "react";
import Image from "next/image";
import Button from "../common/Button";


const Header: React.FC = () => {
    return (
        <header className="bg-white">
            <div className="text-white font-semibold text-[12px] font-quicksand bg-[#34967C] w-full flex justify-between items-center gap-2 pt-[46px] px-[21px] sm:px-4 pb-4">
                <Image src="/assets/icons/Case_Minimalistic.svg" alt="Case icon" width={24} height={24} />
                <p className="w-[244px]">Overseas trip? Get the latest information on travel guides</p>
                <Button label="More info" className="bg-[#161117] "/>
            </div>
            <nav className="flex justify-between items-center py-4 px-[21px]  sm:px-2">
                <Image className="hidden sm:visible" src="/assets/icons/logo.svg" alt="Logo" width={58.733699798583984} height={30.601991653442383} />
                <div className="flex justity-between items-center gap-9 px-7 border rounded-full border-1 pr-3 ">
                    <div>
                        <search className="text-[#161117]">Where to</search>
                        <ul className="flex flex-nowrap justity-between items-center gap-2 text-[#BEBEBE] font-light">
                            <li>Location</li>
                            <li>Date</li>
                            <li>Add guest</li>
                        </ul>
                    </div>
                    <Image src="/assets/icons/search.svg" alt="search" width={42} height={42} />
                </div>
                <Image src="/assets/icons/profile.svg" alt="search" width={42} height={42} />
            </nav>
            <div className="flex justify-between items-center px-[21px]">
                <div className="flex flex-col justify-center items-center hover:font-semibold hover:border-b-2  py-2 hover:border-b-[#434343]">
                    <Image src="/assets/icons/accommodation/room.svg" alt="room" width={34} height={34}/>
                    <p className="text-[#616161] text-[12px] text-center pt-1">Rooms</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:font-semibold hover:border-b-2  py-2 hover:border-b-[#434343]">
                    <Image src="/assets/icons/accommodation/mansion.svg" alt="mansion" width={34} height={34}/>
                    <p className="text-[#616161] text-[12px] pt-1 text-center">Mansion</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:font-semibold hover:border-b-2  py-2 hover:border-b-[#434343]">
                    <Image src="/assets/icons/accommodation/Countryside.svg" alt="countryside" width={34} height={34}/>
                    <p className="text-[#616161] text-[12px] pt-1 text-center">Countryside</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:font-semibold hover:border-b-2  py-2 hover:border-b-[#434343]">
                    <Image src="/assets/icons/accommodation/villa.svg" alt="villa" width={34} height={34}/>
                    <p className="text-[#616161] text-[12px] pt-1 text-center">Villa</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:font-semibold hover:border-b-2  py-2 hover:border-b-[#434343]">
                    <Image src="/assets/icons/accommodation/mansion.svg" alt="search" width={34} height={34}/>
                    <p className="text-[#616161] text-[12px] pt-1 text-center">Mansion</p>
                </div>
                
            </div>
        </header>

    )
}

export default Header;