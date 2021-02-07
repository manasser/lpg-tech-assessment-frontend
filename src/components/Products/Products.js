import React from "react";

import useFetch from ".././Fetcher/useFetch";
import DisplayTable from ".././Display/DisplayTable"

export default function Products(props) {
    const [data, loading, error] = useFetch("http://localhost:8080/products");

    const displayTable = data.map(item => <DisplayTable key={item.id} item={item} />)

    return (
        <div>
            {loading ?
                [
                       <div>
                            <div className="spinner">
                                <h1>Table Loading...</h1>
                                <div className="loader"></div>
                            </div>
                        </div>
                ]
                :
                [

                    (!error ?
                        [
                            <div className = "productsContainer">
                                <DisplayTable products={data} />
                            </div>
                        ]

                        :

                        [
                            <div className = "productsContainer">
                               <h1>Sorry! Something went wrong. Please refresh the page to restart.</h1>
                               <h1>If the issue persists, please try again later</h1>
                            </div>
                        ]
                    )

                ]
            }

        </div>
    )
}