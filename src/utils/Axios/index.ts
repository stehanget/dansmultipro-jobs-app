/** @format */

import axios from "axios"
import buildFormData from "@/utils/FormData"

type Props = {
	url: string
	method: "GET" | "POST" | "DELETE"
	data?: any
	params?: any
	headers?: any
}

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl?: string } = { baseUrl: undefined }) =>
	async ({ url, method, data, params, headers }: Props) => {
		try {
			const res = await axios({
				url: baseUrl ? baseUrl + url : url,
				method,
				data: data && buildFormData(data),
				params,
				headers: {
					...headers,
				},
			})

			return { data: res.data }
		} catch (err: any) {
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
