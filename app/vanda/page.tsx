import Header, { cards } from "@/components/header-component";

export default async function VandaPage() {
  return (
    <h1
      className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      Vanda
      <Header />
      {/* {cards.map((card, index) => {
        return <div key={index}>
          <p>{card.name}</p>
        </div>
      })} */}
    </h1>
  );
}
