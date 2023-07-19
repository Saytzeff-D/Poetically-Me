import React, { Fragment } from "react";

const UploadPoem = ()=>{
    return (
        <Fragment>
            <div className="border w-100 rounded">
                <p>
                    <i className="fa fa-file-o"></i> Choose book file
                </p>
            </div>
            <div className="border w-100 rounded">
                <p>
                    <i className="fa fa-file-o"></i> Choose a sample file
                </p>
            </div>
            <div className="border w-100 rounded">
                <p>
                    <i className="fa fa-file-o"></i> Choose a cover image
                </p>
            </div>
        </Fragment>
    )
}

export default UploadPoem