import { useEffect, useRef } from 'react';

function BackgroundCanvas2() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        function draw() {
            // Gradient background
            let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#000000');  // black
            gradient.addColorStop(1, '#000044');  // deep blue
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Drawing stars
            ctx.fillStyle = 'white';
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 2;  // Size range from 0 to 2
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Drawing lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';  // Semi-transparent white
            ctx.lineWidth = 0.5;
            for (let y = 0; y < canvas.height; y += 50) {  // More frequent lines
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }

        draw();

        return () => window.removeEventListener('resize', setCanvasSize);
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
}

export default BackgroundCanvas2;
