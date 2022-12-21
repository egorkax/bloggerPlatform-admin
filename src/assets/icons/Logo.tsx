import * as React from "react"
import {SVGProps, memo} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={34}
        height={28}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M30.5.5h-27C2 .5.5 2 .5 3.5v21c0 1.65 1.35 3 3 3h27c1.5 0 3-1.5 3-3v-21c0-1.5-1.5-3-3-3Zm0 23.88c-.03.045-.09.09-.12.12H3.5V3.62l.12-.12h26.745c.045.03.09.09.12.12v20.76h.015Zm-15-5.115-3.75-4.515L6.5 21.5h21l-6.75-9-5.25 6.765Z"
            fill="#ADABAC"
        />
    </svg>
)

export const LogoIcon = memo(SvgComponent)
