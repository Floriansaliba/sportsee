import "./Welcome.css"
import { useParams } from "react-router-dom";

const Welcome = ()=>{

    const {userId} = useParams()

    const userInfo = USER_MAIN_DATA.filter((user)=>{
        if(user.id == userId){
            return user
        }
        return false
    })
    
    const firstName = userInfo[0].userInfos.firstName

    return(
        <div className="welcome">
            <h1 className="welcome_title">Bonjour <span className="first-name">{firstName}</span></h1>
            <p className="welcome_sentence">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Welcome 