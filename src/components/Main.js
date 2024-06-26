import { Map } from "lucide-react";

const Main = () => {

    return (
        <main className="w-full flex flex-col pb-4">
            <aside className="w-full px-3 lg:px-6 ">
                <div className="flex w-full items-baseline justify-between">
                    <h1 className="font-bold text-3xl mb-6 mt-4">Compre ou Alugue</h1>
                    <span className="hidden md:block text-gray-600">Casas encontradas</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="#" className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-lg duration-300">
                        <div>
                            <div className="group overflow-hidden rounded-lg">
                                <div className="absolute z-40 top-5 left-5">
                                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-2 px-3 py-1 rounded-full">
                                        <Map />
                                        <p className="font-medium text-sm">Fernando de Noronha - PE</p>
                                    </div>
                                </div>
                                <img src="/images/casa1.png" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 my-2">
                                <h2 className="text-lg font-bold">Casa de Praia</h2>
                                <div>
                                    <p className="text-sm font-bold text-indigo-500 my-1">5000 R$/mês</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <span className="font-medium text-sm">1200 metros - </span>
                            <span className="font-medium text-sm">4 quartos - </span>
                            <span className="font-medium text-sm">2 banheiros</span>
                        </div>
                    </a>
                    <a href="#" className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-lg duration-300">
                        <div>
                            <div className="group overflow-hidden rounded-lg">
                                <div className="absolute z-40 top-5 left-5">
                                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-2 px-3 py-1 rounded-full">
                                        <Map />
                                        <p className="font-medium text-sm">Fortaleza - CE</p>
                                    </div>
                                </div>
                                <img src="/images/casa2.jpg" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 my-2">
                                <h2 className="text-lg font-bold">Casa de Praia</h2>
                                <div>
                                    <p className="text-sm font-bold text-indigo-500 my-1">5000 R$/mês </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <span className="font-medium text-sm">1200 metros - </span>
                            <span className="font-medium text-sm">3 quartos - </span>
                            <span className="font-medium text-sm">2 banheiros</span>
                        </div>
                    </a>
                    <a href="#" className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-lg duration-300">
                        <div>
                            <div className="group overflow-hidden rounded-lg">
                                <div className="absolute z-40 top-5 left-5">
                                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-2 px-3 py-1 rounded-full">
                                        <Map />
                                        <p className="font-medium text-sm">São Paulo - SP</p>
                                    </div>
                                </div>
                                <img src="/images/casa3.jpg" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 my-2">
                                <h2 className="text-lg font-bold">Casa no Sítio</h2>
                                <div>
                                    <p className="text-sm font-bold text-indigo-500 my-1">5000 R$/mês</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <span className="font-medium text-sm">1200 metros - </span>
                            <span className="font-medium text-sm">4 quartos - </span>
                            <span className="font-medium text-sm">3 banheiros</span>
                        </div>
                    </a>
                </div>
            </aside>
        </main>
    )
}

export default Main