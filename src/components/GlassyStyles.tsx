

const GlassStyles = () => (
  <style>
    {`
      .glass-card {
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: 1px solid rgba(255, 255, 255, 0.25);
      }

      .glass-input {
        width: 100%;
        padding: 15px 18px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(22px);
        border: 1px solid rgba(255, 255, 255, 0.25);
        font-size: 14px;
        color: #111827;
        transition: all 0.3s ease;
      }

      .glass-input::placeholder {
        color: rgba(17, 24, 39, 0.55);
      }

      .glass-input:focus {
        outline: none;
        border-color: rgba(245, 158, 11, 0.9);
        box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);
        background: rgba(255, 255, 255, 0.2);
      }

      .glass-select {
        appearance: none;
        background-image:
          linear-gradient(45deg, transparent 50%, #92400e 50%),
          linear-gradient(135deg, #92400e 50%, transparent 50%);
        background-position:
          calc(100% - 24px) calc(50% - 4px),
          calc(100% - 18px) calc(50% - 4px);
        background-size: 6px 6px;
        background-repeat: no-repeat;
        border: 1px solid rgba(245, 158, 11, 0.7);
      }
    `}
  </style>
);

export default GlassStyles;
