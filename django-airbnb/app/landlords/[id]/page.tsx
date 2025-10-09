import Image from "next/image";

import ContactButton from "@/app/components/ContactButton";

const LandlordDetailPage = () => { return (
        <main className="pb-6 max-w-[1500px] mx-auto px-6"> 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <img
                            fill
                            src="/profile.png"
                            width={200}
                            height={200}
                            alt="Landlord Name"
                            className="rounded-full w-[200px] h-[200px] object-cover"
                        />
       
                        <h1 className="mt-6 text-2xl">Landlord Name</h1>                         
                    </div>
                </aside>

                <div className="col-span-3 pl-0 md:pl-6">
                    properties
                </div>
            </div>   
        </main>
    );
}

export default LandlordDetailPage;
