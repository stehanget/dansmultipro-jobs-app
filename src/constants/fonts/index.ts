/** @format */

import { Poppins } from "next/font/google"

const PoppinsFont = Poppins({
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

const Fonts = {
	className: [PoppinsFont.variable].join(" "),
}

export default Fonts
