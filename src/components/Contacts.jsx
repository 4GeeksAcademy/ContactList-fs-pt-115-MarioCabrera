import { Link } from "react-router-dom"

export const Contacts = (props) => {
    localStorage.setItem("image",`https://randomuser.me/api/portraits/${(Math.floor(Math.random() * 2) == 0 ? "men" : "women")}/${Math.floor(Math.random() * 100)}.jpg`)
    const profile = localStorage.getItem("image")
    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="card col-lg-12 col-md-8 mb-3 mx-auto my-2">
                    <div className="row py-3 d-flex justify-content-between">
                        <div className="col-lg-3 d-flex justify-content-center">
                            <img
                                src={profile}
                                className="rounded-circle"
                                style={{ width: "200px", height: "200px" }}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 ms-4">
                            <p className="fs-4">{props.name}</p>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-location-dot px-1"></i> {props.address}</p>
                            </span>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-phone-flip pe-2"></i>{props.phone}</p>
                            </span>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-envelope  pe-2"></i>{props.email}</p>
                            </span>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center">
                            <Link to={`/edit/${props.id}`}>
                                <button className="btn btn-white border-0 mx-2" onClick={props.edit} style={{ height: "20%" }}><i className="fa-solid fa-pencil fs-5"></i></button>
                            </Link>
                            <button className="btn btn-white border-0 mx-2" onClick={props.delete} style={{ height: "20%" }}><i className="fa-solid fa-trash fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}