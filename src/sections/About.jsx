import CopyEmailButton from "../components/CopyEmailButton"
import { Frameworks } from "../components/Frameworks"
import { Globe } from "../components/ui/Globe"


const About = () => {
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mid:auto-rows-[18rem] mt-12">
            {/*grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.webp" className="absolute scale-[2] -right-[5rem]
                    -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" alt="coding-image-bg"/>
                <div className="z-10">
                    <p className="headtext">Hi, My Name's <br/><b>ELIUD MUSENGE</b></p>
                    <p className="subtext">Am a Web and Software developer with a Degree in computer science.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            
            {/*grid 2 */}
            <div className="grid-default-color grid-2">
                <div className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">CODE FOR CREATORS</p>
                    {/* Programming Languages */}
                </div>
            </div>

            {/*grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Location</p>
                    <p className="subtext">I'm Based In Meknes, Morocco. <br />I Am Open to Work On Site <br /> and or Remotely.</p>
                    <figure className="absolute left-[40%] top-[10%]">
                       <Globe />
                    </figure>
                </div>
            </div>
            {/*grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext"> Let's build something together?</p>
                    < CopyEmailButton />
                </div>
            </div>
            {/*grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Tech Stack</p>
                    <p className="subtext">
                        Specialized in modern frameworks and programming languages to create efficient and user-friendly applications.
                    </p>
                    <button className="mt-5 cursor-pointer" 
                    >View Certifications</button>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Frameworks />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About