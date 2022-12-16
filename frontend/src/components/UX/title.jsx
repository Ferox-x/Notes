import React from 'react'

function Title({title,...props}) {
    return (
        <div>
            <section className="page-title">
                <p {...props} className="page-title__text">{title}</p>
            </section>
        </div>

    )
}

export default Title
