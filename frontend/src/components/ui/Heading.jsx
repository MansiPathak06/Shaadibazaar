import React from 'react'

const Heading = (props) => {
    return (
        <div className="text-center mb-16">
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">{props.tagline}</p>
            <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight capitalize">
                {props.title}
            </h2>
        </div>
    )
}

export default Heading;