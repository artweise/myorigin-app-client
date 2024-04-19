import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { BoxFlow } from './style';

const initialNodes = [
  {
    id: 'mother',
    position: { x: 550, y: 550 },
    data: { label: 'Mother' },
  },
  {
    id: 'father',
    position: { x: 800, y: 550 },
    data: { label: 'Father' },
  },
  {
    id: 'child',
    position: { x: 680, y: 700 },
    data: { label: 'You' },
  },
];

const initialEdges = [
  //   { id: 'mother-father', source: 'mother', target: 'father', label: 'to the', type: 'step' },
  { id: 'mother-child', source: 'mother', target: 'child', type: 'step' },
  { id: 'father-child', source: 'father', target: 'child', type: 'step' },
];

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <>
      <BoxFlow>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </BoxFlow>
    </>
  );
};

export default Flow;
