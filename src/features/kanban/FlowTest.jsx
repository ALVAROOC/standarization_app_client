import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

import { createNodesAndEdges } from "./utils.js";

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(
  20,
  20
);

const FlowTest = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const updatePos = useCallback(() => {
    setNodes((nds) => {
      return nds.map((node) => {
        return {
          ...node,
          position: {
            x: Math.random() * 1500,
            y: Math.random() * 1500,
          },
        };
      });
    });
  }, []);

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
            <div style={{ width: "100vw", height: "100vh" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                minZoom={0}
                className="bg-zinc-900"
              >
                <MiniMap />
                <Controls />
                <Background />

                <button
                  onClick={updatePos}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 30,
                    zIndex: 4,
                  }}
                >
                  change pos
                </button>
              </ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowTest;
