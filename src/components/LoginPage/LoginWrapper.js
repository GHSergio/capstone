import SpotifyAuthButton from "../SpotifyAuthButton";
const LoginWrapper = () => {
  return (
    <>
      <div className="login-wrapper">
        <div className="logo-container">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2947 1.51316C11.789 0.606728 13.0246 0.606727 13.5188 1.51316L24.6396 21.9079C25.1338 22.8143 24.516 23.9474 23.5275 23.9474H1.28603C0.297517 23.9474 -0.320301 22.8143 0.173954 21.9079L11.2947 1.51316Z"
              fill="#30A9DE"
            />
          </svg>

          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.114532 2.5C0.114532 1.57953 0.819269 0.833336 1.68861 0.833336H20.3704C21.2397 0.833336 21.9445 1.57953 21.9445 2.5V22.2807C21.9445 23.2012 21.2397 23.9474 20.3704 23.9474H1.68861C0.81927 23.9474 0.114532 23.2012 0.114532 22.2807V2.5Z"
              fill="#FF7F50"
            />
          </svg>

          <svg
            width="194"
            height="25"
            viewBox="0 0 194 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.231476 24.1667L10.1481 0.833333H14.1778L24.1259 24.1667H19.8444L11.313 3.13333H12.95L4.44999 24.1667H0.231476ZM4.79629 18.7667L5.89814 15.3667H17.7981L18.9 18.7667H4.79629Z"
              fill="#111111"
            />
            <path
              d="M26.9285 24.1667V0.833333H31.0211V20.5H42.5433V24.1667H26.9285Z"
              fill="#111111"
            />
            <path
              d="M45.7744 24.1667V0.833333H54.841C56.7929 0.833333 58.4614 1.16667 59.8466 1.83333C61.2528 2.5 62.3336 3.45555 63.0892 4.7C63.8447 5.94445 64.2225 7.42222 64.2225 9.13333C64.2225 10.8444 63.8447 12.3222 63.0892 13.5667C62.3336 14.8111 61.2528 15.7667 59.8466 16.4333C58.4614 17.1 56.7929 17.4333 54.841 17.4333H48.041L49.8669 15.4V24.1667H45.7744ZM49.8669 15.8667L48.041 13.7667H54.6521C56.4571 13.7667 57.8108 13.3667 58.7132 12.5667C59.6367 11.7444 60.0984 10.6 60.0984 9.13333C60.0984 7.64445 59.6367 6.5 58.7132 5.7C57.8108 4.9 56.4571 4.5 54.6521 4.5H48.041L49.8669 2.36667V15.8667Z"
              fill="#111111"
            />
            <path
              d="M83.7983 0.833333H87.8909V24.1667H83.7983V0.833333ZM72.402 24.1667H68.3094V0.833333H72.402V24.1667ZM84.1131 14.1667H72.0557V10.4667H84.1131V14.1667Z"
              fill="#111111"
            />
            <path
              d="M90.6792 24.1667L100.596 0.833333H104.626L114.574 24.1667H110.292L101.761 3.13333H103.398L94.8978 24.1667H90.6792ZM95.2441 18.7667L96.3459 15.3667H108.246L109.348 18.7667H95.2441Z"
              fill="#111111"
            />
            <path
              d="M136.277 24.5C134.598 24.5 133.034 24.2111 131.586 23.6333C130.159 23.0333 128.91 22.2 127.84 21.1333C126.79 20.0444 125.972 18.7667 125.384 17.3C124.796 15.8333 124.503 14.2333 124.503 12.5C124.503 10.7667 124.796 9.16667 125.384 7.7C125.972 6.23334 126.801 4.96667 127.871 3.9C128.942 2.81111 130.19 1.97778 131.617 1.4C133.045 0.8 134.608 0.5 136.308 0.5C138.113 0.5 139.761 0.833333 141.251 1.5C142.741 2.14444 144 3.11111 145.029 4.4L142.384 7.03334C141.587 6.12222 140.695 5.44445 139.708 5C138.722 4.53333 137.651 4.3 136.497 4.3C135.343 4.3 134.283 4.5 133.317 4.9C132.373 5.3 131.544 5.86667 130.83 6.6C130.138 7.33333 129.592 8.2 129.193 9.2C128.816 10.2 128.627 11.3 128.627 12.5C128.627 13.7 128.816 14.8 129.193 15.8C129.592 16.8 130.138 17.6667 130.83 18.4C131.544 19.1333 132.373 19.7 133.317 20.1C134.283 20.5 135.343 20.7 136.497 20.7C137.651 20.7 138.722 20.4778 139.708 20.0333C140.695 19.5667 141.587 18.8667 142.384 17.9333L145.029 20.6C144 21.8667 142.741 22.8333 141.251 23.5C139.761 24.1667 138.103 24.5 136.277 24.5Z"
              fill="#111111"
            />
            <path
              d="M158.776 24.1667V20.5667L158.556 19.8V13.5C158.556 12.2778 158.209 11.3333 157.517 10.6667C156.824 9.97778 155.775 9.63333 154.368 9.63333C153.424 9.63333 152.49 9.78889 151.567 10.1C150.664 10.4111 149.898 10.8444 149.268 11.4L147.726 8.36667C148.628 7.63333 149.699 7.08889 150.937 6.73334C152.196 6.35556 153.498 6.16667 154.841 6.16667C157.275 6.16667 159.154 6.78889 160.476 8.03333C161.819 9.25556 162.491 11.1556 162.491 13.7333V24.1667H158.776ZM153.487 24.4C152.228 24.4 151.126 24.1778 150.181 23.7333C149.237 23.2667 148.502 22.6333 147.978 21.8333C147.474 21.0111 147.222 20.0889 147.222 19.0667C147.222 18.0667 147.443 17.1667 147.883 16.3667C148.345 15.5667 149.09 14.9333 150.118 14.4667C151.147 14 152.511 13.7667 154.211 13.7667H159.091V16.5333H154.494C153.151 16.5333 152.249 16.7667 151.787 17.2333C151.325 17.6778 151.094 18.2333 151.094 18.9C151.094 19.6556 151.378 20.2556 151.944 20.7C152.511 21.1444 153.298 21.3667 154.306 21.3667C155.271 21.3667 156.131 21.1333 156.887 20.6667C157.664 20.2 158.22 19.5111 158.556 18.6L159.217 21.1C158.839 22.1444 158.157 22.9556 157.17 23.5333C156.205 24.1111 154.977 24.4 153.487 24.4Z"
              fill="#111111"
            />
            <path
              d="M172.735 24.4C171.329 24.4 169.976 24.2111 168.674 23.8333C167.394 23.4333 166.376 22.9556 165.621 22.4L167.132 19.2333C167.887 19.7444 168.79 20.1667 169.839 20.5C170.889 20.8333 171.938 21 172.987 21C174.226 21 175.118 20.8222 175.663 20.4667C176.23 20.1111 176.513 19.6333 176.513 19.0333C176.513 18.5444 176.324 18.1778 175.947 17.9333C175.569 17.6667 175.076 17.4667 174.467 17.3333C173.858 17.2 173.176 17.0778 172.421 16.9667C171.686 16.8556 170.941 16.7111 170.185 16.5333C169.451 16.3333 168.779 16.0556 168.171 15.7C167.562 15.3222 167.069 14.8222 166.691 14.2C166.313 13.5778 166.124 12.7556 166.124 11.7333C166.124 10.6 166.429 9.62222 167.037 8.8C167.646 7.95556 168.496 7.31111 169.587 6.86667C170.7 6.4 172.011 6.16667 173.523 6.16667C174.656 6.16667 175.8 6.3 176.954 6.56667C178.108 6.83333 179.063 7.21111 179.819 7.7L178.308 10.8667C177.51 10.3556 176.702 10.0111 175.884 9.83333C175.086 9.63333 174.289 9.53333 173.491 9.53333C172.295 9.53333 171.403 9.72222 170.815 10.1C170.248 10.4778 169.965 10.9556 169.965 11.5333C169.965 12.0667 170.154 12.4667 170.532 12.7333C170.91 13 171.403 13.2111 172.011 13.3667C172.62 13.5222 173.292 13.6556 174.026 13.7667C174.782 13.8556 175.527 14 176.261 14.2C176.996 14.4 177.668 14.6778 178.276 15.0333C178.906 15.3667 179.41 15.8444 179.787 16.4667C180.165 17.0889 180.354 17.9 180.354 18.9C180.354 20.0111 180.039 20.9778 179.41 21.8C178.801 22.6222 177.93 23.2667 176.797 23.7333C175.663 24.1778 174.31 24.4 172.735 24.4Z"
              fill="#111111"
            />
            <path
              d="M190.071 24.4C188.224 24.4 186.797 23.9 185.789 22.9C184.782 21.8778 184.278 20.3778 184.278 18.4V2.43333H188.213V18.3C188.213 19.1444 188.413 19.8 188.811 20.2667C189.231 20.7333 189.808 20.9667 190.543 20.9667C191.424 20.9667 192.159 20.7222 192.747 20.2333L193.848 23.2C193.387 23.6 192.82 23.9 192.148 24.1C191.477 24.3 190.784 24.4 190.071 24.4ZM181.508 9.83333V6.5H192.715V9.83333H181.508Z"
              fill="#111111"
            />
          </svg>
        </div>

        <span>Connecting Stories That Matter</span>
        <SpotifyAuthButton />
        <p>
          沒有帳號嗎？{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.spotify.com/hk-zh/signup"
            style={{ textDecoration: "underline", color: "black" }}
          >
            註冊帳號
          </a>
        </p>
      </div>

      <div className="copyright">Copyright 2023</div>
    </>
  );
};

export default LoginWrapper;
