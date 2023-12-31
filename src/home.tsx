import BodyWrapper from "./BodyWrapper";
import Socials from "./Socials";
import profilePicture from "./assets/profile-img.jpg";
import { Separator } from "@/components/ui/separator";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <BodyWrapper>
        <div className="flex justify-center">
          <div className="md:max-w-screen-md">
            <h1 className="text-5xl font-bold text-left my-5">
              <span className="text-primary">Adrian </span>
              Balbalosa
            </h1>
            <div className="md:flex md:flex-row-reverse md:gap-20">
              <img
                src={profilePicture}
                alt="A photo of me"
                className="md:h-60 w-auto rounded-md shadow-xl mb-5 mx-auto"
              />
              <div>
                <p className="text-left mb-5">Hey, I'm Adrian!</p>
                <p className="text-left mb-5">
                  I study Computer Science at UNSW as a final year undergraduate student.
                  I actually swapped degrees twice, originally studying International
                  Studies, then Commerce/Arts at Macquarie Uni, before transferring to
                  UNSW to final pursue the degree I'm most passionate about!
                </p>
                <p className="text-left mb-5">
                  I am also currently doing my first Software Engineering Internship at
                  MongoDB, where I work on the Charts Team. Before that, I was teaching
                  kids how to code as a coding coach at Skill Samurai.
                </p>
                <p className="text-left mb-5">
                  My hobbies include playing electric guitar, and on rare occasions, make
                  music. I am a casual powerlifter, and have participated in two novice
                  competitions. In my downtime, I enjoy playing video games like Elden
                  Ring, Genshin Impact and Final Fantasy XIV. I occasionally watch anime
                  and read manga as well.
                </p>
              </div>
            </div>
            <Separator />
            <Socials />
          </div>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Home;
