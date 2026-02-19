export function startBeacon(peer) {
  console.log("[Beacon] started");

  setInterval(() => {
    const status = {
      type: "beacon.status",
      peer: peer?.wallet?.publicKey || "unknown",
      capabilities: ["beacon-layer", "status-broadcast"],
      load: Math.random().toFixed(2),
      ts: Date.now()
    };

    console.log("[Beacon] heartbeat:", status);

    if (peer?.sidechannel) {
      try {
        peer.sidechannel.broadcast("0000intercom", status);
      } catch (err) {
        console.error("[Beacon] broadcast failed:", err?.message ?? err);
      }
    }
  }, 15000);
}
