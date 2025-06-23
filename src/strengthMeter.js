
const StrengthRating = ({passwordOutput}) => {


    let strength = ''

    const weakRegex = /^[a-z]+$/
    const medRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
    const veryStrongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/


    if (passwordOutput.length < 10 && weakRegex) {
        strength = 'WEAK'
    } else if (passwordOutput.length < 12 && medRegex) {
        strength = 'MEDIUM'
    } else if (passwordOutput.length >= 12  && passwordOutput.length < 15 && strongRegex) {
        strength = 'STRONG'
    } else if (passwordOutput.length == 15 && veryStrongRegex) {
        strength = 'VERY STRONG'
    }


    return (
         <div className="strength">
                <p>STRENGTH</p>
                <div className="rating">
                    <p>{strength}</p>
                    <span className={strength === "WEAK" || strength === "MEDIUM" || strength === "STRONG" || strength === "VERY STRONG" ? "strengthActive" : ""}> </span>
                    <span className={strength === "MEDIUM" || strength === "STRONG" || strength === "VERY STRONG" ? "strengthActive" : ""}> </span>
                    <span className={strength === "STRONG" || strength === "VERY STRONG" ? "strengthActive" : ""}> </span>
                    <span className={strength === "VERY STRONG" ? "strengthActive" : ""}> </span>
                </div>
            </div>
    )
}


export default StrengthRating