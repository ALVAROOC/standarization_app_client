import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Link } from 'react-router-dom';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 0' },
    position: { x: 250, y: 5 },
    className: 'light',
  },
  {
    id: '2',
    data: { label: 'Group A' },
    position: { x: 100, y: 100 },
    className: 'light',
    style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 },
  },
  {
    id: '2a',
    data: { label: 'Node A.1' },
    position: { x: 10, y: 50 },
    parentNode: '2',
  },
  {
    id: '3',
    data: { label: 'Node 1' },
    position: { x: 320, y: 100 },
    className: 'light',
  },
  {
    id: '4',
    data: { label: 'Group B' },
    position: { x: 320, y: 200 },
    className: 'light',
    style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 300, height: 300 },
    type: 'group',
  },
  {
    id: '4a',
    data: { label: 'Node B.1' },
    position: { x: 15, y: 65 },
    className: 'light',
    parentNode: '4',
    extent: 'parent',
  },
  {
    id: '4b',
    data: { label: 'Group B.A' },
    position: { x: 15, y: 120 },
    className: 'light',
    style: {
      backgroundColor: 'rgba(255, 0, 255, 0.2)',
      height: 150,
      width: 270,
    },
    parentNode: '4',
  },
  {
    id: '4b1',
    data: { label: 'Node B.A.1' },
    position: { x: 20, y: 40 },
    className: 'light',
    parentNode: '4b',
  },
  {
    id: '4b2',
    data: { label: 'Node B.A.2' },
    position: { x: 100, y: 100 },
    className: 'light',
    parentNode: '4b',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2a-4a', source: '2a', target: '4a' },
  { id: 'e3-4b', source: '3', target: '4b' },
  { id: 'e4a-4b1', source: '4a', target: '4b1' },
  { id: 'e4a-4b2', source: '4a', target: '4b2' },
  { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
];
const FlowTest2 = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <>
      {/* BODY CONTENT */}
      <div className="p-4 sm:ml-64 mt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* ROW 1 */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
                <Link to="/dash/kanban" className="text-2xl text-gray-400 dark:text-gray-500">
                F3
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
              <Link to="/dash/kanban/f1" className="text-2xl text-gray-400 dark:text-gray-500">
                F1
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
            <Link to="/dash/kanban/f2" className="text-2xl text-gray-400 dark:text-gray-500">
                F2
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
              <Link
                to="/dash/kanban/f4"
                className="text-2xl text-gray-400 dark:text-gray-500"
              >
                F4
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
            <Link
                to="/dash/kanban/f5"
                className="text-2xl text-gray-400 dark:text-gray-500"
              >
                F5
              </Link>
            </div>
          </div>
          {/* ROW 2 */}
          <div className="relative flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 overflow-x-auto">
          <div  style={{ width: '100vw', height: '80vh' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              className="bg-zinc-900"
              fitView
              
            >
              <MiniMap />
              <Controls />
              <Background />
            </ReactFlow>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};
    

export default FlowTest2
