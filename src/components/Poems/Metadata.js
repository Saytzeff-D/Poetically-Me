import React, { Fragment } from "react";
import Book from '../../assets/book.png'

const Metadata = (props)=>{
    const { poem } = props
    return (
        <Fragment>
            <div className="container my-2">
                <p className="fs-5 fw-less-bold">
                    Metadata
                </p>
                <hr />
                <div className="d-flex">
                    <table className="table w-100 table-borderless">
                        <tbody>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Poem Title
                                </td>
                                <td className="fw-less-bold">
                                    {poem.title}
                                </td>
                            </tr>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Poet
                                </td>
                                <td className="fw-less-bold">
                                    {poem.poet}
                                </td>
                            </tr>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    ISBN
                                </td>
                                <td className="fw-less-bold">
                                    {poem.ISBN}
                                </td>
                            </tr>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Description
                                </td>
                                <td className="fw-less-bold">
                                    {poem.poem_desc}
                                    {/* <p>
                                        Love and Nature
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur. Vestibulum non dui bibendum nunc. Mattis morbi netus sem interdum ridiculus leo nunc. Integer iaculis amet auctor.
                                    </p>
                                    <p>
                                    Pretium semper vel. At velit tristique lorem ornare integer amet id. Consectetur egestas et nec blandit est. Sit commodo hendrerit in ac est tellus. Vivamus vitae aliquet imperdiet interdum porttitor quisque.
                                    </p>
                                    <p>
                                    Ut duis proin sagittis porta est ornare magnis ultrices sed. Enim blandit quis vitae ut eu est fusce fames ullamcorper. Ridiculus duis justo feugiat et nunc venenatis. Laoreet purus ipsum elementum urna lectus posuere. Elementum euismod quis dolor eget dui at suspendisse. In odio fermentum pretium posuere odio.
                                    </p> */}
                                </td>
                            </tr>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Language
                                </td>
                                <td className="fw-less-bold">
                                    {poem.lang}
                                </td>
                            </tr>
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Publisher
                                </td>
                                <td className="fw-less-bold">
                                    {poem.publisherName} Publications
                                </td>
                            </tr>                            
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Publication date
                                </td>
                                <td className="fw-less-bold">
                                    {new Date(poem.publicationDate).toDateString()}
                                </td>
                            </tr>                            
                            <tr>
                                <td className="fs-5 fw-less-bold">
                                    Category
                                </td>
                                <td className="fw-less-bold">
                                    {poem.category} Poem
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default Metadata