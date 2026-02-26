const animationKeyframes = {
  spin: '@keyframes spin { from {transform:rotate(0deg);} to {transform:rotate(360deg);} }',
  shiver: '@keyframes shiver { 0% { transform: rotate(3deg); } 100% { transform: rotate(-3deg); }}',
  draw: '@keyframes draw { to { stroke-dashoffset: 0; } }',
  swayLeft:
    '@keyframes sway-left { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-8deg); }}',
  swayRight:
    '@keyframes sway-right { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(8deg); }}',
  swingLeft:
    '@keyframes swing-left { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-12px); }}',
  opacityBounce: `@keyframes opacity-bounce { 
      0% {opacity: 0;transform: translateY(100%); } 
      60% { transform: translateY(-20%); } 
      100% { opacity: 1; transform: translateY(0); }
    }`
};

export default animationKeyframes;
