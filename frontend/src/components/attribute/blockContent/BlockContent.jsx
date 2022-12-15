import React from 'react'
import './BlockContent.css'

function BlockContent ({block, ...props}) {
    return(
        <section className="empty-content-block">
            <div className="content-block-title">
                <p className="content-block-title__text">{block.title}</p>
            </div>
            <div className="content-block-area">
                <p className="content-block-area__text">{block.area_text}</p>
            </div>
        </section>
    )
}

export default BlockContent
