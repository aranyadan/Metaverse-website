import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"
import Messages from "../components/Messages"

const Home: NextPage = () => {
	const { isAuthenticated, logout } = useMoralis()

	if (!isAuthenticated) {
		return <Login />
	} else {
		return (
			<div
				className="h-screen overflow-y-scroll bg-gradient-to-b from-black
			 to-fuchsia-900 overflow-hidden"
			>
				<Head>
					<title>Metaverse</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className="">
					<div className="max-w-screen-2xl mx-auto">
						<Header />

						{/* Messages */}
						<Messages />
					</div>
				</div>
			</div>
		)
	}
}

export default Home
