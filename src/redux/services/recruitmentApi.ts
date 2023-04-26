/** @format */
import { service } from "@/redux/service"

export type RecruitmentProps = {
	params: {
		page: number
		description?: string
		location?: string
		full_time?: boolean
	}
}

type RecruitmentByIdProps = {
	params: {
		id: string
	}
}

export const recruitmentApi = service.injectEndpoints({
	endpoints: (builder) => ({
		getRecruitment: builder.query<any, RecruitmentProps>({
			query: (args) => ({
				url: "/api/recruitment/positions.json",
				method: "GET",
				params: args.params,
			}),
			providesTags: [{ type: "Recruitment", id: "LIST" }],
		}),
		getRecruitmentById: builder.query<any, RecruitmentByIdProps>({
			query: (args) => ({
				url: "/api/recruitment/positions/" + args.params.id,
				method: "GET",
			}),
			providesTags: (_, __, args) => [{ type: "Recruitment", id: args.params.id }],
		}),
	}),
})

export const { useGetRecruitmentQuery, useGetRecruitmentByIdQuery } = recruitmentApi
