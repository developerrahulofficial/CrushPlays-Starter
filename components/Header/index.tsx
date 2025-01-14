"use client"

import Logo from "../Logo"
import SplitText from "../SplitText"
const Header = () => {
    return (
        <div className="flex items-center justify-center gap-3">
            <Logo className="w-8 stroke-black stroke-[14px]" />
            <SplitText className="split-text text-3xl font-semibold *:opacity-0">
                CrushPlays
            </SplitText>
        </div>
    )
}

export default Header
