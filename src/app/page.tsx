export default function Home() {
	var date1 = new Date();
	var date2 = new Date("1/2/2024");
	var diff = Math.abs(date1.getTime() - date2.getTime());
	var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				// justifyContent: "center",
				// alignItems: "center",
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
		</main>
	);
}
