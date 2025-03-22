import { repositoryPodcast } from "../data/podcasts-data"
import { PodcastResponseModel } from "../models/response-model"
import { StatusCode } from "../utils/status-code"
export const serviceListEpisodes = async():Promise<PodcastResponseModel> =>{
    let responseFormat:PodcastResponseModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast()

    responseFormat.statusCode=data.length!=0?StatusCode.OK:StatusCode.NoContent
    
    responseFormat.body=data
    
    return responseFormat
}