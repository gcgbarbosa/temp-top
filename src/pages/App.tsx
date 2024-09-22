import { useMemo, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { Edge, EdgeTypes } from '@xyflow/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
import { Handle, Position } from '@xyflow/react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

// import { initialNodes, nodeTypes } from './nodes';
// import { initialEdges, edgeTypes } from '../edges';

import { BasicCard } from '../organisms/TTCard'

const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },

  {
    id: 'node-2',
    type: 'textUpdater',
    position: { x: 800, y: 0 },
    data: { value: 123 },
  },
];

const initialEdges: Edge[] = [
  { id: 'a->c', source: 'node-1', target: 'node-2', animated: true },
]

// import { CustomNode } from './CustomNode';

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );


  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        // edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode='dark'
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </ThemeProvider>
  );
}

const handleStyle = { left: 20 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      {/* <Handle type="target" position={Position.Top} /> */}
      <BasicCard />
      {/* <Handle type="source" position={Position.Bottom} id="a" /> */}
      {/* <Handle */}
      {/*   type="source" */}
      {/*   position={Position.Bottom} */}
      {/*   id="b" */}
      {/*   style={handleStyle} */}
      {/* /> */}
    </>
  );
}
