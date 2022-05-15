import USER_ACTIVITY from "../mock/user_activity"
import USER_AVERAGE_SESSIONS from "../mock/user_average_sessions"
import USER_MAIN_DATA from "../mock/user_main_data"
import USER_PERFORMANCE from "../mock/user_performance"




/**
 * This function fetch user activity / performance or session duration from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 * @param {string} resource  end of pathname depending on the required endpoint
 */


  export async function fetchData(userId, setStatistics, resource) {
    if(process.env.REACT_APP_MOCK_DATA){
      // Call mock data if variable REACT_APP_MOCK_DATA is true
      if(resource === "activity"){
        const userActivity = USER_ACTIVITY.filter((user)=>{
        if(user.userId == userId){
            return user.sessions
        }
        return false
        })
      setStatistics(userActivity)
      }
      else if(resource === "performance"){
        const userPerformance = USER_PERFORMANCE.filter((user)=>{
          if(user.userId == userId){
              return user
          }
          return false
          })
          setStatistics(userPerformance)
      }
      else if(resource === "average-sessions"){
        const userPerformance = USER_AVERAGE_SESSIONS.filter((user)=>{
          if(user.userId == userId){
              return user.sessions
          }
          return false
          })
          setStatistics(userPerformance)
      }
    }
    // Fetch API if REACT_APP_MOCK_DATA is false
    try{
      const response = await fetch (`http://localhost:3000/user/${userId}/${resource}`)
      const results = await response.json()
      if(resource === "activity"){
        setStatistics(results.data.sessions)
      }
      else if(resource === "performance"){
        console.log(results.data.data)
        setStatistics(results.data.data)
      } 
      else if(resource === "average-sessions"){
        setStatistics(results.data.sessions)
      }
    }
    catch(err){
      console.log(err)
    }
    finally{
      console.log("Fetch completed")
    }
  }



  /**
 * This function fetch user today score data from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 */

  

  export async function fetchScoreData(userId, setStatistics) {
      // Call mock data if variable REACT_APP_MOCK_DATA is true
    if(process.env.REACT_APP_MOCK_DATA){
      const todayScore = USER_MAIN_DATA.filter((user)=>{
        if(user.id == userId){
            return user.todayScore
        }
        return false
    })
    setStatistics(todayScore)
    }
      try{
          console.log(process.env.REACT_APP_MOCK_DATA)
          const response = await fetch (`http://localhost:3000/user/${userId}`)
          const results = await response.json()
          results.data.score ? setStatistics(results.data.score) : setStatistics(results.data.todayScore)
        }
        catch(err){
          console.log(err)
        }
        finally{
          console.log("Fetch completed")
        }

  
  }

  /**
 * This function fetch user today consumption data (calories, protein, carbs, fat) from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 */

  export async function fetchConsumptionData(userId, setStatistics) {
    // Call mock data if variable REACT_APP_MOCK_DATA is true
    if(process.env.REACT_APP_MOCK_DATA === true){
      const todayScore = USER_MAIN_DATA.filter((user)=>{
        if(user.id == userId){
            return user.keyData
        }
        return false
    })
    setStatistics(todayScore)
    }
    try{
      const response = await fetch (`http://localhost:3000/user/${userId}`)
      const results = await response.json()
      setStatistics(results.data.keyData)
      console.log(results.data.keyData)
    }
    catch(err){
      console.log(err)
    }
    finally{
      console.log("fetch completed")
    }
  }


