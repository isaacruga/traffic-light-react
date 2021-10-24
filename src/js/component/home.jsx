import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedlight, setSelectedLight] = useState("green");

	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedLight("red")}
				className={
					"light red" + (selectedlight === "red" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedLight("yellow")}
				className={
					"light yellow" + (selectedlight === "yellow" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedLight("green")}
				className={
					"light green" + (selectedlight === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;

// pq tengo que poner light red entre {} y " glow" con espacio???
