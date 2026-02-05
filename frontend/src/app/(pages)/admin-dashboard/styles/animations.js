// src/app/(pages)/admin-dashboard/styles/animations.js
export const dashboardStyles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .stat-card {
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .linear-border {
    position: relative;
    background: white;
    border-radius: 1rem;
  }

  .linear-border::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-linear(135deg, #f04393, #2a0b8b, #3c4cad);
    -webkit-mask: linear-linear(#fff 0 0) content-box,
      linear-linear(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .table-row {
    transition: all 0.2s ease;
  }

  .table-row:hover {
    background: linear-linear(
      90deg,
      rgba(240, 67, 147, 0.05) 0%,
      rgba(42, 11, 139, 0.05) 100%
    );
    transform: scale(1.01);
  }
`;
