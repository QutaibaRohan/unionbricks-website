import React from "react"

interface Props {
	title: string
	description?: string
	backgroundColor?: string
	textColor?: string
	children: React.ReactNode
}

const Scaffold: React.FC<Props> = ({ title, description, children, backgroundColor, textColor }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<div className="container mx-auto py-24 px-8 flex flex-col items-center">
					<h1 className="text-3xl font-bold mb-4">{title}</h1>
					<p className="text-gray-600 mb-16">{description}</p>
					{children}
				</div>
			</main>
		</div>
	)
}

export default Scaffold
