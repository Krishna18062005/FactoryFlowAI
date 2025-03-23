"use client"; // Ensures client-side rendering for animations

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Layout/Sidebar";

type User = {
  id: string;
  name: string;
  role: "admin" | "manager" | "operator";
};

const mockUser: User = {
  id: "1",
  name: "John Doe",
  role: "admin",
};

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const hoverScale = { scale: 1.03 };

export default function WebotSimulationPage() {
  const [simulationStatus, setSimulationStatus] = useState("stopped");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to start simulation (play video)
  const startSimulation = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setSimulationStatus("running");
    }
  };

  // Function to stop simulation (pause video)
  const stopSimulation = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setSimulationStatus("stopped");
    }
  };

  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex items-center justify-center h-screen bg-gray-50">
        <motion.div
          className="max-w-5xl w-full bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {/* Page Title */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-blue-800 text-center"
            variants={fadeUpVariant}
            whileHover={hoverScale}
          >
            Live Webots Simulation
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-700 text-sm sm:text-lg text-center max-w-3xl"
            variants={fadeUpVariant}
          >
            This page demonstrates the integration of Webots simulation into our
            manufacturing automation system. Monitor the live simulation below and use the
            control panel to start or stop playback.
          </motion.p>

          {/* Video & Controls in a Single View */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
            {/* Embedded Webots Simulation Video */}
            <motion.div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md"
              variants={fadeUpVariant}
            >
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg"
                muted
                loop
              >
                <source src="/WeSI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Control Panel */}
            <motion.div
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg space-y-3"
              variants={fadeUpVariant}
            >
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 w-full"
                onClick={startSimulation}
                disabled={simulationStatus === "running"}
              >
                Start Simulation
              </button>
              <button
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50 w-full"
                onClick={stopSimulation}
                disabled={simulationStatus === "stopped"}
              >
                Stop Simulation
              </button>
              <div className="text-gray-800 font-semibold text-lg">
                Status:{" "}
                <span
                  className={`font-bold ${
                    simulationStatus === "running"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {simulationStatus}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
