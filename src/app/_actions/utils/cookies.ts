import { cookies } from "next/headers"

export default function setCookie(userId: string) {
const expiration = 1000 * 60 
cookies().set("userID", userId, {expires: Date.now() + expiration})

}
