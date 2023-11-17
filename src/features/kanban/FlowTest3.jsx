import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "input",
    data: { label: "Process 1" },
    position: { x: 0, y: 80 },
  },
  {
    id: "horizontal-2",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Process 2" },
    position: { x: 250, y: 0 },
  },
  {
    id: "horizontal-3",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Process 3" },
    position: { x: 250, y: 160 },
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "End Process" },
    position: { x: 500, y: 0 },
  },
  {
    id: "horizontal-5",
    sourcePosition: "top",
    targetPosition: "bottom",
    data: { label: "Process 4" },
    position: { x: 500, y: 100 },
  },
  {
    id: "horizontal-6",
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: "Process 6" },
    position: { x: 500, y: 230 },
  },
  {
    id: "horizontal-7",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Process 5" },
    position: { x: 750, y: 50 },
  },
  {
    id: "horizontal-8",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Process 7" },
    position: { x: 750, y: 300 },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-2",
    animated: true,
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-3",
    animated: true,
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-4",
    label: "edge label",
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-5",
    animated: true,
  },
  {
    id: "horizontal-e3-6",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-7",
    animated: true,
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-8",
    animated: true,
  },
];

const FlowTest3 = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

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
          <div className="relative flex items-center justify-center mb-4 rounded bg-zinc-900 overflow-x-auto">
            <div style={{ width: "100vw", height: "80vh" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                // fitView
                attributionPosition="bottom-left"
              ></ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowTest3;
