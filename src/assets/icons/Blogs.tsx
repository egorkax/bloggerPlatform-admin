import * as React from "react"
import {SVGProps, memo} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={18}
        height={10}
        xmlns="http://www.w3.org/2000/svg"
        fill='none'
        {...props}
    >
        <path
            d="M0 6h2V4H0v2Zm0 4h2V8H0v2Zm0-8h2V0H0v2Zm4 4h14V4H4v2Zm0 4h14V8H4v2ZM4 0v2h14V0H4ZM0 6h2V4H0v2Zm0 4h2V8H0v2Zm0-8h2V0H0v2Zm4 4h14V4H4v2Zm0 4h14V8H4v2ZM4 0v2h14V0H4Z"
            fill={props.fill}
        />
    </svg>
)

export const BlogsIcon = memo(SvgComponent)
