import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="titleArea">
				<div className="titleLightArea">Overview about NHCT</div>
			</div>

			<div className="lightArea">
				<div className="title">What is NHCTDrawing?</div>
				NHCTDrawing is a simple digital painting app allows you to:
				<ul>
					<li>
						Zoom in and zoom out your painting for perfect stroke
					</li>
					<li>Shape drawing support: Rectangle, Ellipse, ...</li>
					<li>Drawing baic line, straight line, dotted line,...</li>
					<li>Adjust color and save your favorite color</li>
					<li>Undo and redo when drawing</li>
					<li>Create layers and add masks</li>
					<li>Adjust pencil, eraser width</li>
				</ul>
				<div className="title2">Let's take a look!</div>
			</div>
			<div className="darkArea">
				<div className="title">Tool bar</div>
				<div className="row">
					<div
						className="column"
						style={{
							textAlign: "right",
							paddingRight: "25px",
							marginTop: "auto",
							marginBottom: "auto",
						}}
					>
						<p>Simple tool bar with a visual design</p>
						<p>Menu for you to choose your pen type</p>
						<p>Shpae drawing support menu</p>
						<p>Color picker and it allow you to save your colors</p>
						<p>Pen thickess adjust area</p>
						<p>Eraser size adjust area</p>
						<p>Slider to zoom in and out</p>
					</div>
					<div
						className="column"
						style={{ textAlign: "left", paddingLeft: "25px" }}
					>
						<img
							style={{
								// 444 × 1898
								width: "222px",
								height: "949px",
							}}
							src="ToolBar.png"
						></img>
					</div>
				</div>
			</div>
			<div className="lightArea">
				<div className="title">Layers</div>
				<div className="row">
					<div
						className="column"
						style={{ textAlign: "right", paddingRight: "25px" }}
					>
						<img
							style={{
								// 502 × 752
								width: "251px",
								height: "376px",
							}}
							src="Layers.png"
						></img>
					</div>
					<div
						className="column"
						style={{
							textAlign: "left",
							paddingLeft: "25px",
							marginTop: "auto",
							marginBottom: "auto",
						}}
					>
						<p>Add, delete and rename layers</p>
						<p>
							Layers list with a main layers that cannot be
							deleted
						</p>
					</div>
				</div>
			</div>
			<div className="darkArea">
				<div className="title">Menu bar</div>
				<img
					style={{
						//2508 × 434
						width: "1254px",
						height: "217px",
					}}
					src="MenuBar.png"
				></img>
				<p>Current layer name is displayed</p>
				<p>Undo, redo buttons</p>
				<p>"Clear your painting" to clear your current layer</p>
				<p>Area to select mask</p>
			</div>
			<div className="lightArea">
				<div className="title">Full user interface overview</div>
				<img
					src="OverallUI.png"
					style={{
						width: "1600px",
						height: "900px",
					}}
				></img>
				<p>I try to make it visual and as simple as possible</p>
			</div>
			<div className="darkArea">
				<div className="title">Things to note</div>
				<ul>
					<li style={{ padding: "10px" }}>
						NHCTDrawing is a little bit heavy. While running, it
						takes up 45mb memory on average. It will be a pretty lag
						when run in low-end device or with a HDD drive{" "}
						<i>(Unfortunately my mac is HDD :{"<"})</i>.
					</li>
					<li style={{ padding: "10px" }}>
						NHCTDrawing is written in swift and only suitable for
						macOS (not iOS) and it is unable to run on Windows,
						Linux or other operating systems.
					</li>
					<li style={{ padding: "10px" }}>
						NHCTDrawing doesn't have save function and when you quit
						app, all your current states are destroyed.{" "}
						<i>(under development)</i>
					</li>
				</ul>
			</div>
			<div className="lightArea">
				<div className="title">Last words</div>
				<p>
					NHCTDrawing is under development and when it's finished, i
					will push it on github and public the link later.
				</p>
				<p>
					If you have any ideas about new functions or about user
					interface then email me at: <b>minhtrietamoled@gmail.com</b>
				</p>
				<p style={{ color: "#e84393" }}>
					Thank you for your time and interest in my application!!!
					{" <333"}
				</p>
			</div>
		</div>
	);
}

export default App;
