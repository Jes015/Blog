import { CBackRoutes } from "@/models"
import type { APIResponse } from "@/models/api.model"

export const getPosts = async (searchParam: string, defaultFilterBy: string) => {
    const response = await fetch(CBackRoutes.posts(searchParam, defaultFilterBy))
    const data = (await response.json()) as APIResponse

    return data
}