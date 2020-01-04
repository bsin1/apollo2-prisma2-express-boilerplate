import { Photon } from "@prisma/photon"
import { getUserId } from "../modules/auth"

const photon = new Photon()

export interface Context {
  photon: Photon
  userId: string | null
}

export function createContext(req: any): Context {
  const userId = getUserId(req)
  return {
    photon,
    userId
  }
}
