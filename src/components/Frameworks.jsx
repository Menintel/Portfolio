import { OrbitingCircles } from "./ui/OrbitingCircles";


export function Frameworks() {
    const skills = [
        "cplusplus",
        "csharp",
        "css3",
        "dotnet",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "sqlite",
        "tailwindcss",
        "vitejs",
        "wordpress", 
    ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
            {skills.map((skill, index)=>(<Icon
              key={index} size={40}
              src={`assets/logos/${skill}.svg`}
              />))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={100} reverse speed={2}>
            {skills.reverse().map((skill, index)=>(<Icon
            key={index} size={20}
            src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src , size = 40}) => (
    <img src={src} 
    width={size} height={size}
    className="rounded-sm hover:scale-110 duration-200" alt="rounded-icon"  />
)