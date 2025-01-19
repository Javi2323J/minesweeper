function Minesweeper(props) {
    const handleDiffSelected = (event) => {
        const { id: diff } = event.target

        props.onDiffSelected(diff)
    }

    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="flex gap-[40px] font-bold flex-col items-center justify-center">
                <p className="text-[#F8F8FF] ">Choose difficulty</p>

                <div className="flex gap-[10px]">
                    <button id="easy" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]">Easy</button>
                    <button id="medium" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]" disabled>Medium</button>
                    <button id="hard" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]" disabled>Hard</button>
                </div>
            </div>
        </section>
    )
}

export default Minesweeper