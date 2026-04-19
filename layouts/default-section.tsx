import { CSSProperties, PropsWithChildren } from 'react'

const DefaultSection = (Props: PropsWithChildren<{
    outerClassName?: string,
    className?: string,
    style?: CSSProperties,
}>) => {
    return (
        <div
            className={`w-full px-4 md:px-5 ${Props.outerClassName}`}
            style={Props.style}
        >
            <div
                className={`w-full max-w-420 mx-auto ${Props.className}`}
            >{Props.children}</div>
        </div>
    )
}

export default DefaultSection