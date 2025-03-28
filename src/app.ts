import * as http from "http"
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcast-controller"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"

export const app = async (req:http.IncomingMessage, res:http.ServerResponse)=>{
    
    const baseUrl = req.url?.split('?')[0] || ""
    
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res)
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res)
    }
}