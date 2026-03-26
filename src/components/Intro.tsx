
import ProfilePic from "./ProfilePic";
import Resume from "./Resume";
import CopyEmailBtn from "./CopyEmailBtn";
const Intro = () => {
  return (
    <div className="flex-col flex gap-6 p-5">
      <div className="flex items-center justify-center">
        <ProfilePic />
      </div>

      <div>
        <h1 className="text-2xl py-2">Hi, I am Nandalal Shukla.</h1>
        <p>
          a fullstack developer 1+ years of experience building performant,
          accessible web applications. I specialize in React, Next.js,
          TypeScript and Nodejs, and I focus on creating maintainable code,
          thoughtful UX, and reliable backends.
        </p>
        <p>
          a fullstack developer 1+ years of experience building performant,
          accessible web applications. I specialize in React, Next.js,
          TypeScript and Nodejs, and I focus on creating maintainable code,
          thoughtful UX, and reliable backends.
        </p>

        <div className="py-4">
          <Resume />
          <CopyEmailBtn />
        </div>
      </div>
    </div>
  );
};

export default Intro;
