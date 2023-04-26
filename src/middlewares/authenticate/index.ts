/** @format */

import cryptoUtil from "@/utils/Crypto"
import { type NextRequest } from "next/server"

export function isAuthenticate(req: NextRequest) {
	const decryptCookies = req.cookies.getAll().map(({ name, value }) => ({ name: cryptoUtil.AESdecrypt(decodeURI(name)), value: cryptoUtil.AESdecrypt(decodeURI(value)) }))
	const credential = decryptCookies.find(({ name }) => name === "google_credential")

	return credential
}
