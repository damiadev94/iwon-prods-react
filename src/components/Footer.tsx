
export default function Footer(props: any) {
  return (
    <div className="relative flex w-full items-center justify-center bg-darkGray py-10">
      <div className="flex w-[975px] flex-col items-center justify-center gap-10 text-[10px] font-light text-zinc-400">
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src="images/iwon-logo.svg"
              alt="image"
              width={80}
              height={0}
            />
            <span>Filmaciones Futuristas.</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[14px]">
          <div className="flex gap-[20px]">
            <a href="#">Politicas</a>
            <a href="#">Garantia</a>
            <a href="#">Sorteo</a>
            <a href="#">Reembolso</a>
          </div>
          <div>
            <p>iWon Prods ©. 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
