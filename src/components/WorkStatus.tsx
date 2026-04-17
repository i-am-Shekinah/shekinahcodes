import Collaborate from "./Collaborate";

function WorkStatus() {
    return (
        <div className="flex-col space-y-4 w-full">

            <div className="w-full">
                <Collaborate />
            </div>

            <div className="border border-neon-blue w-full h-30 p-8 bg-black text-gray-400 leading-loose font-light text-xs shadow-neon-blue shadow-[0_0_4px_rgba(0,255,255,0.4)]">
                <p><span className="text-neon-blue">Status: </span>Available for work</p>
                <p><span className="text-neon-blue">Location: </span>Remote / Worldwide</p>
                <p><span className="text-neon-blue">Response: </span>Within 24 hours</p>
            </div>

        </div>
    )
}

export default WorkStatus;