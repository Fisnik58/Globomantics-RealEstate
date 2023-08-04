import styles from "./banner.module.css";
import React from "react";

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-12 col-sm-5" style={{ marginTop: "20px" }}>
                <img src="./vercel.svg" alt="Logo" className={`${styles.logo} img-fluid`} width={350} />
            </div>
            <div className="col-12 col-sm-7 mt-5" style={{ fontFamily: "cursive", fontSize: "30px", color: "coral" }}>
                Providing Houses All Over the World
            </div>
        </header>
    );
};

export default Banner;
