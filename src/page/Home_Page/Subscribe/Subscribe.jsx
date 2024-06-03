

const Subscribe = () => {
    return (
        <div className="px-2 lg:px-20 2xl:px-32 py-16 bg-[#eababa]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-9 ">
                <h2 className="">join us for get offers ! <br />
                subscribe now
                </h2>

                <div className="flex-grow ">
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0">
                        <input type="text" name placeholder="your name" className="box-border mr-3 p-3 border border-[#eababa] rounded-sm text-sm focus:outline-none font-semibold flex-grow" autoComplete="false"/>
                        <input type="email" name="email" placeholder="your email"  className="box-border mr-3 p-3 border border-[#eababa] rounded-sm text-sm focus:outline-none font-semibold flex-grow" autoComplete="false"/>
                        <input type="submit" value="Subscribe" className="btn-not-fill rounded-sm w-fit"/>
                    </div>
                    <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur. <span className="text-[#8B1128] border-b border-[#8B1128] hover:text-black cursor-pointer">Lorem, ipsum.</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Subscribe;