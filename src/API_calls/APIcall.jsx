/**
 * This function fetch user activity or performance data from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 * @param {string} resource  end of pathname depending on the required endpoint
 */


  export async function fetchData(userId, setStatistics, resource) {
    try{
      const response = await fetch (`http://localhost:3000/user/${userId}/${resource}`)
      const results = await response.json()
      if(resource === "activity"){
        setStatistics(results.data.sessions)
      }
      else if(resource === "performance"){
        setStatistics(results.data)
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
    try{
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
