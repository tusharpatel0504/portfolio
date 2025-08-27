import React from 'react';
import FlipLink from "../components/ui/FlipLink"; // Adjust path as needed
import { LinkedinIcon, GithubIcon, GmailIcon } from "../components/Icons"; // Adjust path as needed
import NavBar from './NavBar';
import { Footer } from './Footer';

function MyPage() {
  return (
    <>
    <div>
      <NavBar/>
      <div className="grid h-screen place-content-center bg-black text-white gap-4">
     
      
      <FlipLink href="https://www.linkedin.com/in/tusharpatel10954/" icon={<LinkedinIcon />}>
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/tusharpatel0504" icon={<GithubIcon />}>
        Github
      </FlipLink>
      <FlipLink href="mailto:tushar.230101145@iiitbh.ac.in" icon={<GmailIcon />}>
        Gmail
      </FlipLink>
    
    </div>
    <Footer />
    </div>
    
    </>
  );
}

export default MyPage;