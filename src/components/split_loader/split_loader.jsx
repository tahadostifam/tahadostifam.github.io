import React, { useEffect, useState } from "react";
import "./split_loader.scss";

function SplitLoader(props) {
    const [showElement, setShowElement] = useState(true);
    const [splitLoaderClassList, setSplitLoaderClassList] = useState([]);

    useEffect(() => {
        if (props.show === false) {
            setSplitLoaderClassList(['hide']);

            setTimeout(() => {
                setShowElement(false);
            }, 1000);
        } else setShowElement(true);
    }, [props]);

    return (
        <>
            {showElement === true ?
                <div id="split_loader" className={splitLoaderClassList}>
                    loader
                </div>
                : undefined}
        </>
    );
}

export default SplitLoader;
