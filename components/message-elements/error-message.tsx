import { RiErrorWarningFill } from '@remixicon/react'
import React from 'react'

const ErrorMessageElement = ({
    text
}: {
    text: string,
}) => {
    return (
        <div
            className='flex items-start gap-3 bg-red-200 py-2 px-3 rounded-lg shadow-sm'
        >
            <RiErrorWarningFill
                size={20}
                className='relative top-0.5'
            />
            <p>{text} </p>
        </div>
    )
}

export default ErrorMessageElement