import { verify } from "jsonwebtoken"

export interface Token {
  userId: string
}

export function getUserId(req: any): string | null {
  const bearerToken = req.headers.authorization
  if (bearerToken) {
    const token = bearerToken.replace("Bearer ", "")
    const verifiedToken = verify(
      token,
      process.env.APP_SECRET as string
    ) as Token
    return verifiedToken && verifiedToken.userId
  }
  return null
}
