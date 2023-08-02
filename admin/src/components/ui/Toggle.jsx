import { useState } from "react";

export default function Toggle() {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-9 h-6 bg-orange-500 rounded-full peer  peer-focus:ring-orange-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-700"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-400">
                        {enabled ? 'TABLA' : 'CARDS'}
                    </span>
                    
                </label>
            </div>
        </div>
    );
}
