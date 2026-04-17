import Collaborate from "./Collaborate";

function WorkStatus() {
    return (
        <div className="flex flex-col space-y-6 w-full lg:h-full">

            {/* Remove any hardcoded max-width inside Collaborate component for this use case */}
            <div className="w-full">
                <Collaborate />
            </div>

            <div className="border border-neon-blue w-full min-h-fit p-6 md:p-8 bg-black/40 text-gray-400 leading-loose font-mono text-[10px] md:text-xs shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                <div className="space-y-2">
                    <p><span className="text-neon-blue font-bold uppercase tracking-wider">Status: </span>Available for work</p>
                    <p><span className="text-neon-blue font-bold uppercase tracking-wider">Location: </span>Remote / Worldwide</p>
                    <p><span className="text-neon-blue font-bold uppercase tracking-wider">Response: </span>Within 24 hours</p>
                </div>
            </div>

        </div>
    )
}

export default WorkStatus;