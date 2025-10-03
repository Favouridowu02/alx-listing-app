import React from "react";
import Image from "next/image";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#222222] mb-0 text-white text-[14px] font-quicksand w-full h-full">
            <div className=" bg-[#34967C] w-full h-[29px]">
            </div>
            <div className="px-[21px] pt-4 ">
                <Image className="text-white" src="/assets/icons/logo-w.svg" alt="Logo" width={58.733699798583984} height={30.601991653442383} />
                <p className="font-light text-[11px] mt-10 mb-4"
                >ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
                <div className="flex flex-wrap justify-between pr-6 pb-20 pl-6">
                    <div className=" pt-4 mr-10">
                        <h3 className="font-semibold pb-3">Explore</h3>
                        <ul className="font-light text-[11px] line-3">
                            <li className="pb-1">Apartments in Dubai</li>
                            <li className="pb-1">Hotels in New York</li>
                            <li className="pb-1">Villa in Spain</li>
                            <li className="pb-1">Mansion in Indonesia</li>
                        </ul>
                    </div>
                    <div className=" pt-4  pr-7">
                        <h3 className="font-semibold pb-3">Company</h3>
                        <ul className="font-light text-[11px] line-3">
                            <li className="pb-1">About us</li>
                            <li className="pb-1">Blog</li>
                            <li className="pb-1">Career</li>
                            <li className="pb-1">Customers</li>
                            <li className="pb-1">Brand</li>
                        </ul>
                    </div>
                    <div className=" pt-4  pr-7">
                        <h3 className="font-semibold pb-3">Help</h3>
                        <ul className="font-light text-[11px] line-3">
                            <li className="pb-1">Support</li>
                            <li className="pb-1">Cancel booking</li>
                            <li className="pb-1">Refunds Process</li>
                        </ul>
                    </div>
                </div>
                <hr className="h-0.5 opacity-17"/>
                <div className="py-4 font-light text-[11px]">
                    <p>Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="" className="text-[#34967C]">here</a></p>
                    <ul className="flex justify-around mt-4 mb-8">
                        <li>Terms of Service</li>
                        <li>Policy service</li>
                        <li>Cookies Policy</li>
                    </ul>

                </div>
            </div>

        </footer>
    )

};

export default Footer;