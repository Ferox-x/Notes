import React from 'react'
import './block_content_filled.css'


function BlockContentFilled (props){
    return(
        <div className="content-block-area-filled">
            <div className="content-container">
                <div className="content-info">
                    <div className="content-top__title">{props.info.title}</div>
                    <div
                        className="content-top__status content-top__status_in-progress">
                        {props.info.status}
                    </div>
                    <div className="content-top__icon-group">{props.info.img}</div>
                </div>
                <div className="content-date">
                    <div className="content-date__text">{props.info.date}</div>
                    <div
                        className="content-date__text content-date__text-green">{props.info.date_num}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlockContentFilled
