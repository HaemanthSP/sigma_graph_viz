import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Sigma, RandomizeNodePositions, RelativeSize, LoadGEXF, ForceAtlas2, Filter,NodeShapes, EdgeShapes} from 'react-sigma';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<Sigma renderer="canvas">
					<EdgeShapes default="tapered"/>
					<NodeShapes default="star"/>
					<LoadGEXF path={"./src/data/arctic.gexf"}>
						<ForceAtlas2 worker barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
						<RelativeSize initialSize={15}/>
					</LoadGEXF>
				</Sigma>
      </header>
    </div>
  );
}

export default App;
