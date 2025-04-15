const Email = () => {
    return (
        <div className="w-[100%] px-[10%] flex flex-col justify-center items-center mb-[5%]">
            <div className=" text-second block w-[100%] md:flex">
                <div className="px-[7%] mb-[8%] md:w-[40%] md:m-0">
                    <div className="text-[6.5vw] font-[600] flex items-center md:text-[4vw]">
                        Ponte en contacto
                    </div>
                    <div className="text-[2.5vw] font-[300] md:text-[1.5vw]"></div>
                </div>
                {/* <div className="px-[5%] text-second md:w-[60%]">
                    <input
                        type="text"
                        className={`text-[300] text-second p-[2%] w-[100%] rounded-[10px] bg-slate-100 border-none `}
                        placeholder="Tu email"
                    />
                    <textarea
                        className={`text-[300] p-[2%] w-[100%] rounded-[10px] mt-[5%] min-h-[100px] h-[70%] resize-none bg-slate-100 border-none  `}
                        placeholder="Describi tu idea"
                    />
                </div> */}
            </div>
            {/*  <button
                className={`text-center text-[2.8vw] w-[30%] font-[700] bg-slate-100 py-[1%] rounded-[10px] mt-[5%] md:text-[1.5vw]`}
            >
                Enviar
            </button> */}
        </div>
    );
};

export default Email;
