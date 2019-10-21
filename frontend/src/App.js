import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Sigma, RandomizeNodePositions, RelativeSize, LoadGEXF, ForceAtlas2, Filter,NodeShapes, EdgeShapes} from 'react-sigma';

let myGraph = {nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]};
function App() {
  return (
    <div className="App">
				<Sigma renderer="svg">
					<EdgeShapes default="tapered"/>
					<NodeShapes default="star"/>
					<LoadGEXF path={"data/arctic.gexf"}>
						<ForceAtlas2 worker barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
						<RelativeSize initialSize={15}/>
					</LoadGEXF>
    <Sigma graph={myGraph} settings={{drawEdges: true, clone: false}}>
      <RelativeSize initialSize={15}/>
      <RandomizeNodePositions/>
    </Sigma>
				</Sigma>
    </div>
  );
}

export default App;
