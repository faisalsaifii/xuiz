import React from 'react'

export default function Button({
	onClick,
	children,
}: {
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	children: React.ReactNode
}) {
	return (
		<button
			style={{
				color: '#fff',
				backgroundColor: '#000',
				padding: '.6em',
				borderRadius: '.5em',
			}}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
