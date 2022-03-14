import { useRef, useState, useEffect } from "react";
var io = require('socket.io-client')

export function useSocket(url) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)
    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup
  }, [url])

  return socket
}
