import React, { Component } from 'react';

class Alaram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increament_count: 25,
      startTimer: false,
      timerMin: 25,
      tiemrSectwo: 0, // keep seconds 0-59 only
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.hanleTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // --- Controls (same logic style you prefer) ---
  handleIncreament = () => {
    const { increament_count } = this.state;
    const next = increament_count + 1;
    this.setState({ increament_count: next, timerMin: next, tiemrSectwo: 0 });
  };

  handleDecremnet = () => {
    const { increament_count } = this.state;
    if (increament_count <= 0) return 0;
    const next = increament_count - 1;
    this.setState({ increament_count: next, timerMin: next, tiemrSectwo: 0 });
  };

  handleRestBtn = () => {
    this.setState({ increament_count: 25, timerMin: 25, tiemrSectwo: 0, startTimer: false });
  };

  handleStar = () => {
    this.setState((prev) => ({ startTimer: !prev.startTimer }));
  };

  // --- Timer tick (fixed math; no returns inside setState) ---
  hanleTimer() {
    const { timerMin, startTimer, tiemrSectwo } = this.state;
    if (!startTimer) return;

    if (timerMin === 0 && tiemrSectwo === 0) return;

    if (tiemrSectwo === 0) {
      if (timerMin > 0) {
        this.setState({ timerMin: timerMin - 1, tiemrSectwo: 59 });
      }
    } else {
      this.setState({ tiemrSectwo: tiemrSectwo - 1 });
    }
  }

  // --- Helpers for UI ---
  pad = (n) => String(n).padStart(2, '0');

  render() {
    const { increament_count, timerMin, tiemrSectwo, startTimer } = this.state;

    // progress ring math
    const totalPlannedSecs = Math.max(1, increament_count * 60); // avoid /0
    const remainingSecs = timerMin * 60 + tiemrSectwo;
    const progress = 1 - remainingSecs / totalPlannedSecs; // 0..1

    const size = 220;
    const stroke = 10;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = Math.min(circumference, Math.max(0, progress * circumference));

    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b1220] flex items-center justify-center p-4">
        {/* Animated gradient blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-3xl animate-float-slow" />

        {/* Card */}
        <div className="relative w-full max-w-xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Focus Timer
                </h1>
                <p className="text-sm text-white/60 mt-1">
                  Minimal, responsive, and a little fancy 🤏
                </p>
              </div>

              {/* Start / Pause */}
              <button
                onClick={this.handleStar}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
                ${startTimer
                  ? 'bg-red-500/90 hover:bg-red-500 text-white'
                  : 'bg-emerald-500/90 hover:bg-emerald-500 text-white'}
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-white animate-ping-once group-hover:animate-ping" />
                {startTimer ? 'Pause' : 'Start'}
              </button>
            </div>

            {/* Timer + Ring */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-8">
                {/* Progress Ring */}
                <div className="relative">
                  <svg width={size} height={size} className="rotate-[-90deg]">
                    {/* track */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth={stroke}
                      fill="none"
                    />
                    {/* progress */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      stroke="url(#grad)"
                      strokeWidth={stroke}
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circumference - dash}`}
                      className="transition-all duration-500 ease-out"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="50%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Time inside the ring */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl sm:text-6xl font-bold tabular-nums tracking-tight text-white drop-shadow">
                      {this.pad(timerMin)}:{this.pad(tiemrSectwo)}
                    </div>
                    <div className="mt-2 text-white/60 text-sm">
                      {startTimer ? 'Running' : 'Paused'}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      disabled={startTimer}
                      onClick={this.handleDecremnet}
                      className="rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-white text-lg font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition active:scale-[0.98]"
                    >
                      –1m
                    </button>
                    <div className="rounded-2xl border border-white/10 bg-white/5 py-4 text-center">
                      <div className="text-xs uppercase tracking-widest text-white/60">Minutes</div>
                      <div className="text-2xl font-semibold text-white mt-1 tabular-nums">
                        {increament_count}
                      </div>
                    </div>
                    <button
                      disabled={startTimer}
                      onClick={this.handleIncreament}
                      className="rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-white text-lg font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition active:scale-[0.98]"
                    >
                      +1m
                    </button>
                  </div>

                  <div className="mt-3">
                    <button
                      onClick={this.handleRestBtn}
                      className="w-full rounded-2xl bg-gradient-to-r from-indigo-500/80 via-violet-500/80 to-emerald-500/80 hover:from-indigo-500 hover:via-violet-500 hover:to-emerald-500 py-3 text-white font-medium shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] transition"
                    >
                      Reset to 25:00
                    </button>
                  </div>

                  {/* tiny info strip */}
                  <div className="mt-3 text-xs text-white/50">
                    Remaining: <span className="tabular-nums text-white/80">{remainingSecs}</span> sec •
                    Target: <span className="tabular-nums text-white/80">{increament_count * 60}</span> sec
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom glow */}
          <div className="mx-auto h-6 w-52 md:w-72 bg-gradient-to-r from-indigo-500/40 via-transparent to-emerald-400/40 blur-2xl rounded-full mt-4" />
        </div>

        {/* local styles for animations */}
        <style>{`
          .animate-pulse-slow {
            animation: pulse-slow 5s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.08); opacity: 1; }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          @keyframes float-slow {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-16px) translateX(8px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          .animate-ping-once {
            animation: ping-once 1.2s cubic-bezier(0, 0, 0.2, 1) 1;
          }
          @keyframes ping-once {
            0% { transform: scale(0.9); opacity: 0.9; }
            80% { transform: scale(1.5); opacity: 0; }
            100% { transform: scale(1.6); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }
}

export default Alaram;
