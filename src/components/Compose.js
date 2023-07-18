import React, { Fragment, useState } from "react";
import RichTextEditor from "react-rte";

const Compose = ()=>{
    const [poem, setPoem] = useState(RichTextEditor.createEmptyValue())
    const onInputChange = (value)=>{
        setPoem(value)
        console.log(value.toString('html'))
    }
    return (
        <Fragment>
            <form className="bg-poem col-md-7 p-5 shadow">
                <p className="fs-4 fw-light">Write a <span className="text-poem">poem</span></p>
                <div className="form-group my-1">
                    <label>Title</label>
                    <input className="form-control rounded-0" />
                </div>
                <div className="form-group my-1">
                    <label>Your Poem</label>
                    <RichTextEditor 
                        value={poem}
                        onChange={onInputChange}
                    />
                </div>
                <button className="btn btn-light shadow fw-normal">
                    Submit Poem
                </button>
            </form>
        </Fragment>
    )
}

export default Compose