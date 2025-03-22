import { repositoryPodcast } from "../data/podcasts-data"
import { PodcastResponseModel } from "../models/response-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async(podcastName:string | undefined):Promise<PodcastResponseModel> =>{
    let responseFormat:PodcastResponseModel = {
        statusCode: 0,
        body: []
    }
    
    const queryString = podcastName?.split("?podcast=")[1] || ""
    const data = await repositoryPodcast(queryString)

    responseFormat.statusCode=data.length!=0?StatusCode.OK:StatusCode.NoContent

    responseFormat.body=data

    return responseFormat
}