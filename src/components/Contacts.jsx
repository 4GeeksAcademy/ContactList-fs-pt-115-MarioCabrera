export const Contacts = (props) => {
    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="card col-lg-12 col-md-8 mb-3 mx-auto my-2">
                    <div className="row py-3 d-flex justify-content-between">
                        <div className="col-lg-3 d-flex justify-content-center">
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flotr%2Fimages%2F7%2F75%2FMV5BMTc2NjQ1MDExOV5BMl5BanBnXkFtZTgwNTYzNDM2MzE%2540._V1_SX1784_SY876_.jpg%2Frevision%2Flatest%3Fcb%3D20150413145849%26path-prefix%3Dde&f=1&nofb=1&ipt=67b9590724e1a51f5123f974d785907bc93b147cef82d5c195dc01ef7b262f46"
                                className="rounded-circle"
                                style={{ width: "200px", height: "200px" }}
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6 ms-4">
                            <p className="fs-4">{props.name}</p>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-location-dot px-1"></i> Middle Earth N/N</p>
                            </span>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-phone-flip pe-2"></i>+7 6845212145</p>
                            </span>
                            <span>
                                <p className="fs-6 text-secondary m-0"><i className="fa-solid fa-envelope  pe-2"></i>gandalfthegray@istari.com</p>
                            </span>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center">
                            <button className="btn btn-white border-0 mx-2" style={{ height: "20%" }}><i className="fa-solid fa-pencil fs-5"></i></button>
                            <button className="btn btn-white border-0 mx-2" style={{ height: "20%" }}><i className="fa-solid fa-trash fs-5"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}