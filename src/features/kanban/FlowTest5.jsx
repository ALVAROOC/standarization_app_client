import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import { Link } from "react-router-dom";
import "reactflow/dist/base.css";

// import "./tailwind-config.js";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: "1",
    type: "custom",
    data: { name: "Jesús Requena", job: "GN", emoji: "😎",text:"Bueno... " },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Eugenio Pérez", job: "Alias Morroco", emoji: "🤓" ,text:"Todo va bien"},

    position: { x: -200, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Roberto Ancillo", job: "Un Click y Matrix", emoji: "🤓",text:"Nada .. esto es fácil" },

    position: { x: 200, y: 200 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "Manueh Borgia", job: "Er Killo", emoji: "👩‍🦲",text:"Una y nos vamos, 2 y nos quedamos" },

    position: { x: -200, y: 400 },
  },
  {
    id: "5",
    type: "custom",
    data: { name: "Fernando Puertas", job: "El delfin", emoji: "🧛‍♀️",text:"La gestión es su pasión" },
    position: { x: 200, y: 400 },
  },
  {
    id: "6",
    type: "custom",
    data: { name: "Álvaro Oliver", job: "Hijo de la pelos", emoji: "👽",text:"Croissant con mermelada" },
    position: { x: 0, y: 600 },
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: 'smoothstep', 
    animated: true
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: 'smoothstep', 
    animated: true
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: 'smoothstep', 
    animated: true
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: 'smoothstep', 
    animated: true
  },
];
const FlowTest5 = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const defaultViewport = { x: 0, y: 0, zoom: 2 };

  return (
    <>
      {/* BODY CONTENT */}
      <div className="p-4 sm:ml-64 mt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* ROW 1 */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
              <Link
                to="/dash/kanban"
                className="text-2xl text-gray-400 dark:text-gray-500"
              >
                F3
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
              <Link
                to="/dash/kanban/f1"
                className="text-2xl text-gray-400 dark:text-gray-500"
              >
                F1
              </Link>
            </div>
            <div className="flex items-center justify-center h-14 rounded bg-gray-50 dark:bg-gray-800">
              <Link
                to="/dash/kanban/f2"
                className="text-2xl text-gray-400 dark:text-gray-500"
              >
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
            <div style={{ width: "100vw", height: "80vh" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                defaultViewport={defaultViewport}
                className="bg-zinc-900"
              >
                <MiniMap />
                <Controls />
              </ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowTest5;
