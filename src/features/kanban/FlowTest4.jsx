import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
} from "reactflow";
import dagre from "dagre";
import { Link } from "react-router-dom";

import { initialNodes, initialEdges } from "./nodes-edges.js";

import "reactflow/dist/style.css";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const FlowTest4 = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

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
                connectionLineType={ConnectionLineType.SmoothStep}
                fitView
                className="bg-zinc-900"
              >
                <Panel position="top-right">
                  <button onClick={() => onLayout("TB")}>
                    vertical layout
                  </button>
                  <button onClick={() => onLayout("LR")}>
                    horizontal layout
                  </button>
                </Panel>
              </ReactFlow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowTest4;
