document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.querySelector('.particle-container');
    const numParticles = 80; // 粒子数量

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particleContainer.appendChild(particle);

        // 随机设置粒子初始位置、大小、透明度和动画延迟
        const size = Math.random() * 5 + 2; // 2px 到 7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = Math.random() * 0.7 + 0.3; // 0.3 到 1
        particle.style.animationDelay = `${Math.random() * 10}s`; // 动画延迟，错开动画

        // 随机颜色 (粉色系和白色)
        const colors = ['#FFD1DC', '#FFC0CB', '#FFE4E1', '#FFFFFF', '#F0F8FF'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // 动画持续时间
        const duration = Math.random() * 10 + 5; // 5s 到 15s
        particle.style.animationDuration = `${duration}s`;
    }

    // 注入粒子动画的CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: moveParticles linear infinite;
        }

        @keyframes moveParticles {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: var(--initial-opacity, 0.5);
            }
            25% {
                transform: translate(calc(var(--randX1, 50) * 1px), calc(var(--randY1, 50) * 1px)) scale(var(--randScale1, 1.2));
                opacity: var(--randOpacity1, 0.8);
            }
            50% {
                transform: translate(calc(var(--randX2, 100) * 1px), calc(var(--randY2, 100) * 1px)) scale(var(--randScale2, 0.8));
                opacity: var(--randOpacity2, 0.4);
            }
            75% {
                transform: translate(calc(var(--randX3, 150) * 1px), calc(var(--randY3, 150) * 1px)) scale(var(--randScale3, 1.1));
                opacity: var(--randOpacity3, 0.7);
            }
            100% {
                transform: translate(calc(var(--randX4, 200) * 1px), calc(var(--randY4, 200) * 1px)) scale(1);
                opacity: var(--initial-opacity, 0.5);
            }
        }
    `;
    document.head.appendChild(style);

    // 为每个粒子设置随机的动画变量
    document.querySelectorAll('.particle').forEach(particle => {
        particle.style.setProperty('--initial-opacity', Math.random() * 0.7 + 0.3);
        particle.style.setProperty('--randX1', (Math.random() * 400 - 200)); // -200到200
        particle.style.setProperty('--randY1', (Math.random() * 400 - 200));
        particle.style.setProperty('--randScale1', Math.random() * 0.6 + 0.8); // 0.8到1.4
        particle.style.setProperty('--randOpacity1', Math.random() * 0.7 + 0.3);

        particle.style.setProperty('--randX2', (Math.random() * 400 - 200));
        particle.style.setProperty('--randY2', (Math.random() * 400 - 200));
        particle.style.setProperty('--randScale2', Math.random() * 0.6 + 0.8);
        particle.style.setProperty('--randOpacity2', Math.random() * 0.7 + 0.3);

        particle.style.setProperty('--randX3', (Math.random() * 400 - 200));
        particle.style.setProperty('--randY3', (Math.random() * 400 - 200));
        particle.style.setProperty('--randScale3', Math.random() * 0.6 + 0.8);
        particle.style.setProperty('--randOpacity3', Math.random() * 0.7 + 0.3);

        particle.style.setProperty('--randX4', (Math.random() * 400 - 200));
        particle.style.setProperty('--randY4', (Math.random() * 400 - 200));
    });
});