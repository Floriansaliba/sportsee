/**
 * This function fetch user activity data from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 */

export async function fetchActivityData(userId, setStatistics) {
    try{
      const response = await fetch (`http://localhost:3000/user/${userId}/activity`)
      const results = await response.json()
      setStatistics(results.data.sessions)
    }
    catch(err){
      console.log(err)
    }
    finally{
      console.log("Fetch completed")
    }
  }

/**
 * This function fetch user performance data from API
 * @param {Number} userId user number
 * @param {Function} setStatistics ustates method that will save data received from the API
 */

 export async function fetchPerformanceData(userId, setStatistics) {
    try{
      const response = await fetch (`http://localhost:3000/user/${userId}/performance`)
      const results = await response.json()
      setStatistics(results.data)
      console.log(results.data)
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
