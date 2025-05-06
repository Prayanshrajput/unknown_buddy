// client/src/components/ScreenShare.js
import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

// Connect to your backend server (adjust port if needed)
const socket = io('http://localhost:3000');

const ScreenShare = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const peerConnectionRef = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    const constraints = {
      video: {
        mediaSource: 'screen',
      },
    };

    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
    peerConnectionRef.current = peerConnection;

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', event.candidate);
      }
    };

    peerConnection.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    const startScreenShare = async () => {
      try {
        const localStream = await navigator.mediaDevices.getDisplayMedia(constraints);
        localStreamRef.current = localStream;

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = localStream;
        }

        localStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStream);
        });

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit('offer', offer);
      } catch (err) {
        console.error('Error accessing display media.', err);
      }
    };

    socket.on('offer', async (offer) => {
      if (!peerConnectionRef.current) return;
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnectionRef.current.createAnswer();
      await peerConnectionRef.current.setLocalDescription(answer);
      socket.emit('answer', answer);
    });

    socket.on('answer', async (answer) => {
      if (!peerConnectionRef.current) return;
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('candidate', async (candidate) => {
      if (!peerConnectionRef.current) return;
      try {
        await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (e) {
        console.error('Error adding received ice candidate', e);
      }
    });

    startScreenShare();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
      socket.off('offer');
      socket.off('answer');
      socket.off('candidate');
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Screen Sharing Application</h1>
      <div className="flex space-x-4 mb-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Your Screen:</h2>
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-72 h-48 border-2 border-blue-500 rounded"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Remote Screen:</h2>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-72 h-48 border-2 border-blue-500 rounded"
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Stop Sharing
      </button>
    </div>
  );
};

export default ScreenShare;
