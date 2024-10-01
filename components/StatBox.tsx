import React from "react"

interface StatBoxProps {
	number: string
	label: string
}

const StatBox: React.FC<StatBoxProps> = ({ number, label }) => {
	return (
		<div className="border border-green-500 rounded-lg p-6 bg-neutral-900 flex flex-col justify-center items-center">
			<h3 className="text-5xl font-bold text-white mb-2">{number}</h3>
			<p className="text-sm uppercase text-gray-300">{label}</p>
		</div>
	)
}

export default StatBox
