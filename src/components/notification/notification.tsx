import { Button } from "../ui/button";

function Notification() {
  return (
    <div>
      <Button className="w-[40px] h-[40px] rounded-full relative bg-accent hover:bg-accent-hover-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.517"
          height="24.001"
          viewBox="0 0 21.517 24.001"
        >
          <g
            id="bell_3_"
            data-name="bell (3)"
            transform="translate(-1.09 0.001)"
          >
            <path
              id="Path_16706"
              data-name="Path 16706"
              d="M7.424,21a4.99,4.99,0,0,0,9.152,0Z"
              fill="#017bfe"
            />
            <path
              id="Path_16707"
              data-name="Path 16707"
              d="M22.392,12.549,20.656,6.826A9.321,9.321,0,0,0,2.58,7.28L1.232,12.817A5,5,0,0,0,6.09,19H17.607a5,5,0,0,0,4.785-6.451Z"
              fill="#017bfe"
            />
          </g>
        </svg>

        <span className="w-[8px] h-[8px] bg-pink-500 rounded-full absolute top-[10px] right-[9px] border-accent border-[1px]"></span>
      </Button>
    </div>
  );
}

export default Notification;
