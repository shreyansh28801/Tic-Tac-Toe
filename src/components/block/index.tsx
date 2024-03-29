import React from "react";

interface BlockProps {
    value ? : string | null;
    onclick?: () => void
}
const Block : React.FC<BlockProps> = (props)=>{
    return (
        <div onClick={props.onclick} className="block">
            {props.value}
        </div>
    )
}

export default Block;