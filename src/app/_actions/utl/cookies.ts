import { cookies } from "next/headers"

export default function setCookie(userId: string) {
const expiration = 1000 * 60 
cookies().set("sessionID", userId, {expires: Date.now() + expiration})

}
