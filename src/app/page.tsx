"use client";

import { useState, useEffect } from "react";

export default function Home() {
	const [diffDays, setDiffDays] = useState<number>(0);
	const [images, setImages] = useState<React.JSX.Element[]>([]);

	// const images = [];
	// for (let i = 0; i < diffDays; i++) {
	// 	images.push(<img src="https://ca.slack-edge.com/EC088DZV2-WKT1YGYGJ-99e6d7e26867-512" style={{ width: "5rem" }} />);
	// }

	useEffect(() => {
		var date1 = new Date();
		var date2 = new Date("1/2/2024");
		var diff = Math.abs(date1.getTime() - date2.getTime());
		var diffdaysinterim = Math.ceil(diff / (1000 * 3600 * 24));
		setDiffDays(diffdaysinterim);
	}, []);

	useEffect(() => {
		let ims = [];
		for (let i = 0; i < diffDays; i++) {
			ims.push(<img src="https://ca.slack-edge.com/EC088DZV2-WKT1YGYGJ-99e6d7e26867-512" style={{ width: "5rem" }} />);
		}
		setImages(ims);
	}, [diffDays]);

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				marginTop: "5vh",
			}}
		>
			<div style={{ fontSize: "15rem" }}>Days Without</div>
			<div
				style={{
					fontSize: "15rem",
					justifyContent: "space-between",
					display: "grid",
					gridTemplateColumns: "auto auto",
					marginRight: "11vw",
				}}
			>
				<div>Neeley</div>
				<div>{diffDays}</div>
			</div>
			<div style={{ maxWidth: "90vw" }}>{images}</div>
		</main>
	);
}
