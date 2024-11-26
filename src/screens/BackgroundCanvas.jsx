
import { useEffect, useRef } from 'react';

function BackgroundCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function draw() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Drawing white dots
            ctx.fillStyle = 'white';
            for (let x = 0; x < canvas.width; x += 30) {
                for (let y = 0; y < canvas.height; y += 30) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Drawing white lines
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            for (let y = 0; y < canvas.height; y += 100) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }

        draw();
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        });

        return () => window.removeEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        });
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
}

export default BackgroundCanvas;
