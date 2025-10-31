import React from 'react'

const ViewAllCta = () => {
    return (
        <Fragment>
            <div className='flex justify-center py-12'>
                <button
                    className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
                >
                    {/* Background slide effect */}
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-neutral-900">
                        View More Products
                        <svg
                            className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </Fragment>
    )
}

export default ViewAllCta;