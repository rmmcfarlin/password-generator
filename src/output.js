
import copyIcon from "./assets/images/icon-copy.svg"


const OutputSection = ({passwordOutput}) => {

    async function copyToClipboard () {
    try {
        await navigator.clipboard.writeText(passwordOutput);
        console.log("copied successfully")
    } catch {
        console.error('failed to copy text')
    }
}


    return (
        <div className="output">
            <p>{passwordOutput}</p>
            <img src={copyIcon} style={{width:"21px"}} onClick={copyToClipboard}></img>
        </div>
    )
}

export default OutputSection




