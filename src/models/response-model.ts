import { Podcast } from "./podcast-model"

export interface PodcastResponseModel{
    statusCode: number
    body: Podcast[]
}